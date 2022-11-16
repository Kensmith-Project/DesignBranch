import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Profile from '../screens/drawableScreens/Profile';
import HomeScreen from '../screens/HomeScreen';
import PropertyScreen from '../screens/PropertyScreen';
import DrawableStack from './DrawableStack';
// import SaveForRent from '../screens/drawableScreens/SaveForRentScreen'
import WalletScreen from '../screens/drawableScreens/WalletScreen'
import HireServiceAgentScreen from '../screens/drawableScreens/HireServiceAgentScreen'
import InspectPropertyScreen from '../screens/drawableScreens/InspectPropertyScreen'
import SettingScreen from '../screens/drawableScreens/SettingScreen'
import SelectTypeSplashScreen from '../screens/drawableScreens/SelectTypeSplashScreen';
import CustomHomeScreenHeader from '../Components/CustomHomeScreenHeader';
import SaveForRent from '../screens/drawableScreens/SaveForRentScreen';
import NameDetailsPage from '../screens/drawableScreens/NameDetailsPage';
import PasswordDetailsPage from '../screens/drawableScreens/PasswordDetailsPage';
import DoneAnimationPage from '../screens/drawableScreens/DoneAnimationPage'
import { StyleSheet } from 'react-native';
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
            <HomeStack.Screen name ="SaveForRent"component={SaveForRent}  options={{
                headerShown:true,
                headerTitleAlign:'center',
                headerTitle:'Save for Rent',
               
              }}/>
              <HomeStack.Screen name ="NameDetailsPage"component={NameDetailsPage}  options={{
                headerShown:true,
                headerTitleAlign:'center',
                headerTitle:'Save for Rent',
               
              }}/>
               <HomeStack.Screen name ="PasswordDetailsPage"component={PasswordDetailsPage}  options={{
                headerShown:true,
                headerTitleAlign:'center',
                headerTitle:'Save for Rent',
               
              }}/>
               <HomeStack.Screen name ="DoneAnimationPage"component={DoneAnimationPage}  options={{
                headerShown:false,
                headerTitleAlign:'center',
                headerTitle:'Save for Rent',
               
              }}/>
            <HomeStack.Screen name ="Wallet"component={WalletScreen}/>
            <HomeStack.Screen name="Hire a Service Agent" component={HireServiceAgentScreen}/>
            <HomeStack.Screen name ="Inspect a Property" component={InspectPropertyScreen}/>
            <HomeStack.Screen name ="Settings" component={SettingScreen}/>
            <HomeStack.Screen name ="SelectTypeSplashScreen" component={SelectTypeSplashScreen}
            
            
             options={{
                headerShown:true,
                headerTitleAlign:'center',
                headerTitle:'Save for Rent',
                headerBackVisible:true

                
               
              }}
              
            />
            
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigator;
const styles = StyleSheet.create({
    
})