import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PropertyCard from '../Components/PropertyCard';
import propertyData from '../mockData/propertyData';
import BottomTabNavigator from './BottomTabNavigator';
import LoginStackNavigator from './LoginStack';


const Drawer = createDrawerNavigator();
const TestStack = createNativeStackNavigator();

const TestScreen = ()=>{
    return <PropertyCard property={propertyData}/>
}

const MainNavigator: React.FC<any> = () =>{

    return(
        <NavigationContainer>
            <TestStack.Navigator initialRouteName='BottomTabs'>
                <TestStack.Screen name='BottomTabs' component={BottomTabNavigator} options={{headerShown: false}}></TestStack.Screen>
                <TestStack.Screen name='LoginStack' component={LoginStackNavigator} options={{headerShown: false}}></TestStack.Screen>
            </TestStack.Navigator>
            {/* <BottomTabNavigator/> */}
        </NavigationContainer>
    )
}

export default MainNavigator;
