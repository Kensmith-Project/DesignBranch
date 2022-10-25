import React, {useState} from 'react';
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
import {Checkbox} from 'react-native-paper';

const PropertySelectLocation: React.FC<any> = ({route, navigation}) => {
  const countries = ['Lagos', 'Rivers', 'Oyo', 'Imo', 'Anambra'];
  const [eKitchen, setEKitchen] = useState<any>('unchecked');
  const [gym, setGym] = useState<any>('unchecked');
  const [wMachine, setMachine] = useState<any>('unchecked')

  //Function to activate eKitchen check box
  function eKitchenPressed(){
    if(eKitchen === "unchecked" ){
      setEKitchen("checked");
      // setGym("unchecked");
    }else {
      setEKitchen("unchecked");
    }
    
  }

  //Function to activate gym check box
  function gymPressed(){
    if(gym === "unchecked" ){
      setGym("checked");
    }else {
      setGym("unchecked");
    }
    
  }

  //Function to activate wMachine check box
  function wMachinePressed(){
    if(wMachine === "unchecked" ){
      setMachine("checked");
    }else {
      setMachine("unchecked");
    }
    
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
          // onPress={}
        >
          <Ionicons
            size={30}
            name="arrow-back-outline"
            color={COLOR.blackColor}
          />
        </Pressable>
        <Text style={styles.topText}>Property Location</Text>
      </View>
      <Progress.Bar color={COLOR.baseTextColor} progress={1} width={null} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.secondContainer}>
          <Text style={styles.textFirst}>Step 5/5</Text>
          <Text style={styles.textFirstI}>
            Please select the amenities available in your property.
          </Text>

          <View>
            <View style={styles.viewCon}>
              <Text style={styles.text}>Indoor Details</Text>
              <View style={styles.viewThird}>
                <View style={styles.viewThirdInside}>
                <Pressable onPress={eKitchenPressed}>
                    <Checkbox status={eKitchen} />
                  </Pressable>
                  <Text>Equpped Kitchen</Text>
                </View>
                <View style={styles.viewThirdInside}>
                  <Pressable onPress={gymPressed}>
                    <Checkbox status={gym} />
                  </Pressable>
                  <Text>Gym</Text>
                </View>
                <View style={styles.viewThirdInside}>
                <Pressable onPress={wMachinePressed}>
                    <Checkbox status={wMachine} />
                  </Pressable>
                  <Text>Wahing Machine</Text>
                </View>
              </View>
            </View>

            <View style={styles.viewCon}>
              <Text style={styles.text}>Outdoor Details</Text>
              <View style={styles.viewThird}>
                <View style={styles.viewThirdInside}>
                <Pressable >
                    {/* <Checkbox status={status} /> */}
                  </Pressable>
                  <Text>Pool</Text>
                </View>
                <View style={styles.viewThirdInside}>
                <Pressable >
                    {/* <Checkbox status={status} /> */}
                  </Pressable>
                  <Text>Backyard</Text>
                </View>
                <View style={styles.viewThirdInside}>
                <Pressable >
                    {/* <Checkbox status={status} /> */}
                  </Pressable>
                  <Text>Children’s Playground</Text>
                </View>
              </View>
            </View>

            <View style={styles.viewCon}>
              <Text style={styles.text}>Utilities</Text>
              <View style={styles.viewThird}>
                <View style={styles.viewThirdInside}>
                <Pressable >
                    {/* <Checkbox status={status} /> */}
                  </Pressable>
                  <Text>24hr Electricity</Text>
                </View>
                <View style={styles.viewThirdInside}>
                <Pressable >
                    {/* <Checkbox status={status} /> */}
                  </Pressable>
                  <Text>Air Conditioner</Text>
                </View>
                <View style={styles.viewThirdInside}>
                <Pressable >
                    {/* <Chec kbox status={status} /> */}
                  </Pressable>
                  <Text>Water</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.bottomText}>
                Input Additional Amenities not Listed (optional)
              </Text>
              <TextInput style={styles.desTextInput} placeholder="" />
            </View>

            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Submit</Text>
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
    height: 90,
    marginBottom: 20,
  },
  secondContainer: {
    padding: 22,
    justifyContent: 'space-between',
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
    color: "#000000"
  },
  textFirstI: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 25,
    color: '#000000'
  },
  viewThird: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewThirdInside: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewCon: {
    paddingBottom: 40,
  },
  bottomText: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 15,
  },
});

export default PropertySelectLocation;
