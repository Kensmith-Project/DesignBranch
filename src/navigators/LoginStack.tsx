import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import LoginScreen from '../screens/LoginScreen';
import HomeStackNavigator from './HomeStack';
import LoginScreenMain from '../screens/LoginInScreenMain';
import BottomTabNavigator from './BottomTabNavigator';
import SignUpScreenMain from '../screens/SignUpScreenmain';
import SignUpInformation from '../screens/SignUpInformation';
import SignUpDetails from '../screens/SignUpDetails';

const LoginStackNavigator: React.FC<any> = () =>{
    const LoginStack = createNativeStackNavigator();
    return(
        <LoginStack.Navigator initialRouteName='LoginScreenMain'
            screenOptions={({ route })=>({
                headerShown: false
            })}
        >
            <LoginStack.Screen name='LoginScreenMain' component={LoginScreenMain}/>
            <LoginStack.Screen name='Home' component={BottomTabNavigator} />
            <LoginStack.Screen name='SignUpScreenMain' component={SignUpScreenMain}/>
            <LoginStack.Screen name='SignUpInfo' component={SignUpInformation}/>
            <LoginStack.Screen name='SignUpDetails' component={SignUpDetails}/>
            
        </LoginStack.Navigator>
    )
}

export default LoginStackNavigator;