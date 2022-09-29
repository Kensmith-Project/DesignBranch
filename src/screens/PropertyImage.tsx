import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {COLOR} from '../utils/Tools';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

const PropertyImageScreen: React.FC<any> = ({route, navigation}) => {

  function moveToProDes() {
    navigation?.navigate("ProDes")
  }

  function moveToProLocation() {
    navigation?.navigate("ProLocation")
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Pressable
          style={styles.icon}
          onPress={moveToProDes}
        >
          <Ionicons
            size={30}
            name="arrow-back-outline"
            color={COLOR.blackColor}
          />
        </Pressable>
        <Text style={styles.topText}>Property Image</Text>
      </View>
      <Progress.Bar color={COLOR.baseTextColor} progress={0.4} width={null} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.secondContainer}>
          <Text style={styles.textFirst}>Step 2/5</Text>

          <View>
            <Text style={styles.textSecond}>Please Upload your property picture</Text>
            <View style={styles.uploadView}>
              <Pressable style={styles.btnUpload}>
                <Image source={require('../images/Vectorf.png')} />
                <Text>Select Photos</Text>
              </Pressable>
            </View>
            <View>
              <View style={styles.viewCon}>
                <Image style={styles.image} source={require('../images/dot.png')} />
                <Text style={styles.textT}>At least, one (1) image is required for a valid submission</Text>
              </View>
              <View style={styles.viewCon}>
                <Image style={styles.image} source={require('../images/dot.png')} />
                <Text style={styles.textT}>Your first selected photo will be displayed on the homepage</Text>
              </View>
              <View style={styles.viewCon}>
                <Image style={styles.image} source={require('../images/dot.png')} />
                <Text style={styles.textT}>You can select as many photos as required.</Text>
              </View>
              <View style={styles.viewCon}>
                <Image style={styles.image} source={require('../images/dot.png')} />
                <Text style={styles.textT}>Maximum size is 500/500px.</Text>
              </View>
              <View style={styles.viewCon}>
                <Image style={styles.image} source={require('../images/dot.png')} />
                <Text style={styles.textT}>Images might take longer to be processed.</Text>
              </View>
            </View>
            <Pressable onPress={moveToProLocation} style={styles.btn}>
              <Text style={styles.btnText}>Next Step</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR.baseColorPrimary,
    flex: 1,
    justifyContent: "space-between"
  },
  topContainer: {
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    // marginRight: 40
  },
  topText: {
    alignSelf: 'center',
    marginLeft: 40,
    color: COLOR.baseTextColor,
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 31,
    fontFamily: 'Lora',
  },
  uploadView: {
    borderWidth: 1,
    borderColor: COLOR.baseTextColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 42,
  },
  btnUpload: {
    alignItems: 'center',
  },
  secondContainer: {
    padding: 22,
  },
  btn: {
    marginTop: 20,
    height: 50,
    backgroundColor: COLOR.baseTextColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  viewCon: {
    flexDirection: "row",
    marginBottom: 11
  },
  text: {
    fontWeight: '800',
    fontSize: 20,
    fontStyle: 'normal',
    fontFamily: 'Nunito',
    marginBottom: 4,
    color: '#3A3A3A',
  },
  btnText: {
    color: COLOR.baseColorPrimary,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 29,
  },
  textT: {
    paddingLeft: 10
  },
  image: {
    marginTop: 5
  },
  textFirst: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 22
  },
  textSecond: {
    fontSize: 20,
  }
});

export default PropertyImageScreen;
