import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image, Modal } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import Button from '../../components/Button'
import { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { UserInterface } from '../../interface/interface';
import firebase from "firebase";
import { db } from '../../config/Firebase';

// import { Container } from './styles';

type Props = {

}

const SignUp = ({ }: Props) => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [turmas, setTurmas] = useState(['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']);
    const [turmaChosen, setTurmaChosen] = useState('');
    const [user, setUser] = useState<UserInterface>(
        {
            name: '',
            email: '',
            password: ''
        }
    )

    async function handleSignUp() {

        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            if (response.user.uid) {
                const data = {
                    uid: response.user.uid,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    turma: turmaChosen
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(data)

            }
        }
        catch (error) {
            alert(error)
        }
    }



    function navigateBack() {
        navigation.goBack();
    }

    const data = turmas.map((turma, indice) => {
        return <TouchableHighlight
            style={styles.turmaHighlight}
            onPress={() => {
                setModalVisible(!modalVisible)
                setTurmaChosen(turma)
            }}
            key={indice}
            underlayColor='#514580'
        >
            <Text style={styles.textStyle}>{turma}</Text>
        </TouchableHighlight>
    })

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../public/logo.png")}></Image>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalHeaderText}>Escolha sua turma</Text>
                        <View style={styles.modalContent}>
                            {data}
                        </View>
                    </View>
                </View>
            </Modal>

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
                    label="Usuario"
                    value={user.name}
                    onChangeText={(value => setUser(prevState => { return { ...prevState, name: value } }))}
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

            <View style={styles.inputBox}>
                <TouchableHighlight style={styles.turmaHighlightSelect} onPress={() => { setModalVisible(true) }} underlayColor='#514580'>
                    <Text style={styles.textTurma}>{turmaChosen ? turmaChosen : 'Selecionar Turma'}</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.buttonBox}>
                <Button
                    color='#F0D65D'
                    underlayColor='#d4bc50'
                    textColor='white'
                    borderColor='#F0D65D'
                    label="CRIAR CONTA"
                    onPress={() => { handleSignUp() }}></Button>
            </View>
            <View style={styles.buttonBox}>
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