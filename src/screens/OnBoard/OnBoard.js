import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'
import {  images } from '../../assets';
import { colors, dimens } from '../../utils';
import {ButtonCustom} from '../../components'



const OnBoard = ({navigation}) => {

  return (
    <View style={styles.container}>
         <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
            </View>
      <View style={styles.body}>
        <Image source={images.logo} style={styles.Logo}/>
        <Image source={images.onboard} style={styles.ill}/>
      </View>
      <View style={styles.body2}>
        <View style={{alignItems:'center'}}>
          <Text style={styles.heading}>Menghafal itu Mudah</Text>
          <Text style={styles.subHeading}>Sebuah metode menghafal Al Qur’an yang {'\n'}
          mudah diikuti oleh semua kalangan.</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <ButtonCustom title={"Selanjutnya"} buttonStyle={styles.button} onPress={() => navigation.navigate('Register')}/>
          <ButtonCustom title={"Masuk"} buttonStyle={styles.button2} textStyle={styles.textBut} onPress={() => navigation.navigate('Login')}/>
        </View>
      </View>
    </View>
  )
}

export default OnBoard
const width = Dimensions.get('window').width -40 ;
const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  body: {
    alignItems:'center',
    flex: 2,
  },
  body2: {
    alignItems:'center',
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-between',
    paddingBottom: 40,
    paddingTop: 20
  },
  Logo: {
    tintColor: colors.secondary,
    width: 90,
    height:90,
    marginTop: 20
  },
  ill: {
    width:360,
    height: 421,
    marginTop: -30
  },
  heading: {
    fontSize: 27,
    fontFamily: 'SemiBold',
    color: colors.black,
    marginTop: -25
  },
  subHeading: {
    textAlign:'center',
    fontFamily:'Light',
    fontSize: 14
  },
  emptyHeaderContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: -1,
      backgroundColor:colors.white
    },
    button: {
      width: width,
      height: 59,
      backgroundColor:colors.secondary,
      marginBottom:10
    } ,
    button2: {
      width: width,
      height: 59,
      backgroundColor:colors.gray,
    },
    textBut: {
      color:colors.black
    }
}) 
