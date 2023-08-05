import { StyleSheet, Text, View,Image,StatusBar,Dimensions,TextInput, TouchableOpacity,Platform, ScrollView} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import React, { useEffect,useState } from 'react'
import {  images,icons } from '../../assets';
import { colors } from '../../utils';
import {ButtonCustom,DropdownCo} from '../../components'


const Registerrrr = ({navigation}) => {
  const [form, setForm] = useState({
    provinsi: '',
    kota: '',

  })

//   const handleForm = (value,input) => {
//     setForm({
//       ...form,[input] : value
//     })
//   }
  const handler = () => {
    console.log(form);

  }
  
  const [provinces, setProvinces] = useState([])
  const [cities,setCities] = useState([])

  const [selectedValue,setSelectedValue] = useState('')
  const [id, setId] = useState('')
  const handleSelect = (value, input, label) => {
    if (input === 'provinsi') {
      // Cari item dengan value yang sesuai dalam daftar provinsi
      const selectedProvince = provinces.find((item) => item.value === value);
  
      // Jika item ditemukan, simpan nama provinsi dalam variabel form
      if (selectedProvince) {
        setForm({
          ...form,
          provinsi: selectedProvince.label
        });
        setId(value)
      }
    } else if (input === 'kota') {
      // Cari item dengan value yang sesuai dalam daftar kabupaten/kota
      const selectedCity = cities.find((item) => item.value === value);
  
      // Jika item ditemukan, simpan nama kabupaten dalam variabel form
      if (selectedCity) {
        setForm({
          ...form,
          kota: selectedCity.label,
        });
      }
    }
  };
  useEffect(() => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
            // setSelectedValue(result.id)
            const formattedProvinces = result.map((item) => ({
                label: item.name,
                value: item.id,
              }));
            
            setProvinces(formattedProvinces)})
        .catch(error => console.log('error', error));
  },[])

  useEffect(() => {
    if(form.provinsi) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${id}.json`, requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result)
                const formattedCities = result.map((item) => ({
                    label: item.name,
                    value: item.id
                }));
                setCities(formattedCities)
            })
            .catch(error => console.log('error', error));
    }
  },[form.provinsi])
  return (
    <>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent/>    
  

        <View style={styles.container}>

          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={icons.back} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Alamat Tinggal!</Text>
            <Text style={styles.subHeading}>Lengkapi Profilmu untuk melanjutkan!</Text>
            <View style={{marginTop: 35,marginBottom: 13,alignItems:'center',}}>
                 <Text style={styles.ti}>Provinsi</Text>
                <DropdownCo onSelect={(value,label) => handleSelect(value,"provinsi")} data={provinces} title={'Pilih Provinsi'}/>
            </View>
            <View style={{marginBottom: 13,alignItems:'center'}}>
                 <Text style={styles.ti}>Kabupaten/Kota</Text>
                <DropdownCo onSelect={(value,label) => handleSelect(value,"kota")} data={cities} title={'Pilih Kabupaten/Kota'}/>
            </View>


      
          </View>
        </View>

        <View style={styles.bt}>
            <ButtonCustom title={"Daftar"} buttonStyle={styles.button} onPress={handler}/>
        </View>

    </>
  )
}

export default Registerrrr
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