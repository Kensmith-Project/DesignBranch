import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GeneralStackScreenProps from '../props/GeneralStackScreenProps';
import {COLOR} from '../utils/Tools';

const PropertyType: React.FC<GeneralStackScreenProps> = ({
  route,
  navigation,
}) => {
  //state
  const [borderColorOne, setBorderColorOne] = React.useState<string>('#B9B9B9');
  const [borderColorTwo, setBorderColorTwo] = React.useState<string>('#B9B9B9');
  const [borderColorThree, setBorderColorThree] =
    React.useState<string>('#B9B9B9');

  function setColorOne() {
    setBorderColorOne('#198619');
    setBorderColorTwo('#B9B9B9');
    setBorderColorThree('#B9B9B9');
  }

  function setColorTwo() {
    setBorderColorOne('#B9B9B9');
    setBorderColorTwo('#198619');
    setBorderColorThree('#B9B9B9');
  }

  function setColorThree() {
    setBorderColorOne('#B9B9B9');
    setBorderColorTwo('#B9B9B9');
    setBorderColorThree('#198619');
  }

  function moveToProCategory() {
    navigation?.navigate("ProCategory")
  }

  function moveToProDes() {
    navigation?.navigate("ProDes")
  }
  return (
    <View
      style={{
        backgroundColor: COLOR.baseColorPrimary,
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View style={styles.topContainer}>
        <Pressable onPress={moveToProCategory}>
          <Ionicons
            size={30}
            name="arrow-back-outline"
            color={COLOR.blackColor}
          />
        </Pressable>

        <View style={{marginTop: 44}}>
          <Text
            style={{
              fontFamily: 'Nunito',
              fontSize: 24,
              fontWeight: '600',
              lineHeight: 22,
              paddingBottom: 34,
              color: COLOR.blackColor,
            }}>
            This will only take a few moments
          </Text>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                lineHeight: 27,
                color: '#3A3A3A',
                marginBottom: 16,
                fontFamily: 'Nunito',
              }}>
              Please select one
            </Text>
            <Pressable
              style={{
                borderColor: borderColorOne,
                borderWidth: 1,
                paddingLeft: 17,
                paddingTop: 17,
                paddingBottom: 16,
                marginTop: 10,
                borderRadius: 20,
              }}
              onPress={setColorOne}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  lineHeight: 27,
                  color: '#3A3A3A',
                  fontFamily: 'Nunito',
                }}>
                Are you a Landlord?
              </Text>
            </Pressable>

            <Pressable
              style={{
                borderColor: borderColorTwo,
                borderWidth: 1,
                paddingLeft: 17,
                paddingTop: 17,
                paddingBottom: 16,
                marginTop: 10,
                borderRadius: 20,
              }}
              onPress={setColorTwo}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  lineHeight: 27,
                  color: '#3A3A3A',
                  fontFamily: 'Nunito',
                }}>
                Are you an Agent?
              </Text>
            </Pressable>

            <Pressable
              style={{
                borderColor: borderColorThree,
                borderWidth: 1,
                paddingLeft: 17,
                paddingTop: 17,
                paddingBottom: 16,
                marginTop: 10,
                borderRadius: 20,
              }}
              onPress={setColorThree}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  lineHeight: 27,
                  color: '#3A3A3A',
                  fontFamily: 'Nunito',
                }}>
                Are you a Tenant/Buyer?
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
        onPress={moveToProDes}
          style={{
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: '#198619',
            height: 54,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: COLOR.baseColorPrimary,
              fontFamily: 'Kanit',
              fontSize: 26,
              fontWeight: '500',
            }}>
            Contuine
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
});

export default PropertyType;
