import {
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
    mainView: {
            flex: 1 
    },
    mainContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#0457A0',
            alignItems: 'center'
    },
    mainText: { 
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold'
    },
    profileImage: {
            flex: 1,
            width: null,
            height: null
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