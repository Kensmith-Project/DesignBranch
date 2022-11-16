import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SaveForRentScreen from './SaveForRentScreen';
import SelectTypeSplashScreen from './SelectTypeSplashScreen';

const Stack = createNativeStackNavigator();

const SaveForRentStacks = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SaveForRentScreen'>
            <Stack.Screen
              name="Save for Rent"
              component={SaveForRentScreen}
              options={{ title: 'Save for Rent' }}
            />
            <Stack.Screen name="SelectTypeSplashScreen" component={SelectTypeSplashScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default SaveForRentStacks