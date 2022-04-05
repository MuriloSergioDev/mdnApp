import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react';
import { Text, Image, SafeAreaView } from 'react-native';
import { View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'
import ButtonMenu from '../../components/ButtonMenu'
import { Feather } from '@expo/vector-icons';
import { UserInterface } from '../../interface/interface';
import firebase from "firebase";
import { Entypo } from '@expo/vector-icons';
import Sidebar from '../../components/Sidebar';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { Dimensions } from 'react-native';
import ButtonMenuHidden from '../../components/ButtonMenuHidden';
import { FontAwesome5 } from '@expo/vector-icons';
import TabNavigation from '../../components/TabNavigation';
import AuthContext from '../../context/auth';


const Menu = ({ route }) => {

    const navigation = useNavigation()

    const { user } = useContext(AuthContext);    

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToTurmas() {
        navigation.navigate('Turmas');
    }

    function navigateToApostilas() {
        navigation.navigate('Apostilas');
    }

    function navigateToListStudents() {
        if (user.permission === 1) {
            navigation.navigate('PerformanceStudent');
        } else {
            navigation.navigate('ListStudents');
        }
    }

    function handleSignOut() {
        firebase.auth().signOut().then(() => {
            navigateBack()
        }).catch((error) => {
        });
    }

    const drawerRef = useRef(null);
    function renderDrawer() {
        return (
            <Sidebar name={user.name} permission={user.permission} uid={user.uid} />
        );
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <View style={styles.nav}>
                    <Text style={styles.text}>Bem vindo {user.name}</Text>
                </View>

                <View style={styles.contentBox}>

                    <Image
                        style={styles.logo}
                        source={require("../../public/logo.png")}></Image>
                    <View style={styles.menuBox}>
                        {/* <Feather name="arrow-left" size={20} color="#6556A0" /> */}
                        {user.permission === 0 ?
                            <View style={styles.buttonMenuBox}>
                                <ButtonMenu
                                    color='#A05656'
                                    underlayColor='#854848'
                                    textColor='white'
                                    borderColor='#A05656'
                                    label="Gerenciar alunos"
                                    onPress={() => { navigateToListStudents() }}>
                                    <FontAwesome5 name="clipboard-list" size={24} color="white" />
                                </ButtonMenu>
                                <ButtonMenu
                                    color='#6556A0'
                                    underlayColor='#514580'
                                    textColor='white'
                                    borderColor='#6556A0'
                                    label="Gerenciar Turmas"
                                    onPress={() => { navigateToTurmas() }}>
                                    <Entypo name="users" size={20} color="white" />
                                </ButtonMenu>
                            </View>
                            :

                            <View style={styles.buttonMenuBox}>
                                <ButtonMenu
                                    color='#A05656'
                                    underlayColor='#854848'
                                    textColor='white'
                                    borderColor='#A05656'
                                    label="Minhas turmas"
                                    onPress={() => { navigateToTurmas() }}>
                                    <Entypo name="users" size={20} color="white" />
                                </ButtonMenu>
                            </View>
                        }

                        {/* <Feather name="arrow-right" size={20} color="#6556A0" /> */}
                    </View>
                </View>
            </View>            
        </SafeAreaView>
    )
}

export default Menu;