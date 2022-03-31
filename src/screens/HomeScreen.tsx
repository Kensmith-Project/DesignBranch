import React from 'react';
import { FlatList, StyleSheet, View, ListRenderItemInfo, Text, TouchableWithoutFeedback } from 'react-native';
import PropertyCard from '../Components/PropertyCard';
import propertyData from '../mockData/propertyData';
import GeneralStackScreenProps from '../props/GeneralStackScreenProps';
import { Property } from '../types/property';
import { Cities } from '../types/cities';
import { Picker } from '@react-native-picker/picker';
import BasePicker from '../Components/elements/BasePicker';
import { toPickerItem } from '../utils/GeneralUtils';

const HomeScreen: React.FC<GeneralStackScreenProps> = () =>{

    // State
    const [selectedLanguage, setSelectedLanguage] = React.useState('Lagos');
    const [value, setValue] = React.useState('Lagos');
    const [open, setOpen] = React.useState<boolean>(false);

    let testProperties: Property[] = [
        propertyData, propertyData, propertyData, propertyData, propertyData, propertyData,
        propertyData, propertyData, propertyData, propertyData, propertyData, propertyData,
        propertyData, propertyData, propertyData, propertyData, propertyData, propertyData,
        propertyData, propertyData, propertyData, propertyData, propertyData, propertyData,
        propertyData, propertyData, propertyData, propertyData, propertyData, propertyData,
        propertyData, propertyData, propertyData, propertyData, propertyData, propertyData,
        propertyData, propertyData, propertyData, propertyData, propertyData, propertyData,
        propertyData, propertyData, propertyData, propertyData, propertyData, propertyData,
    ]

    const renderItem = ({ item }: ListRenderItemInfo<Property> ) =>{
        return(
            <PropertyCard property={item}/>
        )
    }

    const handlePress = ()=>{
        setOpen(true);
        console.log('Clicked')
    }

    const handleClose = ()=>{
        //setValue(selectedLanguage);
        setOpen(false);
    }

    const handleValueChange = (itemValue: unknown, itemIndex: number)=>{
        setSelectedLanguage(itemValue as string);
    }

    const renderLabel = ()=>{
        return(
           <View>
               <View style={styles.locationContainer}>
                   <View>
                       <TouchableWithoutFeedback onPress={handlePress}>
                            <Text>Location</Text>
                       </TouchableWithoutFeedback>
                       <Text style={styles.locationText}>{selectedLanguage}</Text>
                       <BasePicker
                            visible={open}
                            onClose={handleClose}
                            selectedValue={selectedLanguage}
                            items={toPickerItem(Object.values(Cities))}
                            onValueChange={handleValueChange}
                       />
                   </View>
               </View>

               <Text style={styles.title}>Find homes near you</Text>
           </View>
        )
    }

    return(
        <View style={styles.container}>
            { renderLabel() }
           <FlatList
                data={testProperties}
                renderItem={renderItem}
                keyExtractor={(item,index)=> index + 'w'}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FCFCFC',
        paddingHorizontal: 10,
    },

    title:{
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 5,
        fontWeight: '600'
    },

    locationContainer:{
        marginBottom: 10
    },

    locationText:{
        fontSize: 17,
        fontWeight: '600'
    }
});

export default HomeScreen;