import React from 'react';
import { FlatList, StyleSheet, View, ListRenderItemInfo, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import PropertyCard from '../Components/PropertyCard';
import propertyData from '../mockData/propertyData';
import GeneralStackScreenProps from '../props/GeneralStackScreenProps';
import { Property } from '../types/property';
import { Cities } from '../types/cities';
import { Picker } from '@react-native-picker/picker';
import BasePicker from '../Components/elements/BasePicker';
import { toPickerItem } from '../utils/GeneralUtils';
import AntDeisgnIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
               {/** Location */}
               <View style={styles.locationContainer}>

                   {/** Location Icon */}
                   <EntypoIcon
                        name='location-pin'
                        size={28}
                        color="#91EA91"
                   />

                   {/** Location Texts */}
                   <View>
                        <Text style={{ fontSize: 12 }}>Location</Text>
                        <View style={styles.location}>
                            <Text style={styles.locationText}>{selectedLanguage}</Text>
                            <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
                                <AntDeisgnIcon 
                                    name='caretdown'
                                    size={14}
                                    style={styles.arrow}
                                />
                            </TouchableOpacity>
                        </View>
                   </View>

               </View>

               <Text style={styles.title}>Find homes near you</Text>
           </View>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <BasePicker
                    visible={open}
                    onClose={handleClose}
                    selectedValue={selectedLanguage}
                    items={toPickerItem(Object.values(Cities))}
                    onValueChange={handleValueChange}
                />
                { renderLabel() }
                <FlatList
                        data={testProperties}
                        renderItem={renderItem}
                        keyExtractor={(item,index)=> index + 'w'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },

    content:{
        marginTop: getStatusBarHeight(true)
    },

    title:{
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 5,
        fontWeight: '600'
    },

    locationContainer:{
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },

    locationText:{
        fontSize: 17,
        fontWeight: '600',
        marginRight: 10,
    },

    location:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    arrow:{
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
        textAlign: 'center'
    }
});

export default HomeScreen;