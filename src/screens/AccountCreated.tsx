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
import Ionicons from 'react-native-vector-icons/Ionicons'
const AccountCreated: React.FC<any> = ({route, navigation}) => {
  const [name, setName] = useState<string>('Flora');

  function backtoHome(): any {
    navigation.navigate('LoginStack');
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Ionicons name='checkmark-circle' size={300} color='#198619'/>
        {/* <Image source={require('../images/')}/> */}
        <Text style={styles.success}>Success!</Text>
        <Text style={styles.successText}>Your HomeZone Account has been created</Text>
      </View>
      <View>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.pressableText}>Contuine to Home Zone</Text>
        </Pressable>
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
  pressableText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 26,
  },
  success: {
    color: '#198619',
    fontWeight: '700',
    fontSize: 30
  },
  successText: {
    color: '#3A3A3A',
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal'
  },
  innerContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 125
  }
});

export default AccountCreated;
