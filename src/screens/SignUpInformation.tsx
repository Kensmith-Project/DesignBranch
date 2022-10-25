import React, {useState} from 'react';
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

const SignUpInformation: React.FC<any> = ({route, navigation}) => {
  //states
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  //functions

  //----------------ANDROID TOAST-------------------
  function wrongFirstName() {
    ToastAndroid.showWithGravity(
      'First Name cannot be empty, contain spaces, less than 3 characters and its first character must be in upper case!',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }

  function wrongLastName() {
    ToastAndroid.showWithGravity(
      'Last Name cannot be empty, contain spaces, less than 3 characters and its first character must be in upper case!',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }

  function wrongEmail() {
    ToastAndroid.showWithGravity(
      'Wrong Email Format',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }

  function wrongPhoneNumber() {
    ToastAndroid.showWithGravity(
      'Incorrect Phone Number',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }

  // -----------------------------------------------

  //------------validate first Name-----------------
  function validateFirstName(): boolean {
    let regex1 = /^[a-zA-Z ]*$/;
    let n = firstName;
    if (
      n.match(regex1) &&
      n.length !== 0 &&
      n[0] === n[0].toLocaleUpperCase() &&
      !n.includes(' ') &&
      n.length >= 3
    ) {
      // let c = n[0].toUpperCase()
      console.log(n);
      // userInfo[firstN] = n
      return true;
    } else {
      wrongFirstName();
      return false;
    }
  }

  //------------validate last Name-----------------
  function validateLastName(): boolean {
    let regex1 = /^[a-zA-Z ]*$/;
    let o = lastName;
    if (
      o.match(regex1) &&
      o.length !== 0 &&
      o[0] === o[0].toLocaleUpperCase() &&
      !o.includes(' ') &&
      o.length >= 3
    ) {
      // let c = n[0].toUpperCase()
      console.log(o);
      // userInfo[firstN] = n
      return true;
    } else {
      wrongLastName();
      return false;
    }
  }

  //------------validate email-----------------
  function validateEmail() {
    let regex2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let p = email;
    if (
      p.match(regex2)
    ) {
      // let c = n[0].toUpperCase()
      console.log(p);
      return true;
    } else {
      wrongEmail();
      return false;
    }
  }

  //-------------validate Phone Number---------------
  function validatePhoneNumber() {
    let regex3 = /[0]([7-9][0]|[8][0-1])[0-9]{8}/;
    let q = phoneNumber;
    if (q.match(regex3)) {
      console.log(q)
      return true;
    } else {
      wrongPhoneNumber();
      return false;
    }
  }

  //--------------GET ALL USER INFO-------------------
  function getInformation() {
    if(validateFirstName() && validateLastName() && validateEmail() && validatePhoneNumber()){
      let userData = {
        userFirstName: firstName,
        userLastName: lastName,
        userEmail: email,
        userPhoneNumber: phoneNumber
      }

      navigation.navigate('SignUpDetails', {
        fName: userData.userFirstName,
        lName: userData.userLastName,
        eMail: userData.userEmail,
        pNumber: userData.userPhoneNumber
      });
      console.log('The User Details', userData);
    }
  }

  function backtoHome(): any {
    navigation.navigate('LoginStack');
  }
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.iconView}>
          <Pressable onPress={() => navigation.navigate('SignUpScreenMain')}>
            <Ionicons
              size={30}
              name="arrow-back-outline"
              color={COLOR.blackColor}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.textView}>
            Please provide the following Information
          </Text>
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
              First Name
            </Text>
            <TextInput
              onChangeText={value => setFirstName(value)}
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
              Last Name
            </Text>
            <TextInput
            onChangeText={(value) => setLastName(value)}
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
              Email Address
            </Text>
            <TextInput
            onChangeText={(value) => setEmail(value)}
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
              Phone Number
            </Text>
            <TextInput
              onChangeText={value => setPhoneNumber(value)}
              placeholder=""
              style={{
                borderWidth: 1,
                borderColor: 'rgba(185, 185, 185, 0.4)',
                borderRadius: 10,
                marginTop: 4,
                paddingLeft: 10,
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <Pressable style={styles.pressable} onPress={getInformation}>
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

export default SignUpInformation;
