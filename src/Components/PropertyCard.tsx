import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Duration, Property } from '../types/property';
import { formatAmount } from '../utils/GeneralUtils';

// Images
const propertyImage = require('../images/propertyImage2.jpg');

export interface PropertyCardProps{
    property: Property;
}
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) =>{

    // Elements
    const statusAndPrice = (
        <View style={styles.statAndPrice}>
            <View style={styles.status}>
                <Text style={styles.statusText}>
                    For {property.status}
                </Text>
            </View>

            <View>
                <Text>
                    <Text>₦</Text>
                    <Text style={styles.price}>
                        {formatAmount(property.price.toString())}
                    </Text>
                </Text>
                <Text style={styles.priceLabel}>
                    {
                        property.duration === Duration.Monthly ? 
                        ' per month' : 
                        ' per year'
                    }
                </Text>
            </View>
        </View>
    )

    const card = (
        <View style={styles.card}>

            {/** Status and Price */}
            { statusAndPrice }

            {/** Title */}
            <View>
                <Text style={styles.title}>{property.title}</Text>
            </View>

            {/** Location */}
            <View>
                <Text style={styles.location}>{property.city}, {property.state}</Text>
            </View>
            
            {/** Bathrooms, Bedrooms, Size */}
            <View>
                <Text style={styles.info}>
                    {property.bedrooms} Bed, {property.bathrooms} Bath, {property.size} square Ft
                </Text>
            </View>
        </View>
    )

    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.9} >
            {/** Image Background */}
            <View style={styles.imageContainer}>
                <Image source={propertyImage} style={styles.image}/>
            </View>

            {/** Info card */}
            <View style={styles.cardOuter}>
                { card }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container:{
        position: 'relative',
        //backgroundColor: 'red',
        borderRadius: 8,
    },

    imageContainer:{
        height: 180,
        width: '100%',
        padding: 0,
    },

    image:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },

    cardOuter:{
        //backgroundColor: 'yellow',
        padding: 5,
        position: 'relative',
        top: '-25%',
        marginBottom: '-15%'
    },

    card:{
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
        borderRadius: 10
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
        fontSize: 14,
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

    title:{
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
    },

    location:{
        lineHeight: 21,
    },

    info:{
        lineHeight: 21,
        marginTop: 6,
        fontWeight: '600',
        fontSize: 15
    } 
})

export default PropertyCard;