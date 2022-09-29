import React from 'react';
import {
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

const PropertyDescriptionScreen: React.FC<any> = ({route, navigation}) => {

  function moveToProType() {
    navigation?.navigate("ProType")
  }

  function moveToProImage() {
    navigation?.navigate("ProImage")
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Pressable
          style={styles.icon}
          onPress={moveToProType}
        >
          <Ionicons
            size={30}
            name="arrow-back-outline"
            color={COLOR.blackColor}
          />
        </Pressable>
        <Text style={styles.topText}>Property Description</Text>
      </View>
      <Progress.Bar color={COLOR.baseTextColor} progress={0.2} width={null} />
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style={styles.secondContainer}>
          <Text>Step 1/5</Text>

          <View>
            <View>
              <Text style={styles.text}>Title</Text>
              <TextInput
                style={styles.textInput}
                placeholder="E.g 1 bedroon flat, Mini-flat, Duplex, Land"
              />
            </View>

            <View>
              <Text style={styles.text}>Description</Text>
              <TextInput
                style={styles.desTextInput}
                placeholder="E.g Newly built 3 bedroom flat with all rooms ensuite"
              />
            </View>

            <View>
              <Text style={styles.text}>Price</Text>
              <TextInput
                style={styles.textInput}
                placeholder="E.g 1 bedroon flat, Mini-flat, Duplex, Land"
              />
            </View>

            <View>
              <Text style={styles.text}>
                What duration does the price cover
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="E.g 1 bedroon flat, Mini-flat, Duplex, Land"
              />
            </View>

            <Pressable onPress={moveToProImage} style={styles.btn}>
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
  textInput: {
    borderWidth: 1,
    borderColor: '#B9B9B9',
    borderRadius: 10,
    marginBottom: 40,
  },
  desTextInput: {
    borderWidth: 1,
    borderColor: '#B9B9B9',
    borderRadius: 10,
    height: 152,
    marginBottom: 40,
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
    fontSize: 26,
    fontWeight: "500",
    lineHeight: 29
  }
});

export default PropertyDescriptionScreen;
