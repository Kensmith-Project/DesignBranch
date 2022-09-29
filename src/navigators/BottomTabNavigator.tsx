import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import { Platform, Pressable, StyleSheet, View, Alert } from 'react-native';
import HomeStackNavigator from './HomeStack';
import { LinearGradient } from 'react-native-svg';
import PropertyStackNavigator from './PropertyStack';
import LoginStackNavigator from './LoginStack';

const BottomTabNavigator: React.FC<any> = ({route, navigation}) =>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route})=>({
                headerShown: false,
                tabBarActiveTintColor: "#198619",
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
                   backgroundColor: '#F3FFF3'
                },
                tabBarIcon: ({ focused, color, size })=>{

                    let HomeIcon = <FontAwesomeIcon name='home' size={size} color={color}/>;
                    let PropertyIcon = <Ionicons name='business-outline' size={size} color={color}/>;
                    
                    let ContactIcon = <Ionicons name='call-outline' size={size} color={color}/>
                    // let LoginIcon = <Ionicons name='person-outline' size={size} color={color}/>

                    let LoginIcon = 
                    <Pressable 
                    onPress={() => navigation.navigate("LoginStack")
                    }>
                        <Ionicons name='person-outline' size={size} color={color}/>
                    </Pressable>

                    if (route.name === 'Home') {
                        return HomeIcon;
                    }
                    if (route.name === 'Post a Property') {
                        return PropertyIcon;
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
            <Tab.Screen name="Post a Property" component={PropertyStackNavigator}  />
            <Tab.Screen name="Contact" component={HomeScreen}  />
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