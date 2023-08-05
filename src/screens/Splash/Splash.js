import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image,StatusBar } from 'react-native';
import { colors, dimens } from '../../utils';
import {  images } from '../../assets';

const Splash = ({ navigation }) => {

   
    useEffect(() => {
        const wait = ms => {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        };
        let mounted = true;
        if (mounted) {
            wait(3000).then(() => {
                navigation.replace('OnBoard');
            });
        }
        return () => {
            mounted = false;
        };
    }, []);
    return (
        <SafeAreaView style = { styles.container }>
               <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent/>    
            <View style = { styles.body }>
                <Image source = { images.logo } style = { styles.logo } />
                <Text style={styles.text}>Menghafal itu <Text style={styles.text2}>Mudah</Text></Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    body : {
        height : '100%',
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : colors.white,
    },
    logo : {
        tintColor: colors.secondary,
        height : 150,
        width : 150,
        resizeMode : 'contain',
    },
    text : {
        marginTop: -45,
        fontFamily : 'Medium',
        fontSize : 17,
        color : colors.primary,
    },
    text2 : {
        fontFamily : 'Medium',
        fontSize : 17,
        color : colors.secondary,
    },
});

export default Splash;
