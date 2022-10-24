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
import SelectDropdown from 'react-native-select-dropdown';

const PropertyLocationScreen: React.FC<any> = ({route, navigation}) => {
  const states = ['Lagos', 'Rivers', 'Oyo', 'Imo', 'Anambra'];
  const countries = ['Nigeria', 'USA', 'Germany', 'Brazin', 'Japan'];

  function moveToProImage() {
    navigation?.navigate("ProImage")
  }

  function moveToProDetails() {
    navigation?.navigate("ProDetails")
  }

  function icon() {
    return (
      <View>
        <Ionicons name="chevron-down-outline" size={20} color={'black'} />
      </View>
    );
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Pressable
          style={styles.icon}
          onPress={moveToProImage}
        >
          <Ionicons
            size={30}
            name="arrow-back-outline"
            color={COLOR.blackColor}
          />
        </Pressable>
        <Text style={styles.topText}>Property Location</Text>
      </View>
      <Progress.Bar color={COLOR.baseTextColor} progress={0.6} width={null} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.secondContainer}>
          <Text style={styles.textFirst}>Step 3/5</Text>

          <View>
            <View>
              <Text style={styles.text}>Property Address</Text>
              <TextInput
                style={styles.desTextInput}
                placeholder="E.g 1 bedroon flat, Mini-flat, Duplex, Land"
                placeholderTextColor={'#000000'}
              />
            </View>

            <View>
              <Text style={styles.text}>City</Text>
              <TextInput
                style={styles.textInput}
                placeholder="E.g 1 bedroon flat, Mini-flat, Duplex, Land"
                placeholderTextColor={'#000000'}
              />
            </View>

            <View>
              <Text style={styles.text}>State</Text>
              <SelectDropdown
                renderDropdownIcon={icon}
                data={states}
                // search={true}
                buttonStyle={{backgroundColor: "white", borderWidth: 1, borderRadius: 10, width: "100%", borderColor: '#B9B9B9', marginBottom: 20}}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <View>
              <Text style={styles.text}>Country</Text>
              <SelectDropdown
                renderDropdownIcon={icon}
                data={countries}
                // search={true}
                buttonStyle={{backgroundColor: "white", borderWidth: 1, borderRadius: 10, width: "100%", borderColor: '#B9B9B9', marginBottom: 40}}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>

            <Pressable onPress={moveToProDetails} style={styles.btn}>
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
    marginBottom: 20,
  },
  desTextInput: {
    borderWidth: 1,
    borderColor: '#B9B9B9',
    borderRadius: 10,
    height: 80,
    marginBottom: 20,
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
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 29,
  },
  textFirst: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 22,
    color: '#000000'
  },
});

export default PropertyLocationScreen;
