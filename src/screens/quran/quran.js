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
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';
import { Box } from "@react-native-material/core";
import {ButtonCustom} from '../../components'
import {  images,icons } from '../../assets';
import React, { useEffect, useState } from 'react';

import { colors } from '../../utils';
import { getSurat } from '../../services/api';

const Quran = ({navigation}) => {

  const [suratData, setSuratData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getSurat();
        setSuratData(data);
        console.log('result...', data,'aaas');
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}/>
        <View style={styles.container}>

          <View style={styles.header}>
          <Image source={icons.menu} style={styles.menu}/>
        </View>
        <View style={styles.body1}>
          <View style={{marginTop: 22}}>
        
            <Text style={{fontSize: 27, fontFamily: 'SemiBold',color: colors.black,marginTop: -3}}>Al-Qur'an</Text>
          </View>
          <View style={styles.progress}>
        
       
            <Image source={images.q} style={styles.progressImage}/>
          </View>
          <FlatList 
            data={suratData}
            keyExtractor={item => item.nomor}
            style={{marginTop: 20}}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Detail',{no_id: item.nomor})}>
                <View style={styles.mim}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{justifyContent:'center'}}>
 
                        <Text style={{fontFamily: "SemiBold",color: colors.black,fontSize: 14,textAlign:'center',alignSelf:'center'}}>{item.nomor}</Text>
             
                    </View>
                    <Text style={{marginLeft: 50}}>{item.namaLatin}</Text>
                  </View>
                  <Text>{item.nama}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyboardShouldPersistTaps="always"
          />
          
        </View>
        </View>
    </>
  )
}

export default Quran
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
      width:width -45,
      height:80,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      alignSelf:'center',
      borderBottomWidth: 1,
      borderColor:'grey',
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