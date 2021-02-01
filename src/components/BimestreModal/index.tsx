import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacityBase } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './style'
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button'
import { useNavigation } from '@react-navigation/native';


type Props = {
    onPress?: any
}

const BimestreModal = ({ onPress }: Props) => {

    const navigation = useNavigation();

    function navigateToListStudents() {
        navigation.navigate('ListStudents');
    }

    return (
        <View style={styles.container} >
            <View style={styles.viewBox}>
                <Text style={styles.textTitle}>Escolha o Bimestre</Text>
                <Ionicons name="close" size={24} color="white" style={styles.icon} onPress={onPress} />
            </View>
            <Button
                label="1º Bimestre"
                color="white"
                textColor="#6556A0"
                borderColor="white"
                underlayColor="#f0efeb"
                onPress={() => { navigateToListStudents() }}></Button>
            <Button
                label="2º Bimestre"
                color="white"
                textColor="#6556A0"
                borderColor="white"
                underlayColor="#f0efeb"
                onPress={() => { navigateToListStudents() }}></Button>
            <Button
                label="3º Bimestre"
                color="white"
                textColor="#6556A0"
                borderColor="white"
                underlayColor="#f0efeb"
                onPress={() => { navigateToListStudents() }}></Button>
            <Button
                label="4º Bimestre"
                color="white"
                textColor="#6556A0"
                borderColor="white"
                underlayColor="#f0efeb"
                onPress={() => { navigateToListStudents() }}></Button>
            <Button
                label="5º Bimestre"
                color="white"
                textColor="#6556A0"
                borderColor="white"
                underlayColor="#f0efeb"
                onPress={() => { navigateToListStudents() }}></Button>
        </View>
    );

}



export default BimestreModal;


