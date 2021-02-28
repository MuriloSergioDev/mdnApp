import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image, Switch } from 'react-native';
import { View } from 'react-native';
import styles from './style'
import Button from '../../components/Button'
import TurmaModal from '../../components/TurmaModal'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import DatePicker from '@react-native-community/datetimepicker'
import { useState } from 'react';
import DatePicker from '../../components/DatePicker';
import { TextInput } from 'react-native-paper';
import { TurmaInterface } from '../../interface/interface';
import firebase from 'firebase';
import AlertModal from '../../components/AlertModal';
import { AntDesign } from '@expo/vector-icons';
import { db } from '../../config/Firebase';
import style from '../../components/AlertModal/style';
import { Entypo } from '@expo/vector-icons';


// import { Container } from './styles';

type Props = {

}

const EditTurma = ({ route }) => {
    
    const { id, title, start, end, status } = route.params
    const navigation = useNavigation();
    const user = 'Gustavo Miranda'

    const [turma, setTurma] = useState<TurmaInterface>({
        id,
        title,
        start,
        end,
        status,
    })
    const [dateInicio, setDateInicio] = useState(start)
    const [dateFim, setDateFim] = useState(end)
    const [modalAlertVisible, setModalAlertVisible] = useState(false);
    

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToMenu() {
        navigation.navigate('Menu');
    }

    async function handleUpdateTurma() {

        try {
            const data = {
                title: turma.title,
                start: dateInicio,
                end: dateFim,
                status: turma.status,
            }

            db.collection('turmas')
                .doc(turma.id)
                .update(data)

            setModalAlertVisible(true)

        }
        catch (error) {
            alert(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.navUp}>
                    <Feather name="arrow-left" size={30} color="white" onPress={() => { navigateBack() }} />
                    <Image
                        style={styles.logo}
                        source={require("../../public/logoalt.png")}></Image>
                    <Entypo name="save" size={30} color="white" onPress={() => { handleUpdateTurma() }} />
                </View>

            </View>

            <AlertModal
                header='Turma editada com sucesso'
                comfirmationString='Ok'
                isVisible={modalAlertVisible}
                close={() => {
                    setModalAlertVisible(false)
                    navigateToMenu()
                }}>
                <AntDesign name="checkcircle" size={24} color="green" />
            </AlertModal>

            <View style={styles.navDown}>
                <View style={styles.containerAtivo}>
                    <Text style={styles.textAtivo}>Ativar / Desativar</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "green" }}
                        thumbColor={turma.status ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(value => setTurma(prevState => { return { ...prevState, status: value } }))}
                        value={turma.status}
                        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                    />
                </View>
                {/* @ts-ignore */}
                <TextInput
                    theme={{
                        colors: {
                            placeholder: 'white', text: 'white', primary: 'white'
                        }
                    }}
                    style={styles.input}
                    mode='flat'
                    label="Turma"
                    value={turma.title}
                    onChangeText={(value => setTurma(prevState => { return { ...prevState, title: value } }))}
                />

                <Text style={styles.textNav}>Inicio</Text>
                <DatePicker setDate={setDateInicio} value={dateInicio}></DatePicker>

                <Text style={styles.textNav}>Fim</Text>
                <DatePicker setDate={setDateFim} value={dateFim}></DatePicker>

            </View>
        </View>
    )
}

export default EditTurma;