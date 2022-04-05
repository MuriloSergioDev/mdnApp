import React from 'react';
import { Image, View } from 'react-native';
import styles from './style';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Header = () => {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.nav}>
            <View style={styles.navUp}>                
                <AntDesign name="left" size={24} color="white" onPress={() => { navigateBack() }} />
                <Image
                    style={styles.logo}
                    source={require("../../public/logoalt.png")}></Image>                
            </View>
        </View>

    );
}

export default Header;