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
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utils/Tools';

const SignUpScreenMain: React.FC<any> = ({route, navigation}) => {
  const secondTitle = 'Please Select One';
  

  const [landlord, setLandlord] = useState<any>('unchecked');
  const [agent, setAgent] = useState<any>('unchecked');
  const [buyer, setBuyer] = useState<any>('unchecked');

  let type: string = ''

  const [color, setColor] = useState<string>('#198619')
  const [borderColor, setBColor] = useState<string>('rgba(185, 185, 185, 0.4)')


  function onPresslandlord() {
    if (landlord === 'unchecked') {
      setLandlord('checked');
      type = '0'
      console.log(type)
    } else {
      setLandlord('unchecked');
      type = ''
    }
  }

  function onPressAgent() {
    if (agent === 'unchecked') {
      setAgent('checked');
      type = '1'
      console.log(type)
    } else {
      setAgent('unchecked');
      type = ''
    }
  }

  function onPressBuyer() {
    if (buyer === 'unchecked') {
      setBuyer('checked');
      type = '2'
      console.log(type)
    } else {
      setBuyer('unchecked');
      type = ''
    }
  }
  

  function backtoHome(): any {
    navigation.navigate('LoginStack');
  }
  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.iconView}>
          <Pressable onPress={() => navigation.navigate('LoginScreenMain')}>
            <Ionicons
              size={30}
              name="arrow-back-outline"
              color={COLOR.blackColor}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.textView}>This will only take a few moments</Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 22,
              fontWeight: '400',
              fontSize: 20,
              fontFamily: 'Nunito',
              fontStyle: 'normal',
              marginBottom: 16,
              color: '#3A3A3A',
            }}>
            {secondTitle}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: borderColor,
            borderRadius: 10,
            marginBottom: 30,
            marginLeft: 22,
            marginRight: 22,
          }}>
          <Pressable onPress={onPresslandlord}>
            <View
              style={{
                marginLeft: 22,
                marginTop: 15,
                marginBottom: 15,
                marginRight: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Checkbox color={color} status={landlord} />
              <Text style={{fontSize: 20, fontWeight: '700', fontStyle: 'normal'}}>Are you a landlord?</Text>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: borderColor,
            borderRadius: 10,
            marginBottom: 30,
            marginLeft: 22,
            marginRight: 22,
          }}>
          <Pressable 
          onPress={onPressAgent}
          >
            <View
              style={{
                marginLeft: 22,
                marginTop: 15,
                marginBottom: 15,
                marginRight: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Checkbox color={color} 
              status={agent} 
              />
              <Text style={{fontSize: 20, fontWeight: '700', fontStyle: 'normal'}}>Are you an Agent?</Text>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: borderColor,
            borderRadius: 10,
            marginBottom: 30,
            marginLeft: 22,
            marginRight: 22,
          }}>
          <Pressable 
          onPress={onPressBuyer}
          >
            <View
              style={{
                marginLeft: 22,
                marginTop: 15,
                marginBottom: 15,
                marginRight: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Checkbox color={color} status={buyer} />
              <Text style={{fontSize: 20, fontWeight: '700', fontStyle: 'normal'}}>Are you a Tenant/Buyer?</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate('SignUpInfo')}>
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
    marginBottom: 45,
    fontFamily: 'Lora',
    paddingRight: 81,
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
    marginBottom: 40,
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

export default SignUpScreenMain;
