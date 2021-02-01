import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import styles from './style'
import Button from '../../components/Button'
import StudentModal from '../../components/StudentModal'
import BarChartExample from '../../components/BarChartExample'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'

// import { Container } from './styles';

type Props = {

}

const PerformanceStudent = ({ }: Props) => {

    const navigation = useNavigation();
    const user = 'Gustavo Miranda'
    const aluno = 'Romulo Martinez'
    const turma = '2020-1'
    const fill = 'rgb(134, 65, 244)'
    const data = [{ value: 50, label: 'facil', svg: { fill: "#F0D65D" } }, { value: 100, label: 'medio', svg: { fill: '#5D6CF0' } }, { value: 30, label: 'dificil', svg: { fill: '#A05656' } }]
    const data2 = [0, 100]

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 30, bottom: 10 }
    const xAxisHeight = 0
    


    function navigateBack() {
        navigation.goBack();
    }

    function navigateToCharts() {
        navigation.navigate('Login');
    }



    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>
            <View>

                <Text style={styles.text}>Aluno : {aluno}</Text>

            </View>
            <ScrollView style={styles.scroll}>
                <Text>% de acertos</Text>
                <View style={{ height: 300, padding: 0, flexDirection: 'row' }}>

                    <YAxis
                        data={data2}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <BarChart style={{ height: 300 }} data={data} yAccessor={({ item }) => item.value} svg={{ fill }} contentInset={{ top: 30, bottom: 20 }}>
                            <Grid direction={Grid.Direction.VERTICAL} />
                            <Grid direction={Grid.Direction.HORIZONTAL} />                     
                        </BarChart>
                        
            
                        
                    </View>
                </View>
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

export default PerformanceStudent;