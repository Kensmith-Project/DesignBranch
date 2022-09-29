import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utils/Tools';

const LoginScreen: React.FC<any> = ({route, navigation}) => {
  function backtoHome(): any {
    navigation.navigate('LoginStack');
  }
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../images/Rectanglen.png')}
        resizeMode="cover"
        style={styles.image}>
        <ImageBackground
          source={require('../images/logoimage.png')}
          style={styles.imageB}>
          <View>
            <View style={styles.iconView}>
              <Pressable onPress={backtoHome}>
                <Ionicons
                  size={40}
                  name="chevron-back-circle-outline"
                  color={COLOR.blackColor}
                />
              </Pressable>
            </View>
            <View>
              <Text style={styles.textView}>
                Find your dream home, save towards your rent & request for an
                instant loan, all in one place!
              </Text>
            </View>
          </View>
          <View>
            <Pressable style={styles.btnOne}>
              <Text style={styles.textOne}>Login</Text>
            </Pressable>

            <Pressable style={styles.btnTwo}>
              <Text style={styles.textTwo}>Create Account</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  iconView: {
    marginLeft: 30,
    marginTop: 10,
  },
  textView: {
    marginLeft: 30,
    marginTop: 34,
    fontSize: 20,
    fontWeight: '900',
    color: COLOR.baseColorTetiary,
  },
  image: {
    flex: 1,
    backgroundColor: '#A6FDA6',
  },

  imageB: {
    flex: 1,
    justifyContent: 'space-between',
  },
  btnOne: {
    backgroundColor: COLOR.baseTextColor,
    alignItems: "center",
    margin: 22,
    height: 54,
    justifyContent: "center",
    borderRadius: 7,
    
  },
  btnTwo: {
    backgroundColor: COLOR.baseColorPrimary,
    alignItems: "center",
    margin: 22,
    height: 54,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLOR.buttonPrimary,
    borderRadius: 7,
  },
  textOne: {
    color: COLOR.baseColorPrimary,
    fontSize: 26,
    fontWeight: '500'
  },
  textTwo: {
    color: COLOR.baseTextColor,
    fontSize: 26,
    fontWeight: '500'
  }
});

export default LoginScreen;
