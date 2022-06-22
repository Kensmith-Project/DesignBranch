import React from 'react';
import { 
    Modal, ScrollView, StyleSheet, Text, 
    TouchableOpacity, View, TextInput, Dimensions, KeyboardAvoidingView 
} from 'react-native';
import { Amenity, Bathrooms, Bedrooms, PropertyStatus, PropertyType } from '../../types/property';
import FilterTag from '../elements/FilterTag';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export interface FilterOptions{
    amenities: Amenity[];
    types: PropertyType[];
    priceRange?: number[];
    bedrooms: Bedrooms[];
    bathrooms: Bathrooms[];
    status: PropertyStatus[];
}

export interface FilterModalProps{
    onStateChange?: (state: FilterOptions)=> void;
    visible?: boolean;
    onClose?: (arg?: any) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ 
    onStateChange, visible = false, onClose 
})=>{

    // Initial state
    let initState: FilterOptions = {
        amenities: [], types: [], priceRange: [],
        status: [], bedrooms: [], bathrooms: []
    }

    // State
    const [state, setState] = React.useState<FilterOptions>(initState);


    // Handlers
    const handleTypeSelect = (value: any, isSelected: boolean)=>{
        if (isSelected) {
            let prevTypes = state.types;
            setState({
                ...state,
                types: [...prevTypes, value]
            })
            onStateChange && onStateChange({
                ...state,
                types: [...prevTypes, value]
            })
        }
        else{
            let newTypes = state.types.filter((item)=> item !== value);
            setState((prevState)=>({
                ...prevState,
                types: newTypes
            }))
            onStateChange && onStateChange({
                ...state,
                types: newTypes
            })
        }
    }
    const handleBathroomSelect = (value: any, isSelected: boolean)=>{
        if (isSelected) {
            let prevBathrooms = state.bathrooms;
            setState({
                ...state,
                bathrooms: [...prevBathrooms, value]
            })
            onStateChange && onStateChange({
                ...state,
                bathrooms: [...prevBathrooms, value]
            })
        }
        else{
            let newBathrooms = state.bathrooms.filter((item)=> item !== value);
            setState({
                ...state,
                bathrooms: newBathrooms
            })
            onStateChange && onStateChange({
                ...state,
                bathrooms: newBathrooms
            })
        }
    }
    const handleBedroomSelect = (value: any, isSelected: boolean)=>{
        if (isSelected) {
            let prevBedrooms = state.bedrooms;
            setState({
                ...state,
                bedrooms: [...prevBedrooms, value]
            })
            onStateChange && onStateChange({
                ...state,
                bedrooms: [...prevBedrooms, value]
            })
        }
        else{
            let newBedrooms = state.bedrooms.filter((item)=> item !== value);
            setState({
                ...state,
                bedrooms: newBedrooms
            })
            onStateChange && onStateChange({
                ...state,
                bedrooms: newBedrooms
            })
        }
    }
    const handleAmenitySelect = (value: any, isSelected: boolean)=>{
        if (isSelected) {
            let prevAmenities = state.amenities;
            setState({
                ...state,
                amenities: [...prevAmenities, value]
            })
            onStateChange && onStateChange({
                ...state,
                amenities: [...prevAmenities, value]
            })
        }
        else{
            let newAmenities = state.amenities.filter((item)=> item !== value);
            setState({
                ...state,
                amenities: newAmenities
            })
            onStateChange && onStateChange({
                ...state,
                amenities: newAmenities
            })
        }
    }
    const handleStatusSelect = (value: any, isSelected: boolean)=>{
        if (isSelected) {
            let prevStatus = state.status;
            setState({
                ...state,
                status: [...prevStatus, value]
            })
            onStateChange && onStateChange({
                ...state,
                status: [...prevStatus, value]
            })
        }
        else{
            let newStatus = state.status.filter((item)=> item !== value);
            setState({
                ...state,
                status: newStatus
            })
            onStateChange && onStateChange({
                ...state,
                status: newStatus
            })
        }
    }
    

    return(
        <KeyboardAvoidingView behavior='position'>
        <Modal
            visible={visible}
            animationType='slide'
            transparent
            onDismiss={onClose}
        >
            <View style={styles.container}>
                
                {/** Backdrop */}
                <View style={styles.backdrop}></View>

                {/** Filter Content */}
                <ScrollView style={styles.content}>

                    {/** Title and Close button */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Filter</Text>
                        <TouchableOpacity onPress={onClose}>
                            <AntDesignIcon name='close' size={18}
                                style={styles.closeIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    {/** Property Type */}
                    <View style={styles.filterSection}>
                        <Text style={styles.sectionTitle}>Property Type</Text>
                        <ScrollView horizontal={true}>
                            {
                                Object.values(PropertyType).map((item, index)=>(
                                    <FilterTag
                                        key={`ft${index}`}
                                        text={item}
                                        value={item}
                                        onSelect={handleTypeSelect}
                                        style={styles.filterTag}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>

                    {/** Bedrooms */}
                    <View style={styles.filterSection}>
                        <Text style={styles.sectionTitle}>Bedrooms</Text>
                        <ScrollView horizontal={true}>
                            {
                                Object.values(Bedrooms).map((item, index)=>{
                                    if (index > 0 && typeof item === 'number') {
                                        return(
                                            <FilterTag
                                                key={`ftbed${index}`}
                                                text={`${item} Bedroom`}
                                                value={item}
                                                onSelect={handleBedroomSelect}
                                                style={styles.filterTag}
                                            />
                                        )
                                    }
                                })
                            }
                        </ScrollView>
                    </View>

                    {/** Bathrooms */}
                    <View style={styles.filterSection}>
                        <Text style={styles.sectionTitle}>Bathrooms</Text>
                        <ScrollView horizontal={true}>
                            {
                                Object.values(Bathrooms).map((item, index)=>{
                                    if (index > 0 && typeof item === 'number') {
                                        return(
                                            <FilterTag
                                                key={`ftbath${index}`}
                                                text={`${item} Bathroom`}
                                                value={item}
                                                onSelect={handleBathroomSelect}
                                                style={styles.filterTag}
                                            />
                                        )
                                    }
                                })
                            }
                        </ScrollView>
                    </View>

                    {/** Price range */}
                    <View style={styles.filterSection}>
                        <Text style={styles.sectionTitle}>Price Range</Text>
                        <View>
                            <View>
                                <Text>Min:</Text>
                                <TextInput/>
                            </View>
                            <View>
                                <Text>Max:</Text>
                                <TextInput/>
                            </View>
                        </View>
                    </View>

                    {/** Amenities */}
                    <View style={styles.filterSection}>
                        <Text style={styles.sectionTitle}>Amenities</Text>
                        <ScrollView horizontal={true}>
                            {
                                Object.values(Amenity).map((item, index)=>{
                                    return(
                                        <FilterTag
                                            key={`ftamen${index}`}
                                            text={item}
                                            value={item}
                                            onSelect={handleAmenitySelect}
                                            style={styles.filterTag}
                                        />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                    {/** Status */}
                    <View style={styles.filterSection}>
                        <Text style={styles.sectionTitle}>Status</Text>
                        <ScrollView horizontal={true}>
                            {
                                Object.values(PropertyStatus).map((item, index)=>{
                                    return(
                                        <FilterTag
                                            key={`ftstat${index}`}
                                            text={item}
                                            value={item}
                                            onSelect={handleStatusSelect}
                                            style={styles.filterTag}
                                        />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                </ScrollView>
            </View>
        </Modal>
        </KeyboardAvoidingView>
    )
}

export default FilterModal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    backdrop:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },

    content:{
        backgroundColor: '#e8e6ed',
        width: '100%',
        height: Dimensions.get('window').height * 0.87,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 15
    },

    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },

    title:{
        fontWeight: '700',
        fontSize: 18
    },

    closeIcon:{
        fontWeight: '700',
    },

    filterTag:{
        marginRight: 5
    },

    filterSection:{
        marginBottom: 10
    },

    sectionTitle:{
        fontWeight: '700',
        marginBottom: 10
    }
})