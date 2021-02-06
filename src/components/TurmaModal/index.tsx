import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacityBase } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './style'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title?: string
    start?: string
    end?: string
    colorStatus?: string
    onPress?: any
}

const TurmaModal = ({ title, start, end, colorStatus = "black", onPress }: Props) => {

    const navigation = useNavigation();
    
    function navigateBack() {
        navigation.goBack();
    }

    function handleTurmaDelete(){
        console.log('deletar turma')
    }

    return (
        <TouchableHighlight onPress={onPress} underlayColor="lightgray">
            <View style={styles.container} >
                <Feather name="circle" size={20} color={colorStatus}/>
                <View style={styles.viewBox}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <View style={styles.periodBox}>
                        <Text style={styles.textPeriod}>{start}</Text>
                        <Text style={styles.textPeriod}>{end}</Text>
                    </View>
                </View>
                <Feather name="trash-2" size={20} color="black" onPress={()=>{handleTurmaDelete()}}/>
            </View>
        </TouchableHighlight>
    );

}



export default TurmaModal;


