import {
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
    mainView: {
            flex: 1,
    },
    backgroundImage: {
            position: 'absolute',
            width:400,
            height:750,
            top: 0,
            left: 0,
            right: 0,
            alignItems: 'center'
    },
    logoImage:{
        width:300,
        height:100,
        marginTop:320
    },
    fadeIn:{
        marginRight: 50,    
        width: 250,
        height: 50,
        backgroundColor: 'powderblue'
    }
});

export default styles;