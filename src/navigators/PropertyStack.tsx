import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

//Screens
import PropertyCategory from '../screens/PropertyCategory';
import PropertyType from '../screens/PropertyType';
import PropertyDescriptionScreen from '../screens/PropertyDescription';
import PropertyImageScreen from '../screens/PropertyImage';
import PropertyLocationScreen from '../screens/PropertyLocation';
import PropertyDetailScreen from '../screens/PropertyDetails';
import PropertySelectLocation from '../screens/PropertySelectLocation';
import LoginScreen from '../screens/LoginScreen';
import HomeStackNavigator from './HomeStack';

const PropertyStackNavigator: React.FC<any> = () =>{
    const PropertyStack = createNativeStackNavigator();
    return(
        <PropertyStack.Navigator initialRouteName='ProCategory'
            screenOptions={({ route })=>({
                headerShown: false
            })}
        >
            <PropertyStack.Screen name='ProCategory' component={PropertyCategory}/>
            <PropertyStack.Screen name="ProType" component={PropertyType}/>
            <PropertyStack.Screen name="ProDes" component={PropertyDescriptionScreen}/>
            <PropertyStack.Screen name="ProImage" component={PropertyImageScreen}/>
            <PropertyStack.Screen name="ProLocation" component={PropertyLocationScreen}/>
            <PropertyStack.Screen name="ProDetails" component={PropertyDetailScreen}/>
            <PropertyStack.Screen name="ProSelectLocation" component={PropertySelectLocation}/>
            <PropertyStack.Screen name="HomeStack" component={HomeStackNavigator}/>
        </PropertyStack.Navigator>
    )
}

export default PropertyStackNavigator;