import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropertyCard from '../Components/PropertyCard';
import propertyData from '../mockData/propertyData';
import GeneralStackScreenProps from '../props/GeneralStackScreenProps';

const HomeScreen: React.FC<GeneralStackScreenProps> = () =>{

    return(
        <View style={styles.container}>
            <PropertyCard
                property={propertyData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FCFCFC'
    },
});

export default HomeScreen;