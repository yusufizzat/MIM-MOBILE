import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  StatusBar,
  Pressable,
  ToastAndroid,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Voice from '@react-native-voice/voice';
import { fonts } from '../../assets';
import { colors } from '../../utils';
import {ButtonCustom} from '../../components'

const Home = () => {
  const [convertedTexts, setConvertedTexts] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [defaultAyat,setDefaultAyat] = useState('الحمد لله رب العالمين')
  const [repeat,setRepeat]= useState(0)


  useEffect(() => {
    // Adding event listeners
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      // Removing event listeners
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      setIsListening(true);
      await Voice.start('ar-AE'); // Language code, e.g., 'en-US', 'en-GB', 'es-ES'
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      setIsListening(false);
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const onSpeechResultsHandler = async(e) => {
    console.warn(e.value)
    let spokenText = '';
    e.value.map((item) => {
      spokenText = spokenText + ' ' + item;
    });
    setConvertedTexts(e.value[0]);
    if(e.value[0]==defaultAyat){
        ToastAndroid.show(
            'Bacaanmu sudah benar',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
        setRepeat(state=>state+1)
    }else{
        ToastAndroid.show(
            'Bacaanmu belum benar',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
    }
    try {
        setIsListening(false);
        await Voice.stop();
      } catch (e) {
        console.error(e);
      }
  };

  return (
    // <View style={styles.container}>
    //   <SafeAreaView style={[styles.bg, styles.bgPosition]}>
    //     <View style={[styles.brandColorBg, styles.brandPosition]}>
          
    //     </View>
    //     {/* <Image
    //       style={[styles.livingBackgroundIcon, styles.brandPosition]}
    //       resizeMode="cover"
    //       source={require('../assets/living-background.png')}
    //     /> */}
    //   </SafeAreaView>
    //   <View style={[styles.deviceUi, styles.deviceUiFlexBox]}>
    //     <StatusBar barStyle="default" />
    //     <View style={styles.tabbarHandleIos}>
    //       <View style={[styles.brandColorBg, styles.brandPosition]}>
    //         <View style={styles.homeIndicator} />
    //       </View>
    //     </View>
    //   </View>

    //   {/* <Pressable
    //     onPress={isListening ? stopListening : startListening}
    //     style={styles.voiceFabIcon}> */}
    //     {isListening ? (
    //     //   <Image
    //     //     resizeMode="cover"
    //     //     source={require('../assets/voice-stop-fab.png')}
    //     //   />
    //     <Text style={{color:'black'}} onPress={isListening ? stopListening : startListening}>Stop</Text>
    //     ) : (
    //     //   <Image
    //     //     resizeMode="cover"
    //     //     source={require('../assets/voice-fab.png')}
    //     //   />
    //     <Text style={{color:'black'}}     onPress={isListening ? stopListening : startListening}>Mulai</Text>
    //     )}
    //   {/* </Pressable> */}

    //   <View style={[styles.mainScreenInner, styles.bgPosition]}>
    //     <ScrollView
    //       style={[styles.frameWrapper, styles.bgPosition]}
    //       pagingEnabled={false}
    //       showsHorizontalScrollIndicator={false}
    //       contentContainerStyle={styles.frameScrollViewContent}>
        
    //         <View
    //           style={styles.translatedtextitemLayout}
    //           key={Date.now().toString()}
    //           >
    //           <View
    //             style={[
    //               styles.translatedtextitem,
    //               styles.translatedtextitemLayout,
    //             ]}>
    //             <Text style={[styles.helloHopeYouContainer, styles.pmFlexBox]}>
    //               {convertedTexts||''}
    //             </Text>
    //             {/* <Image
    //               style={[
    //                 styles.systemUiconswrite,
    //                 styles.systemUiconswritePosition,
    //               ]}
    //               resizeMode="cover"
    //               source={require('../assets/write-icon.png')}
    //             /> */}
    //           </View>
    //         </View>
    //     </ScrollView>
    //   </View>
    // </View>
    <SafeAreaView style={{flex:1,padding:16,backgroundColor:colors.white,justifyContent:'center'}}>
        <Text style={{fontFamily:fonts.PoppinsBold,color:colors.black,fontSize:20,textAlign:'center'}}>Bacalah ayat di bawah ini</Text>
        <Text style={{fontFamily:fonts.PoppinsBold,color:colors.black,fontSize:30,textAlign:'center',marginTop:16}}>الحمد لله رب العالمين</Text>
        <Text style={{fontFamily:fonts.PoppinsBold,color:colors.black,fontSize:20,marginTop:16,textAlign:'center'}}>Pengulangan: {repeat} kali</Text>
        {!isListening&&<ButtonCustom title='Mulai membaca' buttonStyle={{position:'absolute',bottom:16,right:0,left:0,marginHorizontal:16}} onPress={startListening}/>}
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    top: 0,
    width: 375,
  },
  brandPosition: {
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    left: '0%',
    position: 'absolute',
    width: '100%',
  },
  deviceUiFlexBox: {
    alignItems: 'center',
    position: 'absolute',
  },
  brandColorBg1: {
    left: '0%',
  },
  brandColorBg: {
    left: '0%',
  },
  livingBackgroundIcon: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'none',
    left: '0%',
    overflow: 'hidden',
  },
  bg: {
    left: 0,
    width: 375,
    position: 'absolute',
    height: 812,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: '50%',
    borderRadius: 100,
    width: 134,
    height: 5,
    position: 'absolute',
    backgroundColor: 'white',
  },
  tabbarHandleIos: {
    height: 34,
    marginTop: 734,
    width: 375,
  },
  deviceUi: {
    left: -2,
    width: 375,
    top: 0,
  },

  untitled11: {
    top: 737,
    left: 119,
    width: 115,
    height: 32,
    position: 'absolute',
  },
  container: {
    borderRadius: 0,
    shadowColor: 'rgba(7, 0, 83, 0.1)',
    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowRadius: 44,
    elevation: 44,
    shadowOpacity: 1,
    flex: 1,
    overflow: 'hidden',
    height: 812,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  // Main Screen
  frameScrollViewContent: {
    flexDirection: 'column',
  },
  frameWrapperFlexBox: {
    flex: 1,
    overflow: 'hidden',
  },

  translatedtextitemLayout: {
    height: 95,
    width: 350,
  },
  pmFlexBox: {
    textAlign: 'left',
    color: 'black',
    position: 'absolute',
  },
  systemUiconswritePosition: {
    left: 0,
    position: 'absolute',
  },

  voiceFabIcon: {
    width: 88,
    height: 88,
    position: 'absolute',
    bottom: 0,
    right: 144,
    marginBottom: 10,
  },
  helloHopeYouContainer: {
    height: '75.39%',
    width: '85.53%',
    left: '14.35%',
    fontSize: 18,
    top: '0%',
  },
  systemUiconswrite: {
    top: 11,
    borderRadius: 10,
    width: 36,
    height: 48,
    overflow: 'hidden',
  },
  pm: {
    right: 0,
    bottom: 0,
    fontWeight: '300',
    marginRight: 10,
    height: 16,
  },
  translatedtextitem: {
    left: 0,
    position: 'absolute',
    top: 0,
  },
  frameWrapper: {
    padding: 10,
    maxWidth: 375,
    top: 0,
    overflow: 'hidden',
    flex: 1,
  },
  mainScreenInner: {
    top: 77,
    height: 584,
  },
});

export default Home;