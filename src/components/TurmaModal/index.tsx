import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './style'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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

    function handleTurmaDelete() {
        console.log('deletar turma')
    }

    function handleTurmaEdit() {
        console.log('editar turma')
    }

    function rightActions(progress, dragX) {
        return (
            <>
                <TouchableOpacity onPress={() => { handleTurmaDelete() }}>
                    <View style={styles.deleteAction}>
                        <Text style={styles.textAction}>Excluir</Text>
                        <Feather name="trash-2" size={20} color="white"/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { handleTurmaEdit() }}>
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
            <TouchableHighlight onPress={onPress} underlayColor="lightgray">
                <View style={styles.container} >
                    <Feather name="circle" size={20} color={colorStatus} />
                    <View style={styles.viewBox}>
                        <Text style={styles.textTitle}>{title}</Text>
                        <View style={styles.periodBox}>
                            <Text style={styles.textPeriod}>{start}</Text>
                            <Text style={styles.textPeriod}>{end}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );

}



export default TurmaModal;


