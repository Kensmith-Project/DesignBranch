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

const PropertyDetailScreen: React.FC<any> = ({route, navigation}) => {
  const countries = ['Lagos', 'Rivers', 'Oyo', 'Imo', 'Anambra'];

  function moveToProLocation() {
    navigation?.navigate("ProLocation")
  }

  function moveToProSelectLocation() {
    navigation?.navigate("ProSelectLocation")
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
          onPress={moveToProLocation}
        >
          <Ionicons
            size={30}
            name="arrow-back-outline"
            color={COLOR.blackColor}
          />
        </Pressable>
        <Text style={styles.topText}>Property Details</Text>
      </View>
      <Progress.Bar color={COLOR.baseTextColor} progress={0.8} width={null} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.secondContainer}>
          <Text style={styles.textFirst}>Step 4/5</Text>

          <View>
            <View>
              <Text style={styles.text}>Size in ft</Text>
              <TextInput
                style={styles.desTextInput}
                placeholder="E.g 3000, 2000"
              />
            </View>

            <View>
              <Text style={styles.text}>Bedrooms</Text>
              <TextInput
                style={styles.textInput}
                placeholder="E.g 4, 5"
              />
            </View>

            <View>
              <Text style={styles.text}>State</Text>
              <SelectDropdown
                renderDropdownIcon={icon}
                data={countries}
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

            <Pressable onPress={moveToProSelectLocation} style={styles.btn}>
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
    // height: 80,
    marginBottom: 20,
  },
  secondContainer: {
    padding: 22,
    justifyContent: "space-between"
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
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 29,
  },
  textFirst: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 22,
  },
});

export default PropertyDetailScreen;
