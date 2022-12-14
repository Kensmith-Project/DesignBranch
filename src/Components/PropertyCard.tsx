import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Duration, Property} from '../types/property';
import {formatAmount} from '../utils/GeneralUtils';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Images
const propertyImage = require('../images/propertyImage2.jpg');

export interface PropertyCardProps {
  property: Property;
}
const PropertyCard: React.FC<PropertyCardProps> = ({property}) => {
  // Hooks
  const navigation = useNavigation<any>();

  // Handlers
  const handlePress = () => {
    // TODO
    navigation.navigate('Property', {property: property});
  };

  // Elements
  const statusAndPrice = (
    <View style={styles.statAndPrice}>
      {/** Bathrooms, Bedrooms, Size */}
      <Text style={styles.title}>{property.title}</Text>
      

      <View>
        <Text>
          <Text style={{color: '#3A3A3A'}}>₦</Text>
          <Text style={styles.price}>
            {formatAmount(property.price.toString())}
          </Text>
        </Text>
        {/* <Text style={styles.priceLabel}>
                    {
                        property.duration === Duration.Monthly ? 
                        ' per month' : 
                        ' per year'
                    }
                </Text> */}
      </View>
    </View>
  );

  const base = (
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginRight: 11, alignItems: 'center'}}>
          <Pressable style={{marginRight: 4}}>
            <Ionicons name="heart" size={20} color={'#198619'} />
          </Pressable>
          <Text>{property.likes}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{marginRight: 4}} source={require('../images/eye.png')}/>
            <Text>{property.view}</Text>
        </View>
      </View>
      <View>
        <View style={styles.status}>
                <Text style={styles.statusText}>
                    For {"Sale"}
                </Text>
            </View>
      </View>
    </View>
  );

  const card = (
    <View style={styles.card}>
      {/** Status and Price */}
      {statusAndPrice}

      {/** Title */}
      <View></View>

      {/** Location */}
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../images/map.png')} />
        <Text style={styles.location}>
          {property.city}, {property.state}
        </Text>
      </View>

      <View style={{marginTop: 12}}>
        {base}
        {/* <Text style={styles.info}>
          {property.bedrooms} Bed, {property.bathrooms} Bath, {property.size}{' '}
          square Ft
        </Text> */}
      </View>
    </View>
  );

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={handlePress}>
      {/** Image Background */}
      <View style={styles.imageContainer}>
        <Image source={propertyImage} style={styles.image} />
      </View>

      {/** Info card */}
      <View style={styles.cardOuter}>{card}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 8,
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
    elevation: 8,
    shadowColor: 'rgba(185, 185, 185, 0.2)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(185, 185, 185, 0.2)',
    borderStyle: 'solid',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
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
    fontSize: 18,
    color: '#3A3A3A',
  },

  title: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
    color: '#3A3A3A',
  },

  location: {
    lineHeight: 21,
    color: '#000000',
  },

  info: {
    lineHeight: 21,
    marginTop: 6,
    fontWeight: '600',
    fontSize: 15,
    color: '#000000',
  },
});

export default PropertyCard;
