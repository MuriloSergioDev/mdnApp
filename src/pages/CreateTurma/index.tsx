import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { View } from 'react-native';
import styles from './styles'
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


// import { Container } from './styles';

type Props = {

}

const CreateTurma = ({ }: Props) => {

    const navigation = useNavigation();
    const user = 'Gustavo Miranda'

    const [turma, setTurma] = useState<TurmaInterface>({
        title: '',
        status: true
    })
    const [dateInicio, setDateInicio] = useState("")
    const [dateFim, setDateFim] = useState("")
    const [modalAlertVisible, setModalAlertVisible] = useState(false);

    function navigateBack() {
        navigation.goBack();
    }

    async function handleCreateNewTurma() {

        try {
            const data = {
                title: turma.title,
                start: dateInicio,
                end: dateFim,
                status: turma.status,
            }

            db.collection('turmas')
                .doc()
                .set(data)

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
                    <Feather name="plus" size={30} color="white" onPress={() => { handleCreateNewTurma() }} />
                </View>

            </View>

            <AlertModal
                header='Turma inserida com sucesso'
                comfirmationString='Ok'
                isVisible={modalAlertVisible}
                close={() => {
                    setModalAlertVisible(false)
                    navigateBack()
                }}>
                <AntDesign name="checkcircle" size={24} color="green" />
            </AlertModal>

            <View style={styles.navDown}>

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

export default CreateTurma;