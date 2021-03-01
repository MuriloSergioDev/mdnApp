import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Image } from 'react-native';
import { View } from 'react-native';
import styles from './style';
import Button from '../../components/Button'
import { useState } from 'react';
import firebase from "firebase";
import { TextInput } from 'react-native-paper';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AlertModal from '../../components/AlertModal';

type Props = {

}

const Login = ({ }: Props) => {

    const [messageAlert, setMessageAlert] = useState('');
    const [modalAlertVisible, setModalAlertVisible] = useState(false);
    const [email, setEmail] = useState('')
    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack();
    }

    function handleRecoverPassword() {

        var auth = firebase.auth();
        if (email) {
            auth.sendPasswordResetEmail(email).then(function () {
                setMessageAlert('Email para redefinição enviado')
                setModalAlertVisible(true)
            }).catch(function (error) {
                setMessageAlert('Erro ao enviar email')
                setModalAlertVisible(true)
            });
        }else{
            setMessageAlert('Escreva um email válido')
            setModalAlertVisible(true)
        }

    }

    let modalIcon = messageAlert == 'Email para redefinição enviado' ? <AntDesign name="checkcircle" size={24} color="green" /> : <Foundation name="alert" size={24} color="#e6d927" />

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>

            <AlertModal
                header={messageAlert}
                comfirmationString='Ok'
                isVisible={modalAlertVisible}
                close={() => {
                    setModalAlertVisible(false)
                    if (messageAlert == 'Cadastro realizado com sucesso') {
                        navigateBack()
                    }
                }}>
                {modalIcon}
            </AlertModal>

            <View style={styles.contentBox}>
                <Text style={styles.text}>Digite seu email</Text>
                {/* @ts-ignore */}
                <TextInput
                    theme={{
                        colors: {
                            placeholder: '#6556A0', text: '#6556A0', primary: '#6556A0'
                        }
                    }}
                    style={[styles.input, { marginBottom: 180 }]}
                    mode='flat'
                    label="Email"
                    value={email}
                    onChangeText={(value => setEmail(value))}
                />
                <View style={styles.buttonBox}>
                    <Button
                        color='#F0D65D'
                        underlayColor='#d4bc50'
                        textColor='white'
                        borderColor='#F0D65D'
                        label="Solicitar senha"
                        onPress={() => { handleRecoverPassword() }}></Button>
                </View>
                <View style={styles.buttonBox}>
                    <Button
                        color='#6556A0'
                        underlayColor='#514580'
                        textColor='white'
                        borderColor='#6556A0'
                        label="Voltar"
                        onPress={() => { navigateBack() }}></Button>
                </View>
            </View>

        </View>
    )
}

export default Login;