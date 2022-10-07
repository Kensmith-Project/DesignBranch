import React, {useState} from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utils/Tools';

const LoginScreenMain: React.FC<any> = ({route, navigation}) => {
  const [name, setName] = useState<string>('Ekene');

  function backtoHome(): any {
    navigation.navigate('LoginStack');
  }
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.iconView}>
          <Pressable onPress={backtoHome}>
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
            <TextInput placeholder='' style={styles.textInput}/>
        </View>
        <View>
            <Text style={styles.textTwo}>Password</Text>
            <TextInput placeholder='' style={styles.textInput}/>
            <Text style={styles.fPass}>Forget Password</Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>Log in</Text>
        </Pressable>
        <Text style={styles.baseText}>New to HomeZone? <Text style={styles.baseTextInner}>Create an Account</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  iconView: {
    marginLeft: 30,
    marginTop: 10,
  },
  textView: {
    marginLeft: 30,
    marginTop: 34,
    fontSize: 30,
    fontWeight: '700',
    color: COLOR.baseColorTetiary,
    marginBottom: 45
  },
  textInput: {
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    marginBottom: 4
  },
  textTwo: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    marginTop: 30
  },
  fPass: {
    marginLeft: 20,
    color: '#198619',
    marginTop: 16,
    fontSize: 18,
    fontWeight: '400'
  },
  pressable: {
    backgroundColor: '#198619',
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
baseText: {
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
    color: '#198619'
},
baseTextInner: {
    fontWeight: '600'
},
pressableText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 26
}
});

export default LoginScreenMain;
