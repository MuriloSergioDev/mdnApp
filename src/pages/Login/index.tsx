import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import Button from '../../components/Button'

// import { Container } from './styles';

type Props = {

}

const Login = ({ }: Props) => {

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToMenu() {
        navigation.navigate('Menu');
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>

            <View style={styles.inputBox}>
                <Text style={styles.text}>Usuario</Text>
                <TextInput style={styles.input}></TextInput>
            </View>

            <View style={styles.inputBox}>
                <Text style={styles.text}>Senha</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <Text style={styles.textForget}>Esqueci minha senha</Text>
            {/* <View style={styles.inputBox}>
                <Text style={styles.text}>Turma</Text>
            </View> */}

            <View style={styles.buttonBox}>


                        <Button
                            color='#F0D65D'
                            underlayColor='transparent'
                            textColor='white'
                            borderColor='#F0D65D'
                            label="LOGIN"
                            onPress={() => { navigateToMenu() }}></Button>
                        <Button
                            color='#6556A0'
                            underlayColor='transparent'
                            textColor='white'
                            borderColor='#6556A0'
                            label="NÃO POSSUO CONTA"
                            onPress={() => { navigateBack() }}></Button>
                    </View>
        </View>
    )
}

export default Login;