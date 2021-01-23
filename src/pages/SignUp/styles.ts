import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(229, 229, 229, 0.55)',
        alignItems: 'center'
    },
    logo: {
        height: Dimensions.get('window').height* 0.3,
        width: Dimensions.get('window').width * 0.5,
        resizeMode: "contain",
        marginBottom: 50
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#6556A0',
        borderStyle: 'solid',
        padding: 5,
        fontSize: 20,
        width: Dimensions.get('window').width * 0.7,
        
    },
    text: {
        color: '#6556A0',
        width: Dimensions.get('window').width * 0.7,
        fontSize: 20
    },
    inputBox: {
        marginBottom: 20
    },
    buttonBox: {
        marginTop: 'auto',
        marginBottom: 20
    },
});