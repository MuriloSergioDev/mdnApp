import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(229, 229, 229)',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight
    },
    logo: {
        
        height: Dimensions.get('window').height * 0.3,
        width: Dimensions.get('window').width * 0.5,
        resizeMode: "contain",
        marginBottom: 50
    },
    input: {
        padding: 5,
        fontSize: 20,
        width: Dimensions.get('window').width * 0.7,
        backgroundColor: 'rgb(229, 229, 229)',
    },
    text: {
        color: '#6556A0',
        width: Dimensions.get('window').width * 0.7,
        fontSize: 20
    },
    inputBox: {
        marginBottom: 20,
    },
    buttonBox: {
        marginVertical: 10,
    },
    textForget: {
        marginTop: 10,
        width: Dimensions.get('window').width * 0.7,
        color: '#6556A0',
        fontWeight: 'bold',
        marginBottom: 50
    },
    contentBox: {
        
    }
});