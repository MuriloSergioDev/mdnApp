import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        height: Dimensions.get('window').width / 5,
        width: Dimensions.get('window').width ,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(229, 229, 229)'
    },
    
    viewBox: {
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        
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

    },
    deleteAction: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding : 20,
        width: 100
    },
    editAction: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0D65D',
        padding : 20,
        width: 100
    },
    textAction: {
        color: 'white'
    }
});