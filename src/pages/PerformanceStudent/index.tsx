import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ImageBackground, Text, Image, TouchableOpacity,Clipboard } from 'react-native';
import { StyleSheet, View } from 'react-native';
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
import { DesempenhoInterface, UserInterface } from '../../interface/interface';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { db } from '../../config/Firebase';


const PerformanceStudent = ({ route }) => {

    const navigation = useNavigation();

    const { name, uid } = route.params
    const desempenhoTemp: DesempenhoInterface[] = []
    const bimestresTemp = []
    const [bimestres, setBimestres] = useState([])
    const [bimestre, setBimestre] = useState('');
    const [desempenho, setDesempenho] = useState<DesempenhoInterface[]>()
    const [user, setUser] = useState<UserInterface>(
        {
            name,
            uid,
        }
    )
    const fill = 'rgb(134, 65, 244)'
    //const data = [{ value: 50, label: 'facil', svg: { fill: "#F0D65D" } }, { value: 100, label: 'medio', svg: { fill: '#5D6CF0' } }, { value: 30, label: 'dificil', svg: { fill: '#A05656' } }]
    //const data = [ 10, 5, 25, 15, 20 ]
    const screenWidth = Dimensions.get("window").width;
    const [dataChart, setDataChart] = useState({
        labels: ["Facil", "Medio", "Dificil"],
        datasets: [
            {
                data: [0, 0, 0,]
            }
        ],
        barColors: ["red", "yellow", "blue"]
    })
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


    useEffect(() => {
        getDesempenho()
    }, [])

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToCharts() {
        navigation.navigate('Login');
    }
    function handleTurmaDelete() {
        console.log('deletar aluno')
    }

    async function getDesempenho() {
        try {
            const data = await db
                .collection('desempenho')
                .where('uid', '==', user.uid)
                .get()

            data.forEach((doc) => {

                const data = {
                    facil: doc.get("facil"),
                    medio: doc.get("medio"),
                    dificil: doc.get("dificil"),
                    bimestre: doc.get("bimestre"),
                }
                //console.log(turma)
                desempenhoTemp.push(data)
            })

            desempenhoTemp.map((value) => {
                const data = {
                    value: `${value.bimestre.toString()}º Bimestre`,
                    label: `${value.bimestre.toString()}º Bimestre`,
                }
                bimestresTemp.push(data)
            })
            setBimestres(bimestresTemp)
            setDesempenho(desempenhoTemp)
        }
        catch (error) {
            alert(error)
        }
    }

    function setChart() {
        if (desempenho && bimestre) {
            const data = desempenho.find(value => value.bimestre.toString() === bimestre.substr(0, 1))

            const values = [{
                data: [data.facil, data.medio, data.dificil]
            }]
            setDataChart(prevState => { return { ...prevState, datasets: values } })

        } else {
            const values = [{
                data: [0, 0, 0]
            }]
            setDataChart(prevState => { return { ...prevState, datasets: values } })
        }
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>
            <View>

                <Text style={styles.text}>Aluno : {user.name}</Text>
                <TouchableOpacity onPress={()=>{Clipboard.setString(user.uid)}}>
                    <Text style={styles.textUid}>UID : {user.uid}</Text>
                </TouchableOpacity>
                <View style={styles.inputBox}>
                    <Text style={styles.textTurma}>Bimestre</Text>
                    <RNPickerSelect
                        placeholder={{ label: 'Selecione um bimestre', value: null }}
                        value={bimestre}
                        onValueChange={(value) => {
                            setBimestre(value)
                            setChart()
                        }}
                        items={bimestres}
                        style={pickerSelectStyles}
                    />
                </View>

            </View>
            <ScrollView style={styles.scroll}>
                <Text style={styles.textScroll}>% de Acertos</Text>

                <BarChart
                    style={styles.chart}
                    data={dataChart}
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

            {/* Button delete alternativo */}
            {/* <TouchableHighlight onPress={() => { handleTurmaDelete() }} underlayColor="lightgray">
                    <View style={styles.containerExclusion}>
                        <Text style={styles.textExclusion}>Excluir Aluno</Text>
                        <Feather name="trash-2" size={20} color="red" onPress={()=>{handleTurmaDelete()}}/>
                    </View>
                </TouchableHighlight> */}

            <View style={styles.buttonBox}>
                <Button
                    color='#6556A0'
                    underlayColor='#514580'
                    textColor='white'
                    label="VOLTAR"
                    onPress={() => { navigateBack() }}>

                </Button>
            </View>

        </View>
    )
}

export default PerformanceStudent;

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