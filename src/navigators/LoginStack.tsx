import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import LoginScreen from '../screens/LoginScreen';
import HomeStackNavigator from './HomeStack';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreenMain from '../screens/LoginInScreenMain';

const LoginStackNavigator: React.FC<any> = () =>{
    const LoginStack = createNativeStackNavigator();
    return(
        <LoginStack.Navigator initialRouteName='LoginScreen'
            screenOptions={({ route })=>({
                headerShown: false
            })}
        >
            <LoginStack.Screen name='LoginScreen' component={LoginScreen}/>
            <LoginStack.Screen name='LoginScreenMain' component={LoginScreenMain}/>
        </LoginStack.Navigator>
    )
}

export default LoginStackNavigator;