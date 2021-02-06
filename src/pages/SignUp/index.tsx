import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, Image, Modal } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import Button from '../../components/Button'
import { useState } from 'react';
import { TouchableHighlight } from 'react-native';

// import { Container } from './styles';

type Props = {

}

const SignUp = ({ }: Props) => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [turmas, setTurmas] = useState(['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']);
    const [turmaChosen, setTurmaChosen] = useState('');

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
                <Text style={styles.text}>Usuario</Text>
                <TextInput style={styles.input}></TextInput>
            </View>

            <View style={styles.inputBox}>
                <Text style={styles.text}>Senha</Text>
                <TextInput style={styles.input}></TextInput>
            </View>

            <View style={styles.inputBox}>
                <TouchableHighlight style={styles.turmaHighlightSelect}  onPress={() => { setModalVisible(true) }} underlayColor='#514580'>
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