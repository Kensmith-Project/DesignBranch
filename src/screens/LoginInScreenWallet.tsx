import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utils/Tools';

const LoginScreenWallet: React.FC<any> = ({route, navigation}) => {
  const [name, setName] = useState<string>('Flora');

  function backtoHome(): any {
    // navigation.navigate('LoginStack');
  }

  function toSignUpScreen(){
      navigation.navigate('SignUpScreenMain');
  }
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.iconView}>
          <Pressable 
          // onPress={() => navigation.navigate('Home')}
          >
            <Ionicons
              size={30}
              name="arrow-back-outline"
              color={COLOR.blackColor}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.textView}>Welcome back {name},</Text>
        </View>
        <View>
          <Text style={styles.text}>Username</Text>
          <TextInput placeholder="" style={styles.textInput} />
        </View>
        <View>
          <Text style={styles.textTwo}>Password</Text>
          <TextInput placeholder="" style={styles.textInput} />
          <Text style={styles.fPass} onPress={() => Alert.alert('To Signup screen')}>Forgot Password</Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate('WalletHome')}>
          <Text style={styles.pressableText}>Log in</Text>
        </Pressable>
        <Text style={styles.baseText}>
          New to HomeZone?{' '}
          <Text style={styles.baseTextInner} onPress={toSignUpScreen}>Create an Account</Text>
        </Text>
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
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLOR.baseFont,
    marginBottom: 45,
    // fontFamily: Lora_400Regular,
  },
  textInput: {
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    borderColor: 'rgba(185, 185, 185, 0.4)'
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#3A3A3A',
    marginBottom: 4,
    fontStyle: 'normal'
  },
  textTwo: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '400',
    color: '#3A3A3A',
    marginTop: 30,
    fontStyle: 'normal'
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
    fontSize: 20
  },
  pressableText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 26,
  },
});

export default LoginScreenWallet;
