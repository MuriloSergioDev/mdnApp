import { useNavigation } from '@react-navigation/native';
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



// import { Container } from './styles';

type Props = {

}

const Menu = ({ }: Props) => {

    const navigation = useNavigation();
    const user = 'Gustavo Miranda'
    const turma = '2020-1'

    const [isModalShow,setIsModalShow] = useState(false)

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToTurmas() {
        navigation.navigate('Turmas');
    }

    return (
        <View style={styles.container}>
            <View style={styles.nav}>

                <Feather name="menu" size={30} color="white" onPress={() => { navigateToTurmas() }} />

                <Text style={styles.textNav}>{turma}</Text>
            </View>
            {!isModalShow ?
                <View style={styles.contentBox}>

                    <Image
                    style={styles.logo}
                    source={require("../../public/logo.png")}></Image>
                    <Text style={styles.text}>Bem vindo {user}</Text>
                    <View style={styles.menuBox}>
                        <Feather name="arrow-left" size={20} color="#6556A0" />

                        <View style={styles.buttonMenuBox}>
                            <ButtonMenu
                                color='#A05656'
                                underlayColor='#854848'
                                textColor='white'
                                borderColor='#A05656'
                                label="Desempenho"
                                onPress={()=>{setIsModalShow(true)}}>
                                <Feather name="trending-up" size={20} color="white" />
                            </ButtonMenu>
                            <ButtonMenu
                                color='#6556A0'
                                underlayColor='transparent'
                                textColor='white'
                                borderColor='#6556A0'
                                label="Funcionalidade 2"
                                onPress={() => { }}></ButtonMenu>
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
                            label="SAIR"
                            onPress={() => { navigateBack() }}></Button>
                    </View>
                </View>
                :
                <BimestreModal onPress={()=>{setIsModalShow(false)}}></BimestreModal>
            }
        </View>
    )
}

export default Menu;