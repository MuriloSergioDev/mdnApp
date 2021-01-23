import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 20,
        width: Dimensions.get('window').width * 0.9,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6556A0',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    viewBox: {
        width: Dimensions.get('window').width * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 'auto',
        position: 'absolute',
        left: 320,
        top: 0
    },
    textTitle: {
        fontSize: 18,
        color: 'white',

    },
    textPeriod: {

    }
});