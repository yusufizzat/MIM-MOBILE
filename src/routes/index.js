import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash,OnBoard,Register,Login,Registerr,Registerrr,Registerrrr,FG,Konfirmasi,Detail,Mim } from '../screens';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions = {{
				headerShown : false,
				}}>
				<Stack.Screen name = "Splash" component = {Splash} />
				<Stack.Screen name ='OnBoard' component={OnBoard}/>
				<Stack.Screen name ='Register' component={Register}/>
				<Stack.Screen name ='Registerr' component={Registerr}/>
				<Stack.Screen name ='Registerrr' component={Registerrr}/>
				<Stack.Screen name ='Registerrrr' component={Registerrrr}/>
				<Stack.Screen name ='Login' component={Login}/>
				<Stack.Screen name ='FG' component={FG}/>
				<Stack.Screen name ='Konfirmasi' component={Konfirmasi}/>
				<Stack.Screen name = "MainNavigator" component = {MainNavigator} />
				<Stack.Screen name = "Detail" component={Detail}/>
				<Stack.Screen name = "Mim" component={Mim}/>
			</Stack.Navigator>
		</NavigationContainer>
  );
}

export default AppNavigator;
