import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { 
    StyleSheet, Text, View ,
    ScrollView, TouchableOpacity, NativeSyntheticEvent, TextLayoutEventData, Button
} from 'react-native';
import ImageCarousel from '../Components/ImageCarousel';
import GeneralStackScreenProps from '../props/GeneralStackScreenProps';
import { Duration, Property } from '../types/property';
import { formatAmount, getAmenityIcon, getInitials } from '../utils/GeneralUtils';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Tag from '../Components/elements/Tag';
import BathSvg from '../icons/bath';
import { Avatar, Caption, Title } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// Images
const propertyImage = require('../images/propertyImage2.jpg');
const propertyImage2 = require('../images/propertyImage3.png');
const agentPic = require('../images/guy.jpeg');

export interface PropertyScreenProps extends GeneralStackScreenProps{
    route?:  RouteProp<{
        params:{
            property: Property
        }
    }>
}

const PropertyScreen: React.FC<PropertyScreenProps> = ({ route, navigation })=>{

    // Constants
    const property = route?.params.property;
    const testImages = [propertyImage, propertyImage2, propertyImage, propertyImage2];
    const NUM_OF_LINES = 4;

    // State
    const [showMore, setShowMore] = React.useState<boolean>(false);
    const [showLess, setShowLess] = React.useState<boolean>(false);
    const [lineRestriction, setLineRestriction] = React.useState<boolean>(true);

    // Handlers
    const handleDescriptionTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>)=>{
        setShowMore(lineRestriction && e.nativeEvent.lines.length > NUM_OF_LINES);
    }

    const handleShowMore = ()=>{
        setLineRestriction(false);
        setShowMore(false);
        setShowLess(true);
    }

    const handleShowLess = ()=>{
        setShowLess(false);
        setLineRestriction(true);
        setShowMore(true);
    }

    const handleBack = ()=>{
        navigation?.goBack();
    }

    // Elements
    const statusAndPrice = (
        <View style={styles.statAndPrice}>
            <View style={styles.status}>
                <Text style={styles.statusText}>
                    For {property?.status}
                </Text>
            </View>

            <View>
                <Text>
                    <Text>₦</Text>
                    <Text style={styles.price}>
                        {formatAmount(property?.price.toString() || '0')}
                    </Text>
                </Text>
                <Text style={styles.priceLabel}>
                    {
                        property?.duration === Duration.Monthly ? 
                        ' per month' : 
                        ' per year'
                    }
                </Text>
            </View>
        </View>
    )

    return(
        <ScrollView style={styles.container}>
            {/** Image Carousel */}
            <ImageCarousel images={testImages} onBackPress={handleBack}/>
            
            {/** Property Info */}
            <View style={styles.propertyInfo}>
                {/** Status and Price */}
                { statusAndPrice }

                {/** Title */}
                <Text style={styles.title}>{property?.title}</Text>

                {/** Location */}
                <View style={styles.location}>
                   <EntypoIcon
                        name='location-pin'
                        size={20}
                        color="#91EA91"
                   />
                    <Text style={styles.locationText}>{property?.city}, {property?.state}</Text>
                </View>

                {/** Tags */}
                <View style={styles.tags}>
                    <Tag 
                        icon={
                            <FontAwesomeIcons name='building-o' size={16} color="#91EA91" />
                        }
                        text={`${property?.size} sqt`}
                    />
                    <Tag 
                        icon={
                            <Ionicons name='bed-outline' size={16} color="#91EA91"/>
                        }
                        text={`${property?.bedrooms} Bedroom`}
                    />
                    <Tag
                        text={`${property?.bathrooms} Bathrooms`} 
                        icon={
                            <BathSvg svgProps={{ width: 16, height: 16, fill: '#91EA91' }}/>
                        }
                    />
                </View>

                {/** House Details */}
                <View style={styles.description}>
                    <Text style={styles.descriptionTitle}>House Details</Text>
                    <Text selectable style={styles.descriptionText}
                        numberOfLines={lineRestriction ? NUM_OF_LINES : undefined}
                        ellipsizeMode="tail"
                        onTextLayout={handleDescriptionTextLayout}
                    >
                        {property?.description}
                    </Text>
                    { showMore && 
                        <TouchableOpacity activeOpacity={0.4} onPress={handleShowMore} >
                            <Text style={styles.descriptionMore}>Show more...</Text>
                        </TouchableOpacity>
                    }
                    { showLess && 
                        <TouchableOpacity activeOpacity={0.4} onPress={handleShowLess}>
                            <Text style={styles.descriptionMore}>Show less</Text>
                        </TouchableOpacity>
                    }
                </View>

                {/** Amenities */}
                <View style={styles.amenitySection}>
                    <Text style={styles.descriptionTitle}>Amenities</Text>
                    <ScrollView horizontal={true} >
                        {
                            property?.amenities?.map((item, index)=>(
                                <View style={styles.amenity}>
                                    <Avatar.Icon
                                        key={`Am` + index} 
                                        size={40} 
                                        icon={getAmenityIcon(item.amenity)}
                                        color="#91EA91"
                                        style={{ backgroundColor: '#f0eef4', alignSelf: 'center' }}
                                    />
                                    <Text style={{ width: 65, textAlign: 'center', fontSize: 12, letterSpacing: 0.2 }}>{item.amenity}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>

                {/** Agent */}
                <View style={styles.avatarSection}>
                    <Avatar.Image
                        source={agentPic}
                        size={40}
                        style={styles.userAvatar}
                    />
                    <View style={styles.avatarDescription}>
                        <Title style={styles.userTitle}>Agent</Title>
                        <Caption style={styles.userCaption} numberOfLines={1} ellipsizeMode="tail">
                            {`${property?.user.firstName} ${property?.user.lastName}`}
                        </Caption>
                    </View>
                </View>
            </View>
            <View style={styles.reviewAction}>
                {/** Reviews */}
                <View>
                    <Text>Reviews</Text>
                    <View style={styles.review}>
                        <Rating
                            imageSize={18}
                            type='custom'
                            tintColor='#f0eef4'
                            ratingBackgroundColor='#A9A9A9'
                            readonly
                            style={{ alignSelf: 'flex-start'  }}
                        />
                        <Text style={styles.reviewText}>( 25 Reviews )</Text>
                    </View>
                </View>

                {/** Message and Call */}
                <View style={styles.action}>
                    <TouchableOpacity style={styles.messageBtn} activeOpacity={0.6}>
                        <Text style={styles.msgBtnText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callBtn} activeOpacity={0.6}>
                        <Text style={styles.callBtnText} >Call</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'white',
        marginTop: getStatusBarHeight(true)
    },

    statAndPrice:{
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },

    status:{
        backgroundColor: '#91EA91',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },

    statusText:{
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 21,
        color: 'white',
        textTransform: 'uppercase'
    },

    priceLabel:{
        textAlign: 'right',
        color: '#B9B9B9',
        fontWeight: '600'
    },

    price:{
        fontWeight: '700',
        fontSize: 18
    },

    propertyInfo:{
        padding: 10
    },

    title:{
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 21,
    },

    location:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -5
    },

    locationText:{
        lineHeight: 21,
        fontSize: 13
    },

    tags:{
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    description:{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#B9B9B9',
        paddingBottom: 15,
        paddingTop: 5,
    },

    descriptionTitle:{
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 21,
    },

    descriptionText:{
        textAlign: 'left',
        marginTop: 5,
        letterSpacing: 0.2
    },

    descriptionMore:{
        fontWeight: '700',
        color: '#91EA91'
    },

    amenitySection:{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#B9B9B9',
        paddingBottom: 10,
        paddingTop: 5
    },

    amenity:{
        marginTop: 5,
    },

    avatarSection:{
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatarDescription:{
        marginLeft: 15,
        maxWidth: 170,
    },

    userTitle:{
        fontSize: 16
    },

    userCaption:{
        fontSize: 13,
        marginTop: -4
    },

    userAvatar:{
        backgroundColor: '#91EA91'
    },

    action:{
        flexDirection: 'row',
        marginTop: 10,
    },

    messageBtn:{
        flex: 1,
        backgroundColor: '#91EA91',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 10,
        elevation: 0.5,
        shadowColor: "black",
    },

    msgBtnText:{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: 'white'
    },

    callBtn:{
        flex: 1,
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderBottomRightRadius: 10,
        shadowOffset:{
            height: -2,
            width: 0
        },
        shadowOpacity: 0.15,
        shadowColor: "black",
        backgroundColor: 'white',
        //borderWidth: StyleSheet.hairlineWidth,
        elevation: 0.5,
    },

    callBtnText:{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#91EA91'
    },

    reviewAction:{
        padding: 10,
        backgroundColor: '#f0eef4'
    },

    review:{
        flexDirection:'row'
    },

    reviewText:{
        fontSize: 12,
        marginLeft: 5
    }

});

export default PropertyScreen;