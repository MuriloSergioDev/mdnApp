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

const SignUp = ({ }: Props) => {

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
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

            <View style={styles.inputBox}>
                <Text style={styles.text}>Turma</Text>
            </View>

            <View style={styles.buttonBox}>


                        <Button
                            color='#F0D65D'
                            underlayColor='#d4bc50'
                            textColor='white'
                            borderColor='#F0D65D'
                            label="CRIAR CONTA"
                            onPress={() => { }}></Button>
                        <Button
                            color='#6556A0'
                            underlayColor='#514580'
                            textColor='white'
                            borderColor='#6556A0'
                            label="JÁ POSSUO CONTA"
                            onPress={() => { navigateBack() }}></Button>
                    </View>
        </View>
    )
}

export default SignUp;