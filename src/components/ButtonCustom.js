import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../assets';
import { colors } from '../utils';



const ButtonCustom = ({
	title = 'Button',
  	onPress,
  	color = colors.primary,
  	buttonStyle,
	textStyle
}) => {
	return (
		<TouchableOpacity
		style = {[ buttonStyle, styles.button ]}
		onPress = { onPress }>
			<Text style = { [styles.text,textStyle] }>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button : {
		paddingVertical : 10,
		justifyContent : 'center',
		alignItems : 'center',
		borderRadius : 17,
	},
	text : {
		fontFamily : "SemiBold",
		color : colors.white,
	},
});
export default ButtonCustom;
