import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Profile from '../screens/drawableScreens/Profile';
import HomeScreen from '../screens/HomeScreen';
import PropertyScreen from '../screens/PropertyScreen';
import DrawableStack from './DrawableStack';
import SaveForRent from '../screens/drawableScreens/SaveForRentScreen'
import WalletScreen from '../screens/drawableScreens/WalletScreen'
import HireServiceAgentScreen from '../screens/drawableScreens/HireServiceAgentScreen'
import InspectPropertyScreen from '../screens/drawableScreens/InspectPropertyScreen'
import SettingScreen from '../screens/drawableScreens/SettingScreen'
import CustomHomeScreenHeader from '../Components/CustomHomeScreenHeader';
const HomeStackNavigator: React.FC<any> = () =>{
    const HomeStack = createNativeStackNavigator();
    return(
        <HomeStack.Navigator initialRouteName='Home'
            screenOptions={({ route })=>({
                headerShown: false
            })}
        >
            <HomeStack.Screen name='Main'
             
            // options= {({route,navigation})=>({
            //      header: (props)=> <CustomHomeScreenHeader navigation={navigation}/>
            // })}
            
            component={HomeScreen}/>
            <HomeStack.Screen name="Property" component={PropertyScreen}/>
            <HomeStack.Screen name='Profile'  component={Profile}/>
            <HomeStack.Screen name ="SaveForRent"component={SaveForRent}/>
            <HomeStack.Screen name ="Wallet"component={WalletScreen}/>
            <HomeStack.Screen name="Hire a Service Agent" component={HireServiceAgentScreen}/>
            <HomeStack.Screen name ="Inspect a Property" component={InspectPropertyScreen}/>
            <HomeStack.Screen name ="Settings" component={SettingScreen}/>
            
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigator;