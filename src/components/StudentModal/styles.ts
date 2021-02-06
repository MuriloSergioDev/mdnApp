import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 5,
        height: Dimensions.get('window').width / 5,
        
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        paddingHorizontal: 20
    },
    
    viewBox: {
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    textTitle: {
        fontSize: 18,
        color: 'black',
        
    },
    periodBox: {
        flexDirection: 'row',
        width: Dimensions.get('window').width*0.4,
        justifyContent: 'space-between'
    },
    textPeriod: {

    },
    rightAction: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding : 20,
    },
    textAction: {
        color: 'white'
    }
});