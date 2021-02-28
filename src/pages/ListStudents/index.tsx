import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import styles from './style'
import Button from '../../components/Button'
import StudentModal from '../../components/StudentModal'
import { Entypo } from '@expo/vector-icons';
import Separator from '../../components/Separator';
import { UserInterface } from '../../interface/interface';
import SearchBox from '../../components/SearchBox';
import { db } from '../../config/Firebase';
import { Modal } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';
import firebase from 'firebase';
import AlertModal from '../../components/AlertModal';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const CreateTurma = ({ route }) => {

    const navigation = useNavigation();
    const [messageAlert, setMessageAlert] = useState('');
    const [search, setSearch] = useState<string>('')
    const [students, setStudents] = useState<UserInterface[]>()
    const [modalTurmaVisible, setModalTurmaVisible] = useState(false);
    const turmasTemp = []
    const [turmas, setTurmas] = useState([]);
    //,'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'
    const [turma, setTurma] = useState();
    const studentsTemp = []
    const [user, setUser] = useState<UserInterface>()
    const [modalAlertVisible, setModalAlertVisible] = useState(false);
    let userTemp: UserInterface = {

    }

    useEffect(() => {
        getStudents()
        getTurmas()
        getUser()
    }, [])

    async function getStudents() {
        while(studentsTemp.length){
            studentsTemp.pop()
        }
        try {
            const data = await db
                .collection('users')
                .where('permission', '==', 1)
                .get()

            data.forEach((doc) => {
                //console.log(doc.data())
                studentsTemp.push(doc.data())
            })
            setStudents(studentsTemp)
            // db.collection("users").where('permission', '==', 1).where('ativo', '==', 1)
            //     .onSnapshot(function (snapshot) {
            //         snapshot.docChanges().forEach(function (change) {
            //             if (change.type === "added") {
            //                 console.log("New Student: ", change.doc.data());
            //                 studentsTemp.push(change.doc.data())
            //             }
            //             if (change.type === "modified") {
            //                 console.log("Modified Student: ", change.doc.data());
            //                 studentsTemp.push(change.doc.data())
            //             }
            //             if (change.type === "removed") {
            //                 console.log("Removed2 Student: ", change.doc.data());
            //             }
            //         });
            //         setStudents(studentsTemp)
            //     });
        }
        catch (error) {
            alert(error)
        }
    }

    async function getUser() {
        try {
            const data = await db
                .collection('users')
                .where('uid', '==', firebase.auth().currentUser.uid)
                .get()

            data.forEach((doc) => {

                const values = {
                    uid: doc.get("uid"),
                    name: doc.get("name"),
                    turma: doc.get("turma"),
                    permission: doc.get("permission"),
                }
                userTemp = values
            })

            setUser(userTemp)
        }
        catch (error) {
            alert(error)
        }
    }

    async function getTurmas() {
        try {
            const data = await db
                .collection('turmas')
                .where('status', '==', true)
                .get()

            data.forEach((doc) => {

                const turma = {
                    value: doc.get("title"),
                    label: doc.get("title"),
                }
                //console.log(turma)
                turmasTemp.push(turma)
            })
            setTurmas(turmasTemp)
        }
        catch (error) {
            alert(error)
        }
    }

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToCharts(data) {
        navigation.navigate('PerformanceStudent', {
            name: data.name,
            uid: data.uid
        });
    }

    function navigateToMenu() {
        navigation.navigate('Menu', {
            name: user.name,
            uid: user.uid,
            turma: user.turma,
            permission: user.permission,
            isModalShow: true
        });
    }

    function filterBySearch(Student: UserInterface) {
        if (Student.name?.toLocaleLowerCase()?.indexOf(search.toLowerCase()) === -1)
            return null
        if (Student.turma !== turma && turma != null)
            return null

        return Student
    }

    const filtered = students?.filter(filterBySearch)
    let modalIcon = messageAlert == 'Aluno excluido com sucesso' ? <AntDesign name="checkcircle" size={24} color="green" /> : <Foundation name="alert" size={24} color="#e6d927" />

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.navUp}>
                    <Feather name="arrow-left" size={30} color="white" onPress={() => { navigateBack() }} />
                    <Image
                        style={styles.logo}
                        source={require("../../public/logoalt.png")}></Image>
                </View>
            </View>
            <AlertModal
                header={messageAlert}
                comfirmationString='Ok'
                isVisible={modalAlertVisible}
                close={() => {
                    setModalAlertVisible(false)
                }}>
                {modalIcon}
            </AlertModal>
            <View style={styles.inputBox}>
                <Text style={styles.textTurma}>Turma</Text>
                <RNPickerSelect
                    placeholder={{ label: 'Selecione uma turma', value: null }}
                    value={turma}
                    onValueChange={(value) => setTurma(value)}
                    items={turmas}
                    style={pickerSelectStyles}
                />
            </View>
            <View>
                <SearchBox onChangeText={(text) => setSearch(text)} value={search} />
            </View>

            {
                filtered != null ?
                    <FlatList
                        data={filtered}
                        keyExtractor={item => item.uid}
                        ItemSeparatorComponent={() => <Separator />}
                        renderItem={({ item }) => (
                            <StudentModal
                                showAlertModalSucess={() => { 
                                    getStudents()
                                    setMessageAlert('Aluno excluido com sucesso')
                                    setModalAlertVisible(true)
                                }}
                                showAlertModalFail={() => { 
                                    setMessageAlert('Erro ao excluir aluno')
                                    setModalAlertVisible(true)
                                }}
                                user={item}
                                colorStatus="green"
                                onPress={() => { navigateToCharts(item) }}><Entypo name="emoji-happy" size={24} color="green" /></StudentModal>
                        )}
                    />
                    : <ActivityIndicator animating={true} color='#6556A0' size={50} />
            }

        </View>
    )
}

export default CreateTurma;

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});