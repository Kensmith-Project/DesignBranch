import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import { Platform, StyleSheet, View } from 'react-native';
import HomeStackNavigator from './HomeStack';

const BottomTabNavigator: React.FC<any> = () =>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route})=>({
                headerShown: false,
                tabBarActiveTintColor: "#91EA91",
                tabBarHideOnKeyboard: true,
                //tabBarShowLabel: false,
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontWeight: '500',
                    paddingBottom: Platform.OS === 'android' ? 4 : 0
                },
                tabBarStyle:{
                   borderTopLeftRadius: 15,
                   borderTopRightRadius: 15,
                },
                tabBarIcon: ({ focused, color, size })=>{

                    let SearchIcon = <FontAwesomeIcon name='search' size={size} color={color}/>;
                    let WalletIcon = <Ionicons name='wallet-outline' size={size} color={color}/>;
                    let HomeIcon = (
                        <View style={styles.homeIcon}>
                            <FontAwesomeIcon 
                                name='home' 
                                size={30}
                                color="white"
                            />
                        </View>
                    )
                    let SaveIcon = <MaterialCommunityIcons name='piggy-bank-outline' size={size} color={color}/>
                    let MoreIcon = <FeatherIcon name='more-horizontal' size={size} color={color}/>

                    if (route.name === 'Search') {
                        return SearchIcon;
                    }
                    if (route.name === 'Wallet') {
                        return WalletIcon;
                    }
                    if (route.name === 'Home') {
                        return HomeIcon;
                    }
                    if (route.name === 'SaveForRent') {
                        return SaveIcon;
                    }
                    if (route.name === 'More') {
                        return MoreIcon;
                    }
                }
            })}
        >
            <Tab.Screen name="Search" component={HomeScreen}  />
            <Tab.Screen name="Wallet" component={HomeScreen}  />
            <Tab.Screen name="Home" component={HomeStackNavigator}
                options={{
                    tabBarLabelStyle: {
                        fontSize: Platform.OS === 'android' ? 0 : 1
                    },
                }}  
            />
            <Tab.Screen name="SaveForRent" component={HomeScreen}  />
            <Tab.Screen name="More" component={HomeScreen}  />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    homeIcon:{
        backgroundColor: '#91EA91',
        padding: 12,
        borderRadius: 50,
        textAlign: 'center',
        position: 'absolute',
        top: Platform.OS === 'android' ? undefined : 0
    }
})

export default BottomTabNavigator;