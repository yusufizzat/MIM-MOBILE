import { StyleSheet, Text, View,Image,StatusBar,Dimensions,TextInput, TouchableOpacity,Platform,AsyncStorage} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import React, { useEffect,useState } from 'react'
import {  images,icons } from '../../assets';
import { colors } from '../../utils';
import {ButtonCustom} from '../../components'


const Konfirmasi = ({navigation}) => {

    const [noKon,setNoKon] = useState()
    const handleNoKon = (value) => {
        setNoKon(value)
    }
    const handle =()=> {
        console.log(noKon);
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
            <Text style={styles.heading}>Konfirmasi</Text>
            <Text style={styles.subHeading}>Kami akan mengirimkan kode ke email Anda. Masukkan kode itu untuk mengonfirmasi akun.</Text>
            <TextInput placeholder='Masukkan nomormu' style={styles.input}
                    onChangeText={(value) => handleNoKon(value)}  
                    value={noKon}
                    keyboardType="phone-pad"
              />
            
            <ButtonCustom title={"Selanjutnya"} buttonStyle={styles.button} onPress={handle}/>
            <TouchableOpacity>
                <Text style={{alignSelf:'center',marginTop: 20,color: '#1065C8',fontSize: 17}}>Kirim ulang kode!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default Konfirmasi
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
    fontSize: 17    ,
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
    fontSize: 17,
    marginTop: 22,
    marginBottom: 48

  },
  button: {
    height: 59,
    backgroundColor:colors.secondary,
  }
})