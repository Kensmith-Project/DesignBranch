import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import PropertyScreen from '../screens/PropertyScreen';

const HomeStackNavigator: React.FC<any> = () =>{
    const HomeStack = createNativeStackNavigator();
    return(
        <HomeStack.Navigator
            screenOptions={({ route })=>({
                headerShown: false
            })}
        >
            <HomeStack.Screen name='Main' component={HomeScreen}/>
            <HomeStack.Screen name="Property" component={PropertyScreen}/>
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigator;