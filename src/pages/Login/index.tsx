import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Image } from 'react-native';
import { View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import { useState } from 'react';
import firebase from "firebase";
import { TextInput } from 'react-native-paper';
import { UserInterface } from '../../interface/interface';
import { db } from '../../config/Firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AlertModal from '../../components/AlertModal';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

type Props = {

}

const Login = ({ }: Props) => {



    const [user, setUser] = useState<UserInterface>(
        {
            name: '',
            email: '',
            password: '',
            turma: '',
            permission: 1
        }
    )

    const navigation = useNavigation()
    const [modalAlertVisible, setModalAlertVisible] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToMenu(data) {
        navigation.navigate('Menu', {
            uid: data.uid,
            name: data.name,
            turma: data.turma,
            permission: data.permission,
            isModalShow: false
        });
    }

    function navigateToRecoverPassword() {
        navigation.navigate('RecoverPassword');
    }

    async function handleLogin() {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            if (response.user.uid && response.user.emailVerified) {
                const data = await db
                    .collection('users')
                    .doc(response.user.uid)
                    .get()

                navigateToMenu(data.data())
            } else {
                setMessageAlert('Seu email ainda nao foi verificado')
                setModalAlertVisible(true)
            }
        }
        catch (error) {
            alert(error)
        }
    }

    let modalIcon = messageAlert == ' ' ? <AntDesign name="checkcircle" size={24} color="green" /> : <Foundation name="alert" size={24} color="#e6d927" />

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>
            <View>

                <AlertModal
                    header={messageAlert}
                    comfirmationString='Ok'
                    isVisible={modalAlertVisible}
                    close={() => {
                        setModalAlertVisible(false)
                    }}>
                    {modalIcon}
                </AlertModal>

                <View style={styles.inputBox}>
                    {/* @ts-ignore */}
                    <TextInput
                        theme={{
                            colors: {
                                placeholder: '#6556A0', text: '#6556A0', primary: '#6556A0'
                            }
                        }}
                        style={styles.input}
                        mode='flat'
                        label="Email"
                        value={user.email}
                        onChangeText={(value => setUser(prevState => { return { ...prevState, email: value } }))}
                    />
                </View>

                <View style={styles.inputBox}>
                    {/* @ts-ignore */}
                    <TextInput
                        theme={{
                            colors: {
                                placeholder: '#6556A0', text: '#6556A0', primary: '#6556A0'
                            }
                        }}
                        style={styles.input}
                        secureTextEntry={true}
                        mode='flat'
                        label="Senha"
                        value={user.password}
                        onChangeText={(value => setUser(prevState => { return { ...prevState, password: value } }))}
                    />
                </View>
                <TouchableOpacity onPress={() => { navigateToRecoverPassword() }}>
                    <Text style={styles.textForget}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <View style={styles.buttonBox}>
                    <Button
                        color='#F0D65D'
                        underlayColor='#d4bc50'
                        textColor='white'
                        label="LOGIN"
                        onPress={() => { handleLogin() }}></Button>
                </View>
                <View style={styles.buttonBox}>
                    <Button
                        color='#6556A0'
                        underlayColor='#514580'
                        textColor='white'
                        label="NÃO POSSUO CONTA"
                        onPress={() => { navigateBack() }}></Button>
                </View>
            </View>

        </View>
    )
}

export default Login;