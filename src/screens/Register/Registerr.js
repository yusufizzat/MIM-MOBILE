import { StyleSheet, Text, View,Image,StatusBar,Dimensions,TextInput, TouchableOpacity,Platform,DatePickerAndroid,Modal} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import DatePicker from 'react-native-date-picker'
import React, { useEffect,useState } from 'react'
import {  images,icons } from '../../assets';
import { colors } from '../../utils';
import {ButtonCustom} from '../../components'


const Registerr = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    noTelp: '',
    tanggalLahir: ''
  })
  const [date,setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const handleForm = (value,input) => {
    setForm({
      ...form,[input] : value
    })
  }

  const handler = () => {
    console.log(form,jenisKelamin);
    navigation.navigate('Registerrr')

  }
  const [jenisKelamin,setJenisKelamin] = useState('')
  const handleJenisKelamin = (jenis) => {
    setJenisKelamin(jenis);

  };
  const handleDateChange = (selectedDate) => {
    setOpen(false); // Close the DatePicker modal
    setDate(selectedDate); // Set the selected date to the state
    handleForm(selectedDate.toISOString().slice(0, 10), 'tanggalLahir'); // Convert date to string and update the 'tanggalLahir' field in the form state
  };
  
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
            <Text style={styles.heading}>Informasi Pribadi</Text>
            <Text style={styles.subHeading}>Lengkapi Profilmu untuk melanjutkan!</Text>
            <View style={{marginTop: 35,marginBottom: 13,alignItems:'center'}}>
              <Text style={styles.ti}>Nama Depan</Text>
              <TextInput placeholder='Masukkan emailmu' style={styles.input}
                    onChangeText={(value) => handleForm(value,'email')}  
                    value={form.email}
              />
            </View>
            <View style={{alignItems:'center',marginBottom: 13}}>
              <Text style={styles.ti}>No. Telp</Text>
              <TextInput placeholder='Masukkan nomormu' style={styles.input}
                    onChangeText={(value) => handleForm(value,'noTelp')}  
                    value={form.noTelp}
                    keyboardType="phone-pad"
              />
            </View>
            <View style={{alignItems:'center',marginBottom: 13}}>

              <Text style={styles.ti}>Tanggal Lahir</Text>
              <TouchableOpacity onPress={() => setOpen(true)}>
                {/* Use the selected date in the TextInput */}
                <TextInput
                  placeholder="Atur Tanggal Lahirmu"
                  style={styles.input}
                  onChangeText={(value) => handleForm(value, 'tanggalLahir')}
                  value={form.tanggalLahir}
                  editable={false} // Disable direct editing of the TextInput
                />
              </TouchableOpacity>
         
            </View>
            <View>
            <Text style={styles.ti}>Jenis Kelamin</Text>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={[styles.border,jenisKelamin === 'laki-laki' && {borderColor: colors.secondary}]} onPress={() => handleJenisKelamin('laki-laki')}>
                  <Text style={styles.jk}>Laki-laki</Text>
                </TouchableOpacity>
                <View style={{width: 16}}/>
                  <TouchableOpacity style={[styles.border,jenisKelamin === 'perempuan' && {borderColor: colors.secondary}]}  onPress={() => handleJenisKelamin('perempuan')}>
                     <Text  style={styles.jk}>Perempuan</Text>
                  </TouchableOpacity>
              </View>
            </View>
        
          </View>
          <View style={{paddingBottom: 40}}>
            <ButtonCustom title={"Selanjutnya"} buttonStyle={styles.button} onPress={handler}/>
          </View>
        </View>
      </KeyboardAwareScrollView>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                handleDateChange(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
              mode={'date'}
            />
    </>
  )
}

export default Registerr
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