import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Text } from 'react-native';
import { View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button'

// import { Container } from './styles';

type Props = {

}

const Home = ({ }: Props) => {

    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    function navigateToSignUp() {
        navigation.navigate('SignUp');
    }

    return (
        <ImageBackground source={require("../../public/backimg.jpg")} style={styles.backgroundimage}>
            <LinearGradient
                colors={['transparent', 'rgba(101, 86, 160, 0.8)']}
                start={[0, 0.1]}
                style={styles.layer}
            >
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require("../../public/logo.png")}></Image>
                    <View style={styles.buttonBox}>


                        <Button
                            color='transparent'
                            underlayColor='#f0efeb'
                            textColor='white'
                            borderColor='white'
                            label="CADASTRAR"
                            onPress={() => { navigateToSignUp() }}></Button>
                    </View>
                    <View style={styles.buttonBox}>
                        <Button
                            color='white'
                            underlayColor='transparent'
                            textColor='#6556A0'
                            borderColor='white'
                            label="LOGIN"
                            onPress={() => { navigateToLogin() }}></Button>
                    </View>
                    {/* <StatusBar style={"auto"} /> */}
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

export default Home;