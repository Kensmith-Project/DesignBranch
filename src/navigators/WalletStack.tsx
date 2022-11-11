import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreenWallet from '../screens/LoginInScreenWallet';

import NotSignedIn from '../screens/NotSignedIn';
import SignUpScreenMain from '../screens/SignUpScreenmain';
import WalletScreen from '../screens/WalletScreen';

const WalletStackNavigator: React.FC<any> = () => {
  const WalletStack = createNativeStackNavigator();
  return (
    <WalletStack.Navigator
      initialRouteName="NotSignedIn"
      // screenOptions={({ route })=>({
      //     headerShown: false
      // })}
    >
      <WalletStack.Screen
        name="NotSignedIn"
        component={NotSignedIn}
        options={{
          title: 'My Wallet',
          headerTitleAlign: 'center',
          headerLeft: props => {
            return (
              <Pressable onPress={() => Alert.alert('Back button Pressed')}>
                <Ionicons name="arrow-back" size={20} color="black" />
              </Pressable>
            );
          },
        }}
      />
      <WalletStack.Screen name="WalletHome" component={WalletScreen} options={{
        title: 'My Wallet',
        headerTitleAlign: 'center',
        headerLeft: props => {
          return (
            <Pressable onPress={() => Alert.alert('Back button Pressed')}>
              <Ionicons name="arrow-back" size={20} color="black" />
            </Pressable>
          );
        },
      }}/>
      <WalletStack.Screen name="LogInWallet" component={LoginScreenWallet} options={{headerShown: false}}/>
      <WalletStack.Screen name="SignUpWallet" component={SignUpScreenMain} />
      {/* <WalletStack.Screen name="SignUpDetails" component={} /> */}
    </WalletStack.Navigator>
  );
};

export default WalletStackNavigator;
