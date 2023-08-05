import { StyleSheet, Text, View,Image,StatusBar,Dimensions,TextInput, TouchableOpacity,Platform, ScrollView} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import React, { useEffect,useState } from 'react'
import {  images,icons } from '../../assets';
import { colors } from '../../utils';
import {ButtonCustom,DropdownCo} from '../../components'


const Registerrr = ({navigation}) => {
  const [form, setForm] = useState({
    pendidikan: '',
    statusp: '',
    pekerjaan:'',
    rangegaji: '',
    jumlahanak: ''
  })

//   const handleForm = (value,input) => {
//     setForm({
//       ...form,[input] : value
//     })
//   }
  const handler = () => {
    console.log(form);
    navigation.navigate('Registerrrr')
  }
  
  const pendidikann = [
    { label: 'SD/Sederajat', value: 'SD' },
    { label: 'SMP/Sederajat', value: 'SMP' },
    { label: 'SMA/Sederajat', value: 'SMA' },
    { label: 'D1', value: 'D1' },
    { label: 'D2', value: 'D2' },
    { label: 'D3', value: 'D3' },
    { label: 'S1', value: 'S1' },
    { label: 'S2', value: 'S2' },
    { label: 'S3', value: 'S3' }
  ];
  const statusP = [
    { label: 'Belum Kawin', value: 'Belum Kawin' },
    { label: 'Sudah Kawin', value: 'Sudah Kawin' },
    { label: 'Duda', value: 'Duda' },
    { label: 'Janda', value: 'Janda' },
  ];
  const rangegaji = [
    { label: '< Rp. 1.000.000>', value: '< Rp. 1.000.000' },
    { label: 'Rp. 1.000.000 - Rp 2.500.000', value: 'Rp. 1.000.000 - Rp 2.500.000' },
    { label: 'Rp. 2.500.000 - Rp. 5.000.000', value: 'Rp. 2.500.000 - Rp. 5.000.000' },
    { label: "Rp 5.000.000 >", value: "Rp 5.000.000 >" },
  ]
  const [selectedValue,setSelectedValue] = useState('')
  const handleSelect = (value,input) => {
    setForm({
        ...form,[input] : value
      })
    
  };
  return (
    <>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent/>    
  

        <View style={styles.container}>

          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={icons.back} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Informasi Pribadi!</Text>
            <Text style={styles.subHeading}>Lengkapi Profilmu untuk melanjutkan!</Text>
            <View style={{marginTop: 35,marginBottom: 13,alignItems:'center',}}>
                 <Text style={styles.ti}>Pendidikan Terakhir</Text>
                <DropdownCo onSelect={(value) => handleSelect(value,"pendidikan")} data={pendidikann} title={'Pilih Pendidikan'}/>
            </View>
            <View style={{marginBottom: 13,alignItems:'center'}}>
                 <Text style={styles.ti}>Status Perkawinan</Text>
                <DropdownCo onSelect={(value) => handleSelect(value,"statusp")} data={statusP} title={'Pilih Status'}/>
            </View>
            <View style={{alignItems:'center',marginBottom: 13}}>

                <Text style={styles.ti}>Pekerjaan</Text>
                <TextInput placeholder='Masukkan pekerjaanmu' style={styles.input}
                    onChangeText={(value) => handleSelect(value,'pekerjaan')}  
                />
            </View>
            <View style={{marginBottom: 13,alignItems:'center'}}>
                 <Text style={styles.ti}>Range Gaji</Text>
                <DropdownCo onSelect={(value) => handleSelect(value,"rangegaji")} data={rangegaji} title={'Pilih Range Gaji'}/>
            </View>

      
          </View>
        </View>

        <View style={styles.bt}>
            <ButtonCustom title={"Selanjutnya"} buttonStyle={styles.button} onPress={handler}/>
        </View>

    </>
  )
}

export default Registerrr
const width = Dimensions.get('window').width -40
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor:colors.white,
    paddingBottom: 100
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

  },bt: {position:'absolute',bottom: 0,alignSelf: 'center',width: width,paddingBottom: 40,backgroundColor:colors.white,paddingTop: 10}
})