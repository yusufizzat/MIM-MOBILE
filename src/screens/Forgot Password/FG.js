import { StyleSheet, Text, View,Image,StatusBar,Dimensions,TextInput, TouchableOpacity,Platform,DatePickerAndroid,Modal} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import DatePicker from 'react-native-date-picker'
import React, { useEffect,useState } from 'react'
import {  images,icons } from '../../assets';
import { colors } from '../../utils';
import {ButtonCustom} from '../../components'


const FG = ({navigation}) => {

  
  return (
    <>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent/>    
        
        <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1,backgroundColor:'white' }}
        enableOnAndroid
        extraHeight={Platform.select({ android: 130 })}
        keyboardShouldPersistTaps="handled"
      > 
        <View style={styles.container}>

          <View style={styles.body1}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={icons.back} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Lupa Kata Sandi</Text>
              <View style={{justifyContent:'center',flex: 1}}>
                <Image source={images.lock} style={{width: 289,height: 289,alignSelf:'center'}}/>
                <Text style={{textAlign:'center',fontFamily:'Medium',color: colors.black,fontSize: 24,marginTop: 30}}>Kami akan mengirimkan {'\n'}kode ke email Anda</Text>
                <Text style={{textAlign:'center',fontFamily:'Medium',color: colors.text,fontSize: 17,marginTop: 13}}>user12@gmail.com</Text>
              </View>
          </View>
          <View style={{paddingBottom: 40}}>
            <ButtonCustom title={"Selanjutnya"} buttonStyle={styles.button} onPress={() => navigation.navigate('Konfirmasi')}/>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default FG
const width = Dimensions.get('window').width -40
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  body1: {
    flex: 1
  },
  back: {
    width: 30,
    height: 30,
    marginTop: 40
  },
  heading: {
    marginTop: 10,
    fontFamily : 'SemiBold',
    fontSize: 30,
    color: colors.black
  },
  subHeading: {
    fontFamily : 'Light',
    fontSize: 17,
    color: colors.text
  },ti: {
    fontSize: 17,
    fontFamily: "SemiBold",
    color: colors.black,
    marginBottom: 11,
    alignSelf:'flex-start'
  },
  input: {
    width: width,
    height: 59,
    backgroundColor: colors.gray,
    paddingLeft: 25,
    borderRadius: 17,
    fontSize: 17

  },
  button: {
    height: 59,
    backgroundColor:colors.secondary,
  },border: {height: 59,borderWidth: 2, borderRadius: 17,flex: 1,borderColor:colors.gray,alignItems:'center',justifyContent:'center'},
  jk: {
    fontSize: 14,
    fontFamily: 'Medium',
    color:colors.black
  }
})