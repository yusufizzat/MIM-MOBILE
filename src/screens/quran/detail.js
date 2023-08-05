import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useState,useEffect } from 'react'
import { getDetail } from '../../services/api';

const Detail = ({route}) => {
    const [suratDetail,setSuratDetail] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await getDetail(route.params.no_id);
            setSuratDetail(data);
            console.log('result...', data,'as');
          } catch (error) {
            console.log('error', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <View style={{flex: 1}}>
         <FlatList 
            data={suratDetail}
            keyExtractor={item => item.nomor}
            style={{marginTop:20}}
            renderItem={({item}) => (
                <View style={{backgroundColor:'red'}}>
                  <Text>{item.arti}</Text>
                </View>

            )}
            keyboardShouldPersistTaps="always"
          />
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})