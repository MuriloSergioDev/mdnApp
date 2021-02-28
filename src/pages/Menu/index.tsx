import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ImageBackground, Text, Image, SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';
import Button from '../../components/Button'
import ButtonMenu from '../../components/ButtonMenu'
import BimestreModal from '../../components/BimestreModal'
import { Feather } from '@expo/vector-icons';
import { UserInterface } from '../../interface/interface';
import firebase from "firebase";
import { Entypo } from '@expo/vector-icons';

const Menu = ({ route }) => {

    const navigation = useNavigation()

    const { name, turma, permission } = route.params
    const [user, setUser] = useState<UserInterface>(
        {
            name,
            turma,
            permission
        }
    )

    const [isModalShow, setIsModalShow] = useState(false)

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToTurmas() {
        navigation.navigate('Turmas');
    }

    function navigateToListStudents() {
        if (permission === 1) {
            navigation.navigate('PerformanceStudent', {
                name: user.name,
                email: user.email,
                password: user.password,
                turma: user.turma,
                permission: user.permission
            });
        } else {
            navigation.navigate('ListStudents', {
                turma: user.turma
            });
        }
    }

    function handleSignOut() {
        firebase.auth().signOut()
        navigateBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                {user.permission === 0 ?
                    <Feather name="menu" size={30} color="white" onPress={() => { navigateToTurmas() }} />
                    :
                    null
                }

            </View>

            <View style={styles.contentBox}>

                <Image
                    style={styles.logo}
                    source={require("../../public/logo.png")}></Image>
                <Text style={styles.text}>Bem vindo {user.name}</Text>
                <View style={styles.menuBox}>
                    <Feather name="arrow-left" size={20} color="#6556A0" />

                    <View style={styles.buttonMenuBox}>
                        <ButtonMenu
                            color='#A05656'
                            underlayColor='#854848'
                            textColor='white'
                            borderColor='#A05656'
                            label="Desempenho"
                            onPress={() => { navigateToListStudents() }}>
                            <Feather name="trending-up" size={20} color="white" />
                        </ButtonMenu>
                        <ButtonMenu
                            color='#6556A0'
                            underlayColor='#514580'
                            textColor='white'
                            borderColor='#6556A0'
                            label="Turmas"
                            onPress={() => { navigateToTurmas() }}>
                            <Entypo name="users" size={24} color="white" />
                        </ButtonMenu>
                        <ButtonMenu
                            color='#6556A0'
                            underlayColor='transparent'
                            textColor='white'
                            borderColor='#6556A0'
                            label="Funcionalidade 3"
                            onPress={() => { }}></ButtonMenu>
                        <ButtonMenu
                            color='#6556A0'
                            underlayColor='transparent'
                            textColor='white'
                            borderColor='#6556A0'
                            label="Funcionalidade 4"
                            onPress={() => { }}></ButtonMenu>
                        <ButtonMenu
                            color='#6556A0'
                            underlayColor='transparent'
                            textColor='white'
                            borderColor='#6556A0'
                            label="Funcionalidade 5"
                            onPress={() => { }}></ButtonMenu>
                        <ButtonMenu
                            color='#6556A0'
                            underlayColor='transparent'
                            textColor='white'
                            borderColor='#6556A0'
                            label="Funcionalidade 6"
                            onPress={() => { }}></ButtonMenu>

                    </View>
                    <Feather name="arrow-right" size={20} color="#6556A0" />
                </View>
                <View style={styles.buttonBox}>

                    <Button
                        color='#6556A0'
                        underlayColor='#514580'
                        textColor='white'
                        borderColor='#6556A0'
                        label="Sair"
                        onPress={() => { handleSignOut() }}></Button>
                </View>
            </View>


        </View>
    )
}

export default Menu;