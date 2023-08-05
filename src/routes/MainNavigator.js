import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Setting,Quran } from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../utils';
import { GlobalContext } from '../Store/globalContext';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
	return (
		<Tab.Navigator
		screenOptions={({route}) => ({
		  headerShown: false,
		  tabBarShowLabel: false,
	
		  tabBarStyle: {height: 60,position: 'relative'},
	
		  tabBarIcon: ({focused, size, color}) => {
			let iconName;
			if (route.name === 'Home') {
			  iconName = focused ? 'home' : 'home-outline';
			  color = colors.black;
			  size =  size + 9
			} else if (route.name === 'Setting') {
			  iconName = focused ? 'account' : "account-outline";
			  color = colors.black;
			  size =  size + 9 
			} else if (route.name === 'Quran') {
				iconName = focused ? 'book' : "book-outline";
				color = colors.black;
				size =  size + 5 
			  } 
	
			return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
		  },
		})}>
			  <Tab.Screen name="Home" component={Home}/>
			  <Tab.Screen name="Quran" component={Quran}/>
			  <Tab.Screen name="Setting" component={Setting}/>
			</Tab.Navigator>
	);
}
const styles = StyleSheet.create({

});
export default MainNavigator;
