import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';


type Props = {
    name?: string
    colorStatus?: string
    onPress?: any
    children?: ReactNode
}

const StudentModal = ({ name, colorStatus = "black", onPress, children }: Props) => {

    function handleTurmaDelete() {
        console.log('deletar aluno')
    }

    function rightActions(progress, dragX) {
    //     const trans = dragX.interpolate({
    //   inputRange: [0, 50, 100, 101],
    //   outputRange: [-20, 0, 0, 1],
    // });
        return (
            <TouchableOpacity>
                <View style={styles.rightAction}>
                    <Text style={styles.textAction}>Excluir</Text>
                    <Feather name="trash-2" size={20} color="white" onPress={() => { handleTurmaDelete() }} />
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <Swipeable friction= {1} renderRightActions={rightActions}>
            <TouchableHighlight onPress={onPress} underlayColor="lightgray">

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


