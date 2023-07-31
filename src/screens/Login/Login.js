import { StyleSheet, Text, View,Image,StatusBar,Dimensions,TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import React, { useEffect,useState } from 'react'
import {  images,icons } from '../../assets';
import { colors } from '../../utils';
import {ButtonCustom} from '../../components'


const Login = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    pass: ''
  })

  const handleForm = (value,input) => {
    setForm({
      ...form,[input] : value
    })
  }

  const handler = () => {
    console.log(form);
  }
  return (
    <>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent/>    
        
        <KeyboardAvoidingView 
        style={styles.container}
        behavior={"padding"}
    >
        
        <View style={styles.body1}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.back} style={styles.back}/>
          </TouchableOpacity>
          <Text style={styles.heading}>Selamat Datang {'\n'}Kembali!</Text>
          <Text style={styles.subHeading}>Isi email dan password mu untuk masuk</Text>
          <View style={{marginTop: 35,marginBottom: 13,alignItems:'center'}}>
            <Text style={styles.ti}>Nama Depan</Text>
            <TextInput placeholder='Email' style={styles.input}
                  onChangeText={(value) => handleForm(value,'email')}  
                  value={form.email}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={styles.ti}>Nama Belakang</Text>
            <TextInput placeholder='Password' style={styles.input}
                   onChangeText={(value) => handleForm(value,'pass')}  
                   value={form.pass}
            />
          </View>
          <Text style={{fontFamily:'Light',color:colors.secondary,marginTop: 8}}>Lupa Password?</Text>
          <ButtonCustom title={"Selanjutnya"} buttonStyle={styles.button} onPress={handler}/>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default Login
const width = Dimensions.get('window').width -40
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
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
    marginTop: 20,
    height: 59,
    backgroundColor:colors.secondary,
  }
})