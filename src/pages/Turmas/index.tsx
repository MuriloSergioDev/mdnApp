import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './style';
import Button from '../../components/Button'
import TurmaModal from '../../components/TurmaModal'
import { Feather } from '@expo/vector-icons';


// import { Container } from './styles';

type Props = {

}

const Turmas = ({ }: Props) => {

    const navigation = useNavigation();
    const user = 'Gustavo Miranda'
    const turma = 'Segunda 2020-1'

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToCreateTurma() {
        navigation.navigate('CreateTurma');
    }


    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.navUp}>
                    <Feather name="arrow-left" size={30} color="white" onPress={() => { navigateBack() }} />
                    <Image
                        style={styles.logo}
                        source={require("../../public/logoalt.png")}></Image>
                    <Feather name="plus-square" size={30} color="white" onPress={() => { navigateToCreateTurma() }} />
                </View>
                <View style={styles.navDown}>
                    <Text style={styles.textNav}>Turma Atual</Text>
                    <Text style={styles.textNav}>{turma}</Text>
                </View>
            </View>

            <View>
            <TurmaModal
                    title='Segunda 2020-1'
                    start="02/02/2021"
                    end="02/12/2021"
                    colorStatus="green"
                    onPress={() => { }}></TurmaModal>
                <TurmaModal
                    title='Terça 2020-1'
                    start="02/02/2021"
                    end="02/12/2021"
                    colorStatus="green"
                    onPress={() => { }}></TurmaModal>
                <TurmaModal
                    title='Quarta 2020-1'
                    start="02/02/2021"
                    end="02/12/2021"
                    onPress={() => { }}></TurmaModal>
                <TurmaModal
                    title='Quinta 2020-1'
                    start="02/02/2021"
                    end="02/12/2021"
                    onPress={() => { }}></TurmaModal>
                    <TurmaModal
                    title='Sexta 2020-1'
                    start="02/02/2021"
                    end="02/12/2021"
                    colorStatus="green"
                    onPress={() => { }}></TurmaModal>
            </View>

        </View>
    )
}

export default Turmas;