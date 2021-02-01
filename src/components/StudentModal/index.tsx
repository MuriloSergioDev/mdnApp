import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacityBase } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';
import { Feather } from '@expo/vector-icons';


type Props = {
    name?: string
    colorStatus?: string
    onPress?: any
    children?: ReactNode
}

const StudentModal = ({ name, colorStatus = "black", onPress, children }: Props) => {

    function handleTurmaDelete(){
        console.log('deletar aluno')
    }

    return (
        <TouchableHighlight onPress={onPress} underlayColor="lightgray">
            <View style={styles.container} >
                {children}
                <View style={styles.viewBox}>
                    <Text style={styles.textTitle}>{name}</Text>
                </View>
                <Feather name="trash-2" size={20} color="black" onPress={()=>{handleTurmaDelete()}}/>
            </View>
        </TouchableHighlight>
    );

}



export default StudentModal;


