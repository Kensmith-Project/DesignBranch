import { ParamListBase } from '@react-navigation/native'
import { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Pressable, Text, TouchableOpacity, Alert } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  FlatList,
  StyleSheet,
  
} from 'react-native';

import PropertyCard from '../Components/PropertyCard';
import propertyData from '../mockData/propertyData';
import GeneralStackScreenProps from '../props/GeneralStackScreenProps';
import {Property} from '../types/property';
import {Cities} from '../types/cities';
import {Picker} from '@react-native-picker/picker';
import BasePicker from '../Components/elements/BasePicker';
import {toPickerItem} from '../utils/GeneralUtils';
import AntDeisgnIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {getStatusBarHeight} from 'react-native-status-bar-height';
import FilterModal, {FilterOptions} from '../Components/modals/FilterModal';
import { DrawerHeaderProps } from '@react-navigation/drawer';

export interface CustomHomeScreenHeaderProps  {
    navigation?: any;

}


const CustomHomeScreenHeader =(props: CustomHomeScreenHeaderProps) => {

    const [selectedLanguage, setSelectedLanguage] = React.useState('Lagos');
  const [value, setValue] = React.useState('Lagos');
  const [open, setOpen] = React.useState<boolean>(false);
  const [filterOpen, setFilterOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const handleFilterPress = () => {
    setFilterOpen(true);
  };

  const onChangeSearch = (query:string) => setSearchQuery(query);
   
        return (
          <View>
           
            <View style={styles.topContainer}>
             
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable
                  style={{marginRight: 22.3}}
                  onPress={() => props.navigation.toggleDrawer()}>
                  <Ionicons name="menu-outline" color={'#000000'} size={40} />
                </Pressable>
    
                <Searchbar
                  style={{
                    width: 200,
                    backgroundColor: '#C4C4C4',
                    paddingTop: 1,
                    height: 40,
                    borderRadius: 20,
                  }}
                  placeholder="Search"
                  placeholderTextColor={'#3A3A3A'}
                  onChangeText={onChangeSearch}
                  value={searchQuery}
                />
              </View>
    
              {/** Search and Filter */}
              <View style={styles.searchFilterContainer}>
                <Text style={styles.textTitleMain}>Filter</Text>
                <TouchableOpacity onPress={handleFilterPress}>
                  <AntDeisgnIcon name="caretdown" size={14} style={styles.arrow} />
                  {/* <Ionicons name='filter-sharp' size={18}/> */}
                </TouchableOpacity>
              </View>
            </View>
    
            <View
              style={{
                marginTop: 32,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 11,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  lineHeight: 27,
                  color: '#000000',
                }}>
                Recommened
              </Text>
                <Pressable onPress={() => Alert.alert("Cart button pressed")} style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="cart-outline" size={24} color={'#000000'} />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      lineHeight: 24,
                      marginLeft: 5,
                    }}>
                    My Cart
                  </Text>
                </Pressable>
            </View>
          </View>
        );
      
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 10,
    },
  
    content: {
      marginTop: getStatusBarHeight(true),
    },
  
    textTitleMain: {
      marginRight: 10,
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
    },
  
    title: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 5,
      fontWeight: '600',
    },
  
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: 10,
    },
  
    locationContainer: {
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
  
    locationText: {
      fontSize: 17,
      fontWeight: '600',
      marginRight: 10,
    },
  
    location: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    searchFilterContainer: {
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    arrow: {
      borderRadius: 50,
      padding: 2,
      elevation: 8,
      shadowColor: 'rgba(185, 185, 185, 0.2)',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      borderWidth: 1,
      borderColor: 'rgba(185, 185, 185, 0.2)',
      borderStyle: 'solid',
      textAlign: 'center',
    },
  });
  

export default CustomHomeScreenHeader