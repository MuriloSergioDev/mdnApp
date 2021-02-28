import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { View } from 'react-native';
import styles from './style';
import Button from '../../components/Button'
import { useState } from 'react';
import { Modal } from 'react-native';
import firebase from "firebase";
import { TextInput } from 'react-native-paper';
import { UserInterface } from '../../interface/interface';
import { db } from '../../config/Firebase';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';


// import { Container } from './styles';

type Props = {

}

// firebase.analytics()

const Login = ({ }: Props) => {


    const [modalVisible, setModalVisible] = useState(false)
    const [user, setUser] = useState<UserInterface>(
        {
            name: '',
            email: '',
            password: '',
            turma: '',
            permission: 1
        }
    )
    const [email, setEmail] = useState('')

    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack();
    }

    // Initialize Firebase
    // const firebaseConfig = {
    //     apiKey: 'AAAAukYUJLI:APA91bEu9Z0TbBqtIvk0rG3ZVuHNrJfpDloYO7DVKwMoAQlnnVY-GmjR__DRePkinHSywrR7B5KzdRG1ka6EGKY5EU1vAhG_cuh4PBXOIHsn3BIr83Dze7YVod9UaKEpUdK9VrSD54yL',
    //     authDomain: 'mdnappusers-b9ad2.firebaseapp.com',
    //     databaseURL: 'https://mdnappusers-b9ad2-default-rtdb.firebaseio.com/',
    //     projectId: 'mdnappusers-b9ad2',
    //      storageBucket: 'mdnappusers-b9ad2.appspot.com',
    //     // messagingSenderId: 'sender-id',
    //     // appId: 'app-id',
    //     // measurementId: 'G-measurement-id',
    //   };

    //   firebase.initializeApp(firebaseConfig);



    //   function saveUser(userId, score) {
    //     firebase
    //       .database()
    //       .ref('users/' + userId)
    //       .set({
    //         highscore: score,
    //       });
    //   }


    // function saveUser(userId, score) {
    //     firebase
    //         .database()
    //         .ref('users/' + userId)
    //         .set({
    //             email: user.email,
    //             password: user.password,
    //         });
    // }
    function saveUser() {
        // firebase
        //     .database()
        //     .ref()
        //     .child('users')
        //     .push({
        //         email: user.email,
        //         password: user.password,
        //     });

        firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(() => navigation.navigate('Menu'))
            .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>

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
                        onPress={() => { setModalVisible(false) }}></Button>
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