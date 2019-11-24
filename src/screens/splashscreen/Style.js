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
    mainText: { 
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold'
    },
    logoImage:{
        width:300,
        height:100,
        marginTop:320
    },
    profileName: { 
            fontWeight: 'bold',
            fontSize: 26,
            paddingLeft: 10
    },
    profileBody: { 
            height: 1000 
    }
});

export default styles;