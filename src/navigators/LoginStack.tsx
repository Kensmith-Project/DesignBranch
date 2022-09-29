import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import LoginScreen from '../screens/LoginScreen';
import HomeStackNavigator from './HomeStack';
import BottomTabNavigator from './BottomTabNavigator';

const LoginStackNavigator: React.FC<any> = () =>{
    const LoginStack = createNativeStackNavigator();
    return(
        <LoginStack.Navigator
            screenOptions={({ route })=>({
                headerShown: false
            })}
        >
            <LoginStack.Screen name='LoginScreen' component={LoginScreen}/>
            <LoginStack.Screen name='BackHome' component={BottomTabNavigator}/>
        </LoginStack.Navigator>
    )
}

export default LoginStackNavigator;