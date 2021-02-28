import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ImageBackground, Text, Image, Modal } from 'react-native';
import { View } from 'react-native';
import { TextInput, Button as ButtonPaper } from 'react-native-paper';
import styles from './styles';
import Button from '../../components/Button'
import { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { TurmaInterface, UserInterface } from '../../interface/interface';
import firebase from "firebase";
import { db } from '../../config/Firebase';
import AlertModal from '../../components/AlertModal';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useEffect } from 'react';


type Props = {

}

const SignUp = ({ }: Props) => {

    const navigation = useNavigation();
    const [modalTurmaVisible, setModalTurmaVisible] = useState(false);
    const [modalAlertVisible, setModalAlertVisible] = useState(false);
    const turmasTemp = []
    const [turmas, setTurmas] = useState([]);
    const [user, setUser] = useState<UserInterface>(
        {
            name: '',
            email: '',
            password: '',
            turma: '',
            permission: 1
        }
    )

    useEffect(() => {
        getTurmas()
    }, [])

    async function handleSignUp() {

        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            if (response.user.uid) {
                const data = {
                    uid: response.user.uid,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    turma: user.turma,
                    permission: user.permission
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(data)

                setModalAlertVisible(true)
            }
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
                    value : doc.get("title"),
                    label : doc.get("title"),
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

    // const data = turmas.map((turma, indice) => {
    //     return <TouchableHighlight
    //         style={styles.turmaHighlight}
    //         onPress={() => {
    //             setModalTurmaVisible(!modalTurmaVisible)
    //             setUser(prevState => { return { ...prevState, turma: turma } })
    //         }}
    //         key={indice}
    //         underlayColor='#514580'
    //     >
    //         <Text style={styles.textStyle}>{turma}</Text>
    //     </TouchableHighlight>
    // })

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalTurmaVisible}
                onRequestClose={() => {
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalHeaderText}>Escolha sua turma</Text>
                        <View style={styles.modalContent}>
                            {data}
                        </View>
                    </View>
                </View>
            </Modal> */}

            <AlertModal
                header='Cadastro realizado com sucesso'
                comfirmationString='Ok'
                isVisible={modalAlertVisible}
                close={() => {
                    setModalAlertVisible(false)
                    navigateBack()
                }}>
                <AntDesign name="checkcircle" size={24} color="green" />
            </AlertModal>


            <View style={styles.inputBox}>
                {/* @ts-ignore */}
                <TextInput
                    theme={{
                        colors: {
                            placeholder: '#6556A0', text: '#6556A0', primary: '#6556A0'
                        }
                    }}
                    style={styles.input}
                    mode='flat'
                    label="Nome"
                    value={user.name}
                    onChangeText={(value => setUser(prevState => { return { ...prevState, name: value } }))}
                />
            </View>

            <View style={styles.inputBox}>
                {/* @ts-ignore */}
                <TextInput
                    theme={{
                        colors: {
                            placeholder: '#6556A0', text: '#6556A0', primary: '#6556A0'
                        }
                    }}
                    style={styles.input}
                    mode='flat'
                    label="Email"
                    value={user.email}
                    onChangeText={(value => setUser(prevState => { return { ...prevState, email: value } }))}
                />
            </View>

            <View style={styles.inputBox}>
                {/* @ts-ignore */}
                <TextInput
                    theme={{
                        colors: {
                            placeholder: '#6556A0', text: '#6556A0', primary: '#6556A0'
                        }
                    }}
                    style={styles.input}
                    secureTextEntry={true}
                    mode='flat'
                    label="Senha"
                    value={user.password}
                    onChangeText={(value => setUser(prevState => { return { ...prevState, password: value } }))}
                />
            </View>

            {/* <View style={styles.inputBox}>
                <TouchableHighlight style={styles.turmaHighlightSelect} onPress={() => { setModalTurmaVisible(true) }} underlayColor='#514580'>
                    <Text style={styles.textTurma}>{user.turma ? user.turma : 'Selecionar Turma'}</Text>
                </TouchableHighlight>
            </View> */}
            <View style={styles.inputBoxSelect}>
                <RNPickerSelect
                    placeholder={{label: 'Selecione uma turma', value: null}}
                    value={user.turma}
                    onValueChange={(value) => setUser(prevState => { return { ...prevState, turma: value } })}
                    items={turmas}
                    style={pickerSelectStyles}
                />
            </View>


            <View style={styles.buttonBox}>
                <Button
                    color='#F0D65D'
                    underlayColor='#d4bc50'
                    textColor='white'
                    borderColor='#F0D65D'
                    label="CRIAR CONTA"
                    onPress={() => { handleSignUp() }}></Button>
            </View>
            <View style={styles.buttonBox}>
                <Button
                    color='#6556A0'
                    underlayColor='#514580'
                    textColor='white'
                    borderColor='#6556A0'
                    label="JÁ POSSUO CONTA"
                    onPress={() => { navigateBack() }}></Button>
            </View>


        </View>
    )
}

export default SignUp;

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