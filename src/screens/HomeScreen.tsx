import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ListRenderItemInfo,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import FilterModal, {FilterOptions} from '../Components/modals/FilterModal';

const HomeScreen: React.FC<GeneralStackScreenProps> = () => {
  // State
  const [selectedLanguage, setSelectedLanguage] = React.useState('Lagos');
  const [value, setValue] = React.useState('Lagos');
  const [open, setOpen] = React.useState<boolean>(false);
  const [filterOpen, setFilterOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  let testProperties: Property[] = [
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
    propertyData,
  ];

  const renderItem = ({item}: ListRenderItemInfo<Property>) => {
    return <PropertyCard property={item} />;
  };

  const handlePress = () => {
    setOpen(true);
  };

  const handleClose = () => {
    //setValue(selectedLanguage);
    setOpen(false);
  };

  const handleValueChange = (itemValue: unknown, itemIndex: number) => {
    setSelectedLanguage(itemValue as string);
  };

  const handleFilterPress = () => {
    setFilterOpen(true);
  };
  const handleFilterClose = () => {
    setFilterOpen(false);
  };
  const handleFilterStateChange = (state: FilterOptions) => {
    console.log(state);
  };

  const renderLabel = () => {
    return (
      <View>
        {/** Location, Search and Filter */}
        <View style={styles.topContainer}>
          {/** Location */}
          {/* <View style={styles.locationContainer}>
            Location Icon
            <EntypoIcon
                            name='location-pin'
                            size={28}
                            color="#91EA91"
                        /> 

            Location Texts
            <View>
              <Text style={{ fontSize: 12 }}>Location</Text>
              <View style={styles.location}>
                <Text style={styles.locationText}>{selectedLanguage}</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
                  <AntDeisgnIcon
                    name="caretdown"
                    size={14}
                    style={styles.arrow}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View> */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={{marginRight: 22.3}}
              onPress={() => Alert.alert('Menu button pressed')}>
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
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FilterModal
          visible={filterOpen}
          onClose={handleFilterClose}
          onStateChange={handleFilterStateChange}
        />
        <BasePicker
          visible={open}
          onClose={handleClose}
          selectedValue={selectedLanguage}
          items={toPickerItem(Object.values(Cities))}
          onValueChange={handleValueChange}
        />
        {renderLabel()}
        <FlatList
          data={testProperties}
          renderItem={renderItem}
          keyExtractor={(item, index) => index + 'w'}
        />
      </View>
    </View>
  );
};

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

export default HomeScreen;
