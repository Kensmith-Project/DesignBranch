import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PropertyCard from '../Components/PropertyCard';
import propertyData from '../mockData/propertyData';


const Drawer = createDrawerNavigator();
const TestStack = createNativeStackNavigator();

const TestScreen = ()=>{
    return <PropertyCard property={propertyData}/>
}

const MainNavigator: React.FC<any> = () =>{

    return(
        <NavigationContainer>
            <TestStack.Navigator>
                <TestStack.Screen name='Home' component={TestScreen}/>
            </TestStack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;
