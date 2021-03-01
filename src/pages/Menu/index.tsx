import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Text, Image } from 'react-native';
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


const Menu = ({ route }) => {

    const navigation = useNavigation()

    const { uid, name, turma, permission } = route.params
    
    const [user, setUser] = useState<UserInterface>(
        {
            uid,
            name,
            turma,
            permission
        }
    )

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
                uid: user.uid
            });
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
        <View style={{ flex: 1 }}>
            <DrawerLayout
                drawerWidth={Dimensions.get('window').width * 0.7}
                drawerType="front"
                drawerBackgroundColor="rgb(229, 229, 229)"
                renderNavigationView={renderDrawer}
                ref={drawerRef}
            >
                <View style={styles.container}>

                    <View style={styles.nav}>
                        <Feather name="menu" size={30} color="white" onPress={() => { drawerRef.current.openDrawer() }} />
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
                                {user.permission === 0 ?
                                    <ButtonMenu
                                        color='#6556A0'
                                        underlayColor='#514580'
                                        textColor='white'
                                        borderColor='#6556A0'
                                        label="Turmas"
                                        onPress={() => { navigateToTurmas() }}>
                                        <Entypo name="users" size={20} color="white" />
                                    </ButtonMenu>
                                    :
                                    <ButtonMenuHidden/>
                                }
                                    <ButtonMenuHidden/>
                                    <ButtonMenuHidden/>
                                    <ButtonMenuHidden/>
                                    <ButtonMenuHidden/>
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
            </DrawerLayout>
        </View>
    )
}

export default Menu;