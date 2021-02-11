import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { RectButton, TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated } from 'react-native';


type Props = {
    name?: string
    colorStatus?: string
    onPress?: any
    children?: ReactNode
}

const StudentModal = ({ name, colorStatus = "black", onPress, children }: Props) => {

    function handleAlunoDelete() {
        console.log('deletar aluno')
    }

    function handleAlunoEdit() {
        console.log('editar aluno')
    }

    function rightActions(progress, dragX) {
        return (
            <>
                <TouchableOpacity onPress={() => { handleAlunoDelete() }}>
                    <View style={styles.deleteAction}>
                        <Text style={styles.textAction}>Excluir</Text>
                        <Feather name="trash-2" size={20} color="white"/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { handleAlunoEdit() }}>
                    <View style={styles.editAction}>
                        <Text style={styles.textAction}>Editar</Text>
                        <Feather name="trash-2" size={20} color="white"/>
                    </View>
                </TouchableOpacity>
            </>
        );
    }

    return (
        <Swipeable renderRightActions={rightActions} >
            <TouchableHighlight onPress={onPress} >

                <View style={styles.container} >
                    {children}
                    <View style={styles.viewBox}>
                        <Text style={styles.textTitle}>{name}</Text>
                    </View>
                </View>

            </TouchableHighlight>
        </Swipeable>
    );

}



export default StudentModal;


