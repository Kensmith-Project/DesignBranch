import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform, Pressable, StyleSheet, View, Alert } from 'react-native';
import HomeStackNavigator from './HomeStack';
import Contact from '../screens/Contact';
import LoginStackNavigator from './LoginStack';
import WalletStackNavigator from './WalletStack';

const BottomTabNavigator: React.FC<any> = ({route, navigation}) =>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route})=>({
                headerShown: false,
                tabBarActiveTintColor: "#198619",
                tabBarInactiveTintColor: "#575757",
                tabBarHideOnKeyboard: true,
                //tabBarShowLabel: false,
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontWeight: '500',
                    paddingBottom: Platform.OS === 'android' ? 4 : 0
                },
                tabBarStyle:{
                //    borderBottomLeftRadius: 15,
                //    borderBottomRightRadius: 15,
                   backgroundColor: '#ffffff'
                },
                tabBarIcon: ({ focused, color, size })=>{

                    let HomeIcon = <Ionicons name='home-outline' size={20} color={color}/>;
                    let WalletIcon = <Ionicons name='wallet-outline' size={20} color={color}/>;
                    
                    let ContactIcon = <Ionicons name='call-outline' size={20} color={color}/>
                    // let LoginIcon = <Ionicons name='person-outline' size={size} color={color}/>

                    let LoginIcon = <Ionicons name='person-outline' size={size} color={color}/>

                    if (route.name === 'Home') {
                        return HomeIcon;
                    }
                    if (route.name === 'Wallet') {
                        return WalletIcon;
                    }
                    if (route.name === 'Contact') {
                        return ContactIcon;
                    }
                    if (route.name === 'Login') {
                        return LoginIcon;
                    }
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator}  />
            <Tab.Screen name="Wallet" component={WalletStackNavigator}  />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="Login" component={LoginStackNavigator}  />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    homeIcon:{
        backgroundColor: '#198619',
        padding: 12,
        borderRadius: 50,
        textAlign: 'center',
        position: 'absolute',
        top: Platform.OS === 'android' ? undefined : 0
    }
})

export default BottomTabNavigator;