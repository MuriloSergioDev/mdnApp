import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 5,
        height: Dimensions.get('window').width / 5,
        width: Dimensions.get('window').width ,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1
    },
    
    viewBox: {
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 18,
        color: '#6556A0',
    },
    periodBox: {
        flexDirection: 'row',
        width: Dimensions.get('window').width*0.4,
        justifyContent: 'space-between'
    },
    textPeriod: {

    }
});