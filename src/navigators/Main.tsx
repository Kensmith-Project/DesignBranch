import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PropertyCard from '../Components/PropertyCard';
import propertyData from '../mockData/propertyData';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';


const Drawer = createDrawerNavigator();
const TestStack = createNativeStackNavigator();

const TestScreen = ()=>{
    return <PropertyCard property={propertyData}/>
}

const MainNavigator: React.FC<any> = () =>{

    return(
        <NavigationContainer>
            <BottomTabNavigator/>
        </NavigationContainer>
    )
}

export default MainNavigator;
