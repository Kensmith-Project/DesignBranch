import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextLayoutEventData,
  Button,
  Image,
} from 'react-native';
import ImageCarousel from '../Components/ImageCarousel';
import GeneralStackScreenProps from '../props/GeneralStackScreenProps';
import {Duration, Property} from '../types/property';
import {formatAmount, getAmenityIcon, getInitials} from '../utils/GeneralUtils';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Tag from '../Components/elements/Tag';
import BathSvg from '../icons/bath';
import {Avatar, Caption, Title} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
import {getStatusBarHeight} from 'react-native-status-bar-height';

// Images
const propertyImage = require('../images/propertyImage2.jpg');
const propertyImage2 = require('../images/propertyImage3.png');
const agentPic = require('../images/guy.jpeg');

export interface PropertyScreenProps extends GeneralStackScreenProps {
  route?: RouteProp<{
    params: {
      property: Property;
    };
  }>;
}

const PropertyScreen: React.FC<PropertyScreenProps> = ({route, navigation}) => {
  // Constants
  const property = route?.params.property;
  const testImages = [
    propertyImage,
    propertyImage2,
    propertyImage,
    propertyImage2,
  ];
  const NUM_OF_LINES = 4;

  // State
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const [showLess, setShowLess] = React.useState<boolean>(false);
  const [lineRestriction, setLineRestriction] = React.useState<boolean>(true);

  // Handlers
  const handleDescriptionTextLayout = (
    e: NativeSyntheticEvent<TextLayoutEventData>,
  ) => {
    setShowMore(lineRestriction && e.nativeEvent.lines.length > NUM_OF_LINES);
  };

  const handleShowMore = () => {
    setLineRestriction(false);
    setShowMore(false);
    setShowLess(true);
  };

  const handleShowLess = () => {
    setShowLess(false);
    setLineRestriction(true);
    setShowMore(true);
  };

  const handleBack = () => {
    navigation?.goBack();
  };

  // Elements
  const statusAndPrice = (
    <View style={styles.statAndPrice}>
      <View style={styles.status}>
        <Text style={styles.statusText}>For {property?.status}</Text>
      </View>
      <View>
        <Text>
          <Text style={{color: '#000000'}}>₦</Text>
          <Text style={styles.price}>
            {formatAmount(property?.price.toString() || '0')}
          </Text>
        </Text>
        <Text style={styles.priceLabel}>
          {property?.duration === Duration.Monthly ? ' per month' : ' per year'}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/** Image Carousel */}
      <ImageCarousel images={testImages} onBackPress={handleBack} />

      {/** Property Info */}
      <View style={styles.propertyInfo}>
        {/** Status and Price */}
        {statusAndPrice}
        <View>
          <Image
            style={{marginTop: 16, marginBottom: 16}}
            source={require('../images/RectangleGreen.png')}
          />
        </View>

        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 19,
              textAlign: 'justify',
              marginBottom: 8,
              color: '#545454',
            }}>
            Newly built 3 bedroom flat with all rooms ensuite
          </Text>
        </View>

        {/** Title */}
        {/* <Text style={styles.title}>{property?.title}</Text> */}

        {/** Location */}
        <View style={styles.location}>
          <View>
            <EntypoIcon
              name="location-pin"
              size={20}
              color="rgba(87, 87, 87, 0.85)"
            />
            {/* <Image source={require('../images/property.png')}/> */}
            <Text style={styles.locationText}>
              1216, Ibiyinka Olorunbe, Victoria Island, Lagos
            </Text>
          </View>
          <View>
            <Text>View Direection</Text>
          </View>
        </View>

        <View>
          <Image
            style={{marginTop: 16, marginBottom: 16}}
            source={require('../images/RectangleGreen.png')}
          />
        </View>

        {/** Tags */}
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            lineHeight: 21,
            color: '#000000',
          }}>
          Property Details
        </Text>
        <View style={styles.tags}>
          <Tag
            icon={
              //   <FontAwesomeIcons name="building-o" size={16} color="#91EA91" />
              <Image source={require('../images/property.png')} />
            }
            text={`${property?.size} sqt`}
          />
          <Tag
            icon={
              // <Ionicons name="bed-outline" size={16} color="#91EA91" />
              <Image source={require('../images/bed.png')} />
            }
            text={`${property?.size} sqt`}
          />
          <Tag
            text={`${property?.size} sqt`}
            icon={
              //   <BathSvg svgProps={{width: 16, height: 16, fill: '#91EA91'}} />
              <Image source={require('../images/sink.png')} />
            }
          />
        </View>

        <View>
          <Image
            style={{marginTop: 16, marginBottom: 16}}
            source={require('../images/RectangleGreen.png')}
          />
        </View>

        {/** Amenities */}
        <View style={styles.amenitySection}>
          <Text style={styles.descriptionTitle}>Amenities</Text>
          <ScrollView horizontal={true}>
            {property?.amenities?.map((item, index) => (
              <View style={styles.amenity}>
                <Avatar.Icon
                  key={`Am` + index}
                  size={40}
                  icon={getAmenityIcon(item.amenity)}
                  color="#91EA91"
                  style={{backgroundColor: '#f0eef4', alignSelf: 'center'}}
                />
                <Text
                  style={{
                    width: 65,
                    textAlign: 'center',
                    fontSize: 12,
                    letterSpacing: 0.2,
                    color: '#000000',
                  }}>
                  {item.amenity}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: getStatusBarHeight(true),
  },

  statAndPrice: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  status: {
    backgroundColor: '#198619',
    paddingVertical: 5,
    paddingHorizontal: 19,
    borderRadius: 5,
    shadowColor: '0px 4px 10px 0.5px rgba(185, 185, 185, 0.2)',
    marginTop: 30,
  },

  statusText: {
    fontWeight: '700',
    fontSize: 12,
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
    color: '#000000',
  },

  propertyInfo: {
    padding: 10,
  },

  title: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 21,
    color: '#000000',
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: -5,
  },

  locationText: {
    lineHeight: 21,
    fontSize: 13,
    color: '#000000',
    // paddingRight: 100
  },

  tags: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: '#000000',
    // backgroundColor: '#E3F3E3'
  },

  description: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#B9B9B9',
    paddingBottom: 15,
    paddingTop: 5,
  },

  descriptionTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
    color: '#000000',
  },

  descriptionText: {
    textAlign: 'left',
    marginTop: 5,
    letterSpacing: 0.2,
    color: '#000000',
  },

  descriptionMore: {
    fontWeight: '700',
    color: '#91EA91',
  },

  amenitySection: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#B9B9B9',
    paddingBottom: 10,
    paddingTop: 5,
  },

  amenity: {
    marginTop: 5,
  },

  avatarSection: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarDescription: {
    marginLeft: 15,
    maxWidth: 170,
  },

  userTitle: {
    fontSize: 16,
    color: '#000000',
  },

  userCaption: {
    fontSize: 13,
    marginTop: -4,
    color: '#000000',
  },

  userAvatar: {
    backgroundColor: '#91EA91',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
  },

  messageBtn: {
    flex: 1,
    backgroundColor: '#91EA91',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    elevation: 0.5,
    shadowColor: 'black',
  },

  msgBtnText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'white',
  },

  callBtn: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderBottomRightRadius: 10,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowOpacity: 0.15,
    shadowColor: 'black',
    backgroundColor: 'white',
    //borderWidth: StyleSheet.hairlineWidth,
    elevation: 0.5,
  },

  callBtnText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#91EA91',
  },

  reviewAction: {
    padding: 10,
    backgroundColor: '#f0eef4',
  },

  review: {
    flexDirection: 'row',
  },

  reviewText: {
    fontSize: 12,
    marginLeft: 5,
    color: '#000000',
  },
});

export default PropertyScreen;
