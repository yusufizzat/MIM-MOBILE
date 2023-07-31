import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../utils';


const DropdownCo = ({ onSelect,data,title }) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);



  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? title : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          onSelect(item.value); // Panggil fungsi onSelect di sini
        }}
      />
    </View>
  );
};

export default DropdownCo;
const width = Dimensions.get('window').width -40
const styles = StyleSheet.create({

  dropdown: {
    width: width,
    height: 59,
    borderRadius: 17,
    paddingHorizontal: 8,
    backgroundColor:colors.gray,
    paddingHorizontal: 25,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});


