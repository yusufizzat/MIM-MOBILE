import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  StatusBar,
  Pressable,
  ToastAndroid,
  LogBox,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import Voice from '@react-native-voice/voice';
import { colors } from '../../utils';
import {ButtonCustom} from '../../components'
import {  images,icons } from '../../assets';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
const Home = ({navigation}) => {


  return (
   <>
   <ScrollView>
      <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}/>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent/>  
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={icons.menu} style={styles.menu}/>
        </View>
        <View style={styles.body1}>
          <View>
            <Text style={{fontSize: 17, fontFamily: 'Light',color: colors.black}}>Assalamualaikum</Text>
            <Text style={{fontSize: 27, fontFamily: 'SemiBold',color: colors.black,marginTop: -3}}>Yusuf Izzat</Text>
          </View>
          <View style={styles.progress}>
            <Text style={styles.cp}>Capaian hafalan Al-Qur’an</Text>
            <View style={styles.cp22}>
              <Text style={styles.cp2}>Capaian hafalanmu sudah 30%</Text>
            </View>
            <Image source={images.home} style={styles.progressImage}/>
          </View>
          <View style={styles.pembelajaran}>
            <Text style={{fontSize: 15, fontFamily: 'SemiBold',color: colors.black}}>Menghafal Al-Qur’an dengan metode MIM</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Mim')}>  
              <View style={styles.mim}>
                <View style={{flexDirection:'row',marginLeft:15,alignItems:'center'}}>
                  <Image source={icons.quranicon} style={styles.icon}/>
                  <Text style={styles.fontQ}>Mulai menghafal</Text>
                </View>        
                  <Image source={icons.play} style={styles.play}/>    
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.pembelajaran2}>
          <Text style={{fontSize: 15, fontFamily: 'SemiBold',color: colors.black}}>Pembelajaran</Text>
          <TouchableOpacity >
            <View style={styles.mim}>
                <View style={{flexDirection:'row',marginLeft:15,alignItems:'center'}}>
                  <Image source={icons.bs} style={styles.icon2}/>
                  <Text style={styles.fontQ}>MIM Bacaan Sholat</Text>
                </View>
                  <Image source={icons.play} style={styles.play}/>
            </View>
          </TouchableOpacity>
            <View style={[styles.mim,{marginTop: 17}]}>
                <View style={{flexDirection:'row',marginLeft:15,alignItems:'center'}}>
                  <Image source={icons.bq} style={styles.icon2}/>
                  <Text style={styles.fontQ}>MIM Do’a dalam Al-Qur’an</Text>
                </View>
                  <Image source={icons.play} style={styles.play}/>        
            </View>
            <View style={[styles.mim,{marginTop: 17}]}>
                <View style={{flexDirection:'row',marginLeft:15,alignItems:'center'}}>
                  <Image source={icons.ts} style={styles.icon2}/>
                  <Text style={styles.fontQ}>Tsaqifa</Text>
                </View>
                  <Image source={icons.play} style={styles.play}/>
            </View>
            
          </View>
        </View>
      </View>
   </ScrollView>
   </>
  );
};
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30
  },
  header: {
    paddingTop: 35,
    paddingBottom: 2,
    paddingHorizontal: 22.5
  },
  menu: {
    width: 27,
    height: 33
  },body1: {
    paddingHorizontal: 22.5
  },progressImage: {
    width: width -45,
    height: 126,
    borderRadius: 17,
    alignSelf:'center'
  },progress: {
    marginTop: 11
  },
  emptyHeaderContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: -1,
      backgroundColor:colors.white
    },cp: {fontSize: 17, fontFamily: 'Medium',color: '#FFFFFF',position:'absolute',zIndex: 1,top: 20,left: 12},
    cp2: {fontSize: 10, fontFamily: 'Medium',color: '#FFFFFF'},
    cp22: {position:'absolute',zIndex: 1,bottom: 20,left: 12},
    pembelajaran: {
      marginTop: 35,
    },
    mim: {
      backgroundColor:'white',
      width:width -45,
      height:77,
      borderRadius: 17,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop: 15,
      alignSelf:'center',
      elevation: 3

    },icon: {
      width: 50,
      height: 50,
    },fontQ: {
      fontFamily:'Regular',
      fontSize: 15,
      color: colors.black,
      marginLeft: 28
    },
    play: {
      width: 23,
      height: 26,
      marginRight: 26
    },
    pembelajaran2: {
      marginTop: 30
    },icon2: {
      width: 48,
      height: 48,
      borderRadius: 19
    },
})

export default Home;