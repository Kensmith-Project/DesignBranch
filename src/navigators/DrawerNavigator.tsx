import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View,Text } from 'react-native'
import BottomTabNavigator from './BottomTabNavigator'
import CustomDrawer from '../Components/CustomDrawer'
import LoginScreen from '../screens/LoginScreen'
import LoginScreenMain from '../screens/LoginInScreenMain'
import AccountCreated from '../screens/AccountCreated'

// LoginScreenMain
const Drawer = createDrawerNavigator()


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrawer {...props} />} screenOptions={
        ()=> ({
            drawerType:'front',
            headerShown: false
        })
    }>
        <Drawer.Screen name='Dashboard' component={BottomTabNavigator}/>
        <Drawer.Screen name='LoginStack' component={LoginScreen} />
        <Drawer.Screen name='LoginScreenMain' component={LoginScreenMain} />
        <Drawer.Screen name='success' component={AccountCreated}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator