import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image, FlatList } from 'react-native';
import { View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './style'
import Button from '../../components/Button'
import StudentModal from '../../components/StudentModal'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// import { Container } from './styles';

type Props = {

}

const CreateTurma = ({ }: Props) => {

    const navigation = useNavigation();
    const user = 'Gustavo Miranda'
    const turma = '2020-1'

    const data = [
        { name: 'Joao da Silva', id: 'a' },
        { name: 'Joao da Silva', id: 'b' },
        { name: 'Joao da Silva', id: 'c' },
        { name: 'Joao da Silva', id: 'd' }
    ]

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToCharts() {
        navigation.navigate('PerformanceStudent');
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>
            <View>
                <View style={styles.searchBox}>
                    <Feather name="search" size={20} color="#6556A0" />
                    <TextInput style={styles.input}></TextInput>
                </View>
            </View>

            <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <StudentModal
                            name={item.name}
                            onPress={() => { navigateToCharts() }}><Entypo name="emoji-happy" size={24} color="green" /></StudentModal>
                    )}
                />
            <ScrollView>
                

                <StudentModal
                    name='Joao da Silva'
                    colorStatus="green"
                    onPress={() => { navigateToCharts() }}><Entypo name="emoji-happy" size={24} color="green" /></StudentModal>
                <StudentModal
                    name='Romulo Martinez'
                    colorStatus="green"
                    onPress={() => { }}><Entypo name="emoji-happy" size={24} color="green" /></StudentModal>
                <StudentModal
                    name='Juba'
                    colorStatus="green"
                    onPress={() => { }}><Entypo name="emoji-happy" size={24} color="green" /></StudentModal>
                <StudentModal
                    name='Aleixo'
                    colorStatus="green"
                    onPress={() => { }}><Entypo name="emoji-happy" size={24} color="green" /></StudentModal>
                <StudentModal
                    name='Camundongo'
                    colorStatus="green"
                    onPress={() => { }}><Entypo name="emoji-neutral" size={24} color="gold" /></StudentModal>
                <StudentModal
                    name='Kenny'
                    colorStatus="green"
                    onPress={() => { }}><Entypo name="emoji-happy" size={24} color="green" /></StudentModal>
                <StudentModal
                    name='Dom'
                    colorStatus="green"
                    onPress={() => { }}><Entypo name="emoji-happy" size={24} color="green" /></StudentModal>
                <StudentModal
                    name='Lupeu'
                    colorStatus="green"
                    onPress={() => { }}><Entypo name="emoji-sad" size={24} color="red" /></StudentModal>
            </ScrollView>

            <View style={styles.buttonBox}>
                <Button
                    color='#6556A0'
                    underlayColor='#514580'
                    textColor='white'
                    borderColor='#6556A0'
                    label="VOLTAR"
                    onPress={() => { navigateBack() }}>

                </Button>
            </View>

        </View>
    )
}

export default CreateTurma;