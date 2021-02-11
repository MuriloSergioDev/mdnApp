import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, Image, FlatList, Animated } from 'react-native';
import { View } from 'react-native';
import { RectButton, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style'
import Button from '../../components/Button'
import StudentModal from '../../components/StudentModal'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import Separator from '../../components/Separator';
import { StudentInterface } from '../../interface/interface';
import SearchBox from '../../components/SearchBox';

type Props = {

}

const CreateTurma = ({ }: Props) => {

    const navigation = useNavigation();
    const [search, setSearch] = useState<string>('')
    const [students, setStudents] = useState<StudentInterface[]>()
    const user = 'Gustavo Miranda'
    const turma = '2020-1'

    const data = [
        { name: 'Joao da Silva', id: 'a' },
        { name: 'Romulo Martinez', id: 'b' },
        { name: 'Juba', id: 'c' },
        { name: 'Aleixo', id: 'd' },
        { name: 'Camundongo', id: 'e' },
        { name: 'Kenny', id: 'f' },
        { name: 'Dom', id: 'g' },
        { name: 'Lupeu', id: 'h' }
    ]

    useEffect(() => {
        setStudents(data)
    }, [])


    function navigateBack() {
        navigation.goBack();
    }

    function navigateToCharts() {
        navigation.navigate('PerformanceStudent');
    }

    function filterBySearch(Student: StudentInterface) {
        if (Student.name?.toLocaleLowerCase()?.indexOf(search.toLowerCase()) !== -1)
            return Student
    }

    const filtered = students?.filter(filterBySearch)

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>
            <View>
                <SearchBox onChangeText={(text)=>setSearch(text)} value={search} />
            </View>

            {
                filtered != null ?
                    <FlatList
                        data={filtered}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <Separator />}
                        renderItem={({ item }) => (
                            <StudentModal
                                name={item.name}
                                colorStatus="green"
                                onPress={() => { navigateToCharts() }}><Entypo name="emoji-happy" size={24} color="green" /></StudentModal>
                        )}
                    />
                    : <Text>Carregando ...</Text>
            }

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