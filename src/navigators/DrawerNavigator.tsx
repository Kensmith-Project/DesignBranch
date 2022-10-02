import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View,Text } from 'react-native'
import BottomTabNavigator from './BottomTabNavigator'
import CustomDrawer from '../Components/CustomDrawer'
const Drawer = createDrawerNavigator()


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrawer {...props} />} screenOptions={
        ()=> ({
            drawerType:'front',
            headerShown:false
        })
    }>
        <Drawer.Screen name='Dashboard' component={BottomTabNavigator}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator