import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawable = createDrawerNavigator()
import { SafeAreaView } from 'react-native'
import Profile from '../screens/drawableScreens/Profile'
import SaveForRent from '../screens/drawableScreens/SaveForRentScreen'
import WalletScreen from '../screens/drawableScreens/WalletScreen'
import HireServiceAgentScreen from '../screens/drawableScreens/HireServiceAgentScreen'
import InspectPropertyScreen from '../screens/drawableScreens/InspectPropertyScreen'
import SettingScreen from '../screens/drawableScreens/SettingScreen'
import CustomDrawer from '../Components/CustomDrawer'
import BottomTabNavigation from '../navigators/BottomTabNavigator'
import HomeScreen from '../screens/HomeScreen'
import HomeStack from './HomeStack'
import SaveForRentStacks from '../screens/drawableScreens/SaveForRentStacks'


const DrawableStack = () => {
  return (
    
    <Drawable.Navigator   drawerContent={props => <CustomDrawer{...props}/>} 
    screenOptions={({ navigation, route })=>({
        drawerType: 'front',
        headerTitleAlign: "center",
        
        
      })}
    >
    <Drawable.Screen name="Home" component={Profile}   options={{
              headerShown: false
            }}/>
             <Drawable.Screen name="SaveForRentScreen" component={SaveForRentStacks}   options={{
              headerShown: false
            }}/>
    
  </Drawable.Navigator>
  )
}

export default DrawableStack