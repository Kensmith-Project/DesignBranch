import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ToastAndroid,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utils/Tools';
import axios from 'axios';

interface RootStackParamList extends ParamListBase {
  payload: {
    fName: string;
    lName: string;
    eMail: string;
    pNumber: string;
  };
}

const SignUpDetails: React.FC<any> = (
  {navigation, route},
  prop: NativeStackScreenProps<RootStackParamList, 'payload'>,
) => {
  //base url + endpoint
  const url: string =
    'https://homezonebackend.accessbankplc.com:6060/api/Account/register';

  //Storing data passed from the signup information screen
  let firstName: string = route.params?.fName;
  let lastName: string = route.params?.lName;
  let email: string = route.params?.eMail;
  let phoneNumber: string = route.params?.pNumber;

  // console.log('Details gotten ---------', firstName, lastName, email, phoneNumber)

  //Storing data gotting from this screen
  const [userName, setUserName] = useState<string>('');
  const [password, setPassowrd] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  //functions

  //----------------ANDROID TOAST-------------------
  function wrongUserName() {
    ToastAndroid.showWithGravity(
      'User Name cannot be empty, contain spaces or less than 3 characters',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }

  function wrongPassword() {
    ToastAndroid.showWithGravity(
      'Password must be a minimum eight of characters, at least one uppercase letter, one lowercase letter and one number',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }

  function wrongConfirmPassword() {
    ToastAndroid.showWithGravity(
      'Confirm password does not match Password',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }

  // -----------------------------------------------

  //------------validate password-----------------
  function validatePassword(): boolean {
    let regex1 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let n = password;
    if (n.match(regex1)) {
      // let c = n[0].toUpperCase()
      console.log(n);
      // userInfo[firstN] = n
      return true;
    } else {
      wrongPassword();
      return false;
    }
  }

  //------------validate confirm password-----------------
  function validateConfirmPassword(): boolean {
    // let regex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // let p = confirmPassword;
    if (password === confirmPassword) {
      console.log(confirmPassword);
      return true;
    } else {
      wrongConfirmPassword();
      return false;
    }
  }

  //------------validate User Name-----------------
  function validateUserName(): boolean {
    let regex1 = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    let o = userName;
    if (
      o.match(regex1) &&
      o.length !== 0 &&
      !o.includes(' ') &&
      o.length >= 3
    ) {
      // let c = n[0].toUpperCase()
      console.log(o);
      // userInfo[firstN] = n
      return true;
    } else {
      wrongUserName();
      return false;
    }
  }

  //--------------GET ALL USER INFO-------------------
  async function getdetails() {
    if (validatePassword() && validateConfirmPassword() && validateUserName()) {
      let thePostData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
        userType: 0
      };

      // console.log('The User Details', thePostData);

      // POST request using fetch()
      fetch(url, {
        // Adding method type
        method: 'POST',

        // Adding body or contents to send
        body: JSON.stringify(thePostData),

        // Adding headers to the request
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(json => console.log(json));
    } else {
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.iconView}>
          <Pressable onPress={() => navigation.navigate('SignUpInfo')}>
            <Ionicons
              size={30}
              name="arrow-back-outline"
              color={COLOR.blackColor}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.textView}>Please Set-up your Login Details</Text>
        </View>
        <View>
          <View style={{marginLeft: 22, marginRight: 22}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                fontStyle: 'normal',
                color: '#575757',
              }}>
              User Name
            </Text>
            <TextInput
              onChangeText={value => setUserName(value)}
              placeholder=""
              style={{
                borderWidth: 1,
                borderColor: 'rgba(185, 185, 185, 0.4)',
                borderRadius: 10,
                marginTop: 4,
                paddingLeft: 10,
                marginBottom: 30,
              }}
            />
          </View>

          <View style={{marginLeft: 22, marginRight: 22}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                fontStyle: 'normal',
                color: '#575757',
              }}>
              Password
            </Text>
            <TextInput
              onChangeText={value => setPassowrd(value)}
              placeholder=""
              style={{
                borderWidth: 1,
                borderColor: 'rgba(185, 185, 185, 0.4)',
                borderRadius: 10,
                marginTop: 4,
                paddingLeft: 10,
                marginBottom: 30,
              }}
            />
          </View>

          <View style={{marginLeft: 22, marginRight: 22}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                fontStyle: 'normal',
                color: '#575757',
              }}>
              Confirm Password
            </Text>
            <TextInput
              onChangeText={value => setConfirmPassword(value)}
              placeholder=""
              style={{
                borderWidth: 1,
                borderColor: 'rgba(185, 185, 185, 0.4)',
                borderRadius: 10,
                marginTop: 4,
                paddingLeft: 10,
                marginBottom: 30,
              }}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 22,
              }}>
              <Image source={require('../images/dotnew.png')} />
              <Text style={{color: '#575757', marginLeft: 4}}>
                Should contain at least 8 characters.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 22,
                marginTop: 12,
              }}>
              <Image source={require('../images/dotnew.png')} />
              <Text style={{color: '#575757', marginLeft: 4}}>
                Both passwords must match.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.pressable}
          onPress={getdetails}
          // onPress={() => navigation.navigate('success')}
        >
          <Text style={styles.pressableText}>Contuine</Text>
        </Pressable>
        {/* <Text style={styles.baseText}>
          New to HomeZone?{' '}
          <Text style={styles.baseTextInner} onPress={() => Alert.alert('Sign up Screen')}>Create an Account</Text>
        </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  iconView: {
    marginLeft: 22,
    marginTop: 10,
  },
  textView: {
    marginLeft: 22,
    marginTop: 40.68,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLOR.baseFont,
    marginBottom: 30,
    fontFamily: 'Lora',
    paddingRight: 8,
  },
  textInput: {
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    borderColor: 'rgba(185, 185, 185, 0.4)',
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#3A3A3A',
    marginBottom: 4,
    fontStyle: 'normal',
  },
  textTwo: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#3A3A3A',
    marginTop: 30,
    fontStyle: 'normal',
  },
  fPass: {
    marginLeft: 20,
    color: '#198619',
    marginTop: 16,
    fontSize: 18,
    fontWeight: '400',
  },
  pressable: {
    backgroundColor: '#198619',
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 30,
  },
  baseText: {
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
    color: '#198619',
  },
  baseTextInner: {
    fontWeight: '600',
    fontSize: 20,
  },
  pressableText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 26,
  },
});

export default SignUpDetails;
