import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './style'
import Button from '../../components/Button'
import TurmaModal from '../../components/TurmaModal'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


// import { Container } from './styles';

type Props = {

}

const CreateTurma = ({ }: Props) => {

    const navigation = useNavigation();
    const user = 'Gustavo Miranda'
    const turma = '2020-1'

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToLogin() {
        navigation.navigate('Login');
    }


    return (
        <View style={styles.container}>
            
            <Button
                color='#6556A0'
                underlayColor='transparent'
                textColor='white'
                borderColor='#6556A0'
                label="VOLTAR"
                onPress={() => { navigateBack() }}>
                
            </Button>

        </View>
    )
}

export default CreateTurma;