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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utils/Tools';

const Contact: React.FC<any> = ({route, navigation}) => {
  const [name, setName] = useState<string>('Flora');

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
          <Text
            style={{
              textAlign: 'center',
              marginTop: -30,
              fontSize: 20,
              fontWeight: '600',
              fontStyle: 'normal',
              color: '#3A3A3A',
              fontFamily: '',
            }}>
            Contact
          </Text>
        </View>
        <View>
          <Text style={styles.textView}>
            For enquiries and complaints, please contact us via any of our
            channels below.
          </Text>
        </View>
        <Image source={require('../images/LineMain.png')} />
        <Pressable
          style={{
            marginTop: 41,
            paddingLeft: 38,
            paddingRight: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../images/HeadPhones.png')} />
            <Text style={{marginLeft: 27}}>01-2712005-7</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#198619',
              alignItems: 'center',
              borderRadius: 7,
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: '#198619',
                paddingLeft: 14,
                paddingTop: 3,
                paddingBottom: 3,
                paddingRight: 14,
              }}>
              Call
            </Text>
          </View>
        </Pressable>
        <Image source={require('../images/LineMain.png')} />
        <Pressable
          style={{
            marginTop: 41,
            paddingLeft: 38,
            paddingRight: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../images/Email.png')} />
            <Text style={{marginLeft: 27}}>contactcentre@homezone.com</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#198619',
              alignItems: 'center',
              borderRadius: 7,
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: '#198619',
                paddingLeft: 14,
                paddingTop: 3,
                paddingBottom: 3,
                paddingRight: 14,
                fontFamily: 'Inter'
              }}>
              Email
            </Text>
          </View>
        </Pressable>
        <Image source={require('../images/LineMain.png')} />
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
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'justify',
    marginLeft: 30,
    marginTop: 53,
    marginRight: 26,
    marginBottom: 30,
    fontStyle: 'normal',
    fontFamily: 'Nunito',
    color: '#575757',
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

export default Contact;
