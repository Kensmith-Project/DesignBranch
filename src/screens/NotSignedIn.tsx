import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

const NotSignedIn: React.FC<any> = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View style={{alignItems: 'center', marginTop: 70}}>
        <Image source={require('../images/Group90.png')} />
        <Text
          style={{
            color: '#3A3A3A',
            fontSize: 18,
            fontStyle: 'normal',
            marginLeft: 27,
            marginRight: 26,
            textAlign: 'center',
            marginTop: 30,
          }}>
          Seems you are not signed in yet. Please login or create an account to
          access your wallet.
        </Text>
      </View>
      <View
        style={{
          marginBottom: 30,
          marginLeft: 12,
          marginRight: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Pressable
        onPress={() => navigation.navigate('SignUpWallet')}
          style={{
            width: 190,
            borderColor: '#198619',
            borderWidth: 1,
            alignItems: 'center',
            borderRadius: 7,
          }}>
          <Text
            style={{
              color: '#198619',
              fontWeight: '500',
              fontSize: 24,
              fontStyle: 'normal',
              fontFamily: 'kanit',
              marginTop: 7,
              marginBottom: 7,
              marginLeft: 10.16,
              marginRight: 9.6,
            }}>
            Create Account
          </Text>
        </Pressable>
        <Pressable
        onPress={() => navigation.navigate('LogInWallet')}
          style={{
            width: 170,
            borderColor: '#198619',
            borderWidth: 1,
            alignItems: 'center',
            borderRadius: 7,
            backgroundColor: '#198619',
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontWeight: '500',
              fontSize: 24,
              fontStyle: 'normal',
              fontFamily: 'kanit',
              marginTop: 7,
              marginBottom: 7,
              marginLeft: 6.2,
              marginRight: 6.3,
            }}>
            Log In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NotSignedIn;
