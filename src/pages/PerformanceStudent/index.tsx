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
//import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { render } from 'react-dom';
import { BarChart } from "react-native-chart-kit"
import { Dimensions } from "react-native";
import { TouchableHighlight } from 'react-native';

// import { Container } from './styles';

type Props = {

}



const PerformanceStudent = ({ }: Props) => {

    const navigation = useNavigation();
    const user = 'Gustavo Miranda'
    const aluno = 'Romulo Martinez'
    const turma = '2020-1'
    const fill = 'rgb(134, 65, 244)'
    //const data = [{ value: 50, label: 'facil', svg: { fill: "#F0D65D" } }, { value: 100, label: 'medio', svg: { fill: '#5D6CF0' } }, { value: 30, label: 'dificil', svg: { fill: '#A05656' } }]
    //const data = [ 10, 5, 25, 15, 20 ]
    const screenWidth = Dimensions.get("window").width;
    const data = {
        labels: ["Facil", "Medio", "Dificil"],
        datasets: [
            {
                data: [20, 45, 28,]
            }
        ],
        barColors: ["red", "yellow", "blue"]
    };
    const data2 = [0, 100]
    const chartConfig = {
        backgroundGradientFrom: "rgba(229, 229, 229, 0.55)",
        backgroundGradientTo: "rgba(229, 229, 229, 0.55)",
        fillShadowGradientOpacity: 1,
        color: (opacity = 1) => `#6556A0`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false // optional
    };

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToCharts() {
        navigation.navigate('Login');
    }
    function handleTurmaDelete() {
        console.log('deletar aluno')
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
                <Text style={styles.textScroll}>% de Acertos</Text>

                <BarChart
                    style={styles.chart}
                    data={data}
                    width={screenWidth}
                    height={320}
                    yAxisLabel=""
                    yAxisSuffix="%"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                    fromZero={true}
                    withInnerLines={true}
                    showValuesOnTopOfBars={true}
                    showBarTops={false}
                />
            </ScrollView>

            <TouchableHighlight onPress={() => { handleTurmaDelete() }} underlayColor="lightgray">
                    <View style={styles.containerExclusion}>
                        <Text style={styles.textExclusion}>Excluir Aluno</Text>
                        <Feather name="trash-2" size={20} color="red" onPress={()=>{handleTurmaDelete()}}/>
                    </View>
                </TouchableHighlight>

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