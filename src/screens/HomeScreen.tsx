import React, {useEffect} from 'react';
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
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import PropertyCard from '../Components/PropertyCard';
import propertyData from '../mockData/propertyData';
import GeneralStackScreenProps from '../props/GeneralStackScreenProps';
import {Property} from '../types/property';
import {Cities} from '../types/cities';
import {Picker} from '@react-native-picker/picker';
import BasePicker from '../Components/elements/BasePicker';
import {formatAmount} from '../utils/GeneralUtils';
import {toPickerItem} from '../utils/GeneralUtils';
import AntDeisgnIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import FilterModal, {FilterOptions} from '../Components/modals/FilterModal';
import {NavigationContainer} from '@react-navigation/native';
import { dataDummy} from '../mockData/data';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

interface Props {
  navigation: any;
}

const HomeScreen = (prop: Props) => {
  // State
  const [selectedLanguage, setSelectedLanguage] = React.useState('Lagos');
  const [value, setValue] = React.useState('Lagos');
  const [open, setOpen] = React.useState<boolean>(false);
  const [filterOpen, setFilterOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [propertyDataMain, setProperty] = React.useState<Property[]>([])
  
  console.log('meeeeee', JSON.stringify(propertyDataMain, null, 2));
  console.log('newwwww', propertyDataMain)

  const url: string =
    'https://homezonebackend.accessbankplc.com:6060/api/Properties?PageNumber=1&PageSize=10';

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache'
            }
          })
          .then(response => response.json())
          .then(data => {
              // let newArr = [...data];
              // console.log(data)
              setProperty(data)
              // console.log("dddddd", data)
          }).catch((err) => {
            //handle error
            console.log("main err")
            console.log(err);
         });
  }, []);

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
              onPress={() => prop.navigation.toggleDrawer()}>
              <Ionicons name="menu-outline" color={'#000000'} size={40} />
            </Pressable>

            <Searchbar
              style={{
                width: 200,
                backgroundColor: 'rgba(196, 196, 196, 0.3)',
                opacity: 30,
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
              <AntDeisgnIcon
                name="caretdown"
                size={14}
                style={styles.arrow}
                color={'black'}
              />
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
            Recommend
          </Text>
          {/* <Pressable onPress={() => Alert.alert("Cart button pressed")} style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="cart-outline" size={24} color={'#000000'} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 24,
                  marginLeft: 5,
                  color: '#000000'
                }}>
                My Cart
              </Text>
            </Pressable> */}

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                marginRight: 4,
                color: '#198619',
              }}>
              Swipe
            </Text>
            <Image
              style={{width: 10, height: 10}}
              source={require('../images/arrow.png')}
            />
            {/* <Ionicons name='chevron-forward-outline' size={20} color={'#198619'}/>
              <Ionicons name='chevron-forward-outline' size={20} color={'#198619'}/> */}
          </View>
        </View>
      </View>
    );
  };

  
  const mapProperdata = () => {
    return propertyDataMain.map((propertyDataMain, index) => {
      return (
        <View key={index}>
          <Pressable
            // onPress={() => prop.navigation.navigate('Property')}
            style={{marginRight: 20, width: '100%'}}>
              {/* {propertyDataMain.attachments?.map((image: any, index: any) => {
                
              })} */}
            
            <Image
            source={{}}
                // source={propertyDataMain.attachments?[0].imageUrl}
                style={{height: 170, width: '100%', borderRadius: 10}}
              />
            <View style={styles.card}>
              <View style={styles.statAndPrice}>
                {/** Bathrooms, Bedrooms, Size */}
                <Text style={styles.title}>{propertyDataMain.title}</Text>
                <Text> </Text>
                <View>
                  <Text>
                    <Text style={{color: '#3A3A3A'}}>₦</Text>

                    <Text style={styles.price}>
                      {formatAmount(propertyDataMain.price.toString())}
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../images/map.png')} />
                <Text style={styles.location}>
                  {propertyDataMain.city}, {propertyDataMain.state}
                </Text>
              </View>

              <View style={{marginTop: 12}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginRight: 11,
                        alignItems: 'center',
                      }}>
                      <Pressable style={{marginRight: 4}}>
                        <Ionicons name="heart" size={20} color={'#198619'} />
                      </Pressable>
                      <Text>{propertyDataMain.likes}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        style={{marginRight: 4}}
                        source={require('../images/eye.png')}
                      />
                      <Text>{propertyDataMain.view}</Text>
                    </View>
                  </View>
                  <View>
                    <View style={styles.status}>
                      <Text style={styles.statusText}>For {'Sale'}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              source={require('../images/nextgroup.png')}
              style={{position: 'absolute', right: -10, top: 70}}
            />
          </Pressable>
        </View>
      );
    });
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
        <ScrollView
          style={{height: 380}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {mapProperdata()}
        </ScrollView>
        
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            lineHeight: 27,
            color: '#000000',
            marginBottom: 11,
          }}>
          Additional Listings
        </Text>
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
    color: '#000000',
  },

  title: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
    fontWeight: '600',
    color: '#000000',
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
    color: '#3A3A3A',
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

  imageContainer: {
    height: 180,
    width: '100%',
    padding: 0,
  },

  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },

  cardOuter: {
    //backgroundColor: 'yellow',
    padding: 5,
    position: 'relative',
    top: '-25%',
    marginBottom: '-15%',
  },

  card: {
    width: '95%',
    elevation: 8,
    shadowColor: 'rgba(185, 185, 185, 0.2)',
    shadowOpacity: 1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(185, 185, 185, 0.2)',
    borderStyle: 'solid',
    backgroundColor: 'white',
    padding: 10,
    marginTop: -55,
    borderRadius: 10,
    alignSelf: 'center',
  },

  statAndPrice: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 4,
  },

  status: {
    backgroundColor: '#198619',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  statusText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    color: '#ffffff',
    textTransform: 'uppercase',
  },

  priceLabel: {
    textAlign: 'right',
    color: '#B9B9B9',
    fontWeight: '600',
  },

  price: {
    fontWeight: '700',
    fontSize: 15,
    color: '#3A3A3A',
  },

  info: {
    lineHeight: 21,
    marginTop: 6,
    fontWeight: '600',
    fontSize: 15.5,
    color: 'green',
  },
});

export default HomeScreen;
