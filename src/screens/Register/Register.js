import { StyleSheet, Text, View,Image,StatusBar,Dimensions,TextInput, TouchableOpacity,Platform,AsyncStorage} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import React, { useEffect,useState } from 'react'
import {  images,icons } from '../../assets';
import { colors } from '../../utils';
import {ButtonCustom} from '../../components'


const Register = ({navigation}) => {
  const [form, setForm] = useState({
    namaDepan: '',
    namaBelakang: ''
  })

  const handleForm = (value,input) => {
    setForm({
      ...form,[input] : value
    })
  }
  


  const handler = () => {
    console.log(form);
    navigation.navigate('Registerr')
  }

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

          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={icons.back} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Masukkan namamu!</Text>
            <Text style={styles.subHeading}>Lengkapi Profilmu untuk melanjutkan!</Text>
            <View style={{marginTop: 35,marginBottom: 13,alignItems:'center'}}>
              <Text style={styles.ti}>Nama Depan</Text>
              <TextInput placeholder='Masukkan nama depanmu' style={styles.input}
                    onChangeText={(value) => handleForm(value,'namaDepan')}  
                    value={form.namaDepan}
              />
            </View>
            <View style={{alignItems:'center',marginBottom: 45}}>
              <Text style={styles.ti}>Nama Belakang</Text>
              <TextInput placeholder='Masukkan nama belakangmu' style={styles.input}
                    onChangeText={(value) => handleForm(value,'namaBelakang')}  
                    value={form.namaBelakang}
              />
            </View>
            
            <ButtonCustom title={"Selanjutnya"} buttonStyle={styles.button} onPress={handler}/>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default Register
const width = Dimensions.get('window').width -40
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor:colors.white
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
  }
})