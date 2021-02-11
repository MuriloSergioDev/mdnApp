import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
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


// import { Container } from './styles';

type Props = {

}

const CreateTurma = ({ }: Props) => {

    const navigation = useNavigation();
    const user = 'Gustavo Miranda'
    const turma = '2020-1'

    const [dateInicio, setDateInicio] = useState("")
    const [dateFim, setDateFim] = useState("")

    function navigateBack() {
        navigation.goBack();
    }

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        //console.warn("A date has been picked: ", date);
        setDateInicio(date.toUTCString())
        hideDatePicker();
    };

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
                <DatePicker setDateInicio={setDateInicio} value={dateInicio}></DatePicker>

                <Text style={styles.textNav}>Fim</Text>
                <DatePicker setDateInicio={setDateFim} value={dateFim}></DatePicker>
            </View>
        </View>
    )
}

export default CreateTurma;