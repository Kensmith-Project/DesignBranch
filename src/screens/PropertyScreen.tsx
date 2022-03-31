import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';


// Images
const propertyImage = require('../images/propertyImage2.jpg');
const propertyImage2 = require('../images/propertyImage3.png');

const PropertyScreen: React.FC<any> = ()=>{

    const testImages = [propertyImage, propertyImage2];

    return(
        <View>
            {/** Image */}
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator >
                {
                    testImages.map((image, index)=>(
                        <Image
                            key={index}
                            source={image}
                            style={styles.image}
                        />
                    ))
                }
            </ScrollView>

            {/** Info */}
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
});

export default PropertyScreen;