import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles'
import Button from '../../components/Button'
import TurmaModal from '../../components/TurmaModal'
import { Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker'
import { useState } from 'react';


// import { Container } from './styles';

type Props = {

}

const CreateTurma = ({ }: Props) => {

    const navigation = useNavigation();
    const user = 'Gustavo Miranda'
    const turma = '2020-1'

    const [dateInicio, setDateInicio] = useState('')
    const [dateFim, setDateFim] = useState('')

    function navigateBack() {
        navigation.goBack();
    }



    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.navUp}>
                    <Feather name="arrow-left" size={30} color="white" onPress={() => { navigateBack() }} />
                    <Image
                        style={styles.logo}
                        source={require("../../public/logoalt.png")}></Image>
                    <Feather name="plus" size={30} color="white" onPress={() => { navigateBack() }} />
                </View>

            </View>

            <View style={styles.navDown}>
                <Text style={styles.textNav}>Nome da Turma</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.textNav}>Inicio</Text>
                <DatePicker
                    style={styles.datePicker}
                    date={dateInicio}
                    mode="date"
                    placeholder="Selecione a data"
                    format="DD-MM-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        },
                        placeholderText: {
                            color: 'white'
                        },
                        dateText: {
                            color: 'white'
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => { setDateInicio(date) }}
                />

                <Text style={styles.textNav}>Fim</Text>
                <DatePicker
                    style={styles.datePicker}
                    date={dateFim}
                    mode="date"
                    placeholder="Selecione a data"
                    format="DD-MM-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        },
                        placeholderText: {
                            color: 'white'
                        },
                        dateText: {
                            color: 'white'
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => { setDateFim(date) }}
                />
            </View>
        </View>
    )
}

export default CreateTurma;