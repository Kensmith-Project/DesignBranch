import { NavigationContainer, RouteProp } from '@react-navigation/native';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GeneralStackScreenProps from '../props/GeneralStackScreenProps';
import {COLOR} from '../utils/Tools';

export interface PropertyCategoryProps extends GeneralStackScreenProps {
  route?: RouteProp<{
    params:{

    }
  }>
}

const PropertyCategory: React.FC<PropertyCategoryProps> = (route, navigation) => {

  function moveToHomeScreen() {
   
  }

  return (
    <View>
      <View style={styles.topContainer}>
        <Pressable 
        // onPress={}
        >
          <Ionicons
            size={30}
            name="arrow-back-outline"
            color={COLOR.blackColor}
          />
        </Pressable>
      </View>
      <View style={{paddingLeft: 20, paddingRight: 20, marginTop: 44}}>
        <Text
          style={{
            fontFamily: 'Nunito',
            fontSize: 24,
            fontWeight: '600',
            lineHeight: 22,
            paddingBottom: 34,
            color: COLOR.baseColorTetiary,
          }}>
          Please select a category to list your property
        </Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable onPress={() => Alert.alert('For Rent button pressed')}>
              <ImageBackground
                source={require('../images/forrent.png')}
                style={{width: 160, height: 160}}>
                <View
                  style={{
                    backgroundColor: COLOR.buttonPrimary,
                    width: 145,
                    height: 150,
                    opacity: 0.8,
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('../images/buttonicon.png')}></Image>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      lineHeight: 23,
                      marginTop: 8,
                      color: COLOR.baseColorPrimary,
                    }}>
                    For Rent
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>

            <Pressable onPress={() => Alert.alert('For sale button pressed')}>
              <ImageBackground
                source={require('../images/forsale.png')}
                style={{width: 160, height: 160}}>
                <View
                  style={{
                    backgroundColor: COLOR.buttonPrimary,
                    width: 145,
                    height: 150,
                    opacity: 0.8,
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('../images/buttonicon.png')}></Image>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      lineHeight: 23,
                      marginTop: 8,
                      color: COLOR.baseColorPrimary,
                    }}>
                    For Sale
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
          <View style={{marginTop: 22}}>
            <Pressable
              onPress={() => Alert.alert('Rent to own button pressed')}>
              <ImageBackground
                source={require('../images/renttoown.png')}
                style={{width: 160, height: 160}}>
                <View
                  style={{
                    backgroundColor: COLOR.buttonPrimary,
                    width: 145,
                    height: 150,
                    opacity: 0.8,
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('../images/buttonicon.png')}></Image>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      lineHeight: 23,
                      marginTop: 8,
                      color: COLOR.baseColorPrimary,
                    }}>
                    Rent to own
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
});

export default PropertyCategory;
