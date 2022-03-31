import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { 
    FlatList, Modal, Platform, StyleSheet, 
    Text, TouchableWithoutFeedback, View,
    TouchableHighlight 
} from 'react-native';

export interface BasePickerItem{
    label: string; value: string;
}

export interface BasePickerProps{
    visible?: boolean;
    onValueChange?: (itemValue: unknown, itemIndex: number) => void;
    items?: BasePickerItem[];
    selectedValue?: string;
    onClose?: (arg?: any) => void;
}

const BasePicker: React.FC<BasePickerProps> = ({
    visible = false, onValueChange, items, selectedValue,
    onClose
})=>{

    // Handlers
    const handlePress = (item: BasePickerItem, index: number )=>{
        onValueChange && onValueChange(item.value, index);
        onClose && onClose();
    }


    // Helpers
    const renderItem = ({ item, index }: { item: BasePickerItem, index: number })=>{
        return(
            <TouchableHighlight
                underlayColor={'rgba(0,0,0,0.3)'}
                onPress={()=> handlePress(item, index)}
            >
               <View style={styles.textView}>
                    <Text style={styles.text}>{ item.label }</Text>
               </View>
            </TouchableHighlight>
        )
    }

    if (Platform.OS === 'android') {

        // Change to flat list of touchablehighlight
        return(
            <Modal
                animationType='slide'
                visible={visible}
                transparent
                onDismiss={onClose}
            >
                <View style={styles.container}>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.androidBackdrop}></View>
                </TouchableWithoutFeedback>
                <View style={styles.pickerContainer}>
                    <FlatList
                        data={items}
                        renderItem={renderItem}
                    />
                </View>
            </View>

            </Modal>
        )
    }
    return(
        <Modal
            animationType='slide'
            visible={visible}
            transparent
            onDismiss={onClose}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.backdrop}></View>
                </TouchableWithoutFeedback>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={onValueChange}
                    >
                        {
                            items?.map((item, index)=>(
                                <Picker.Item
                                    key={index}
                                    label={item.label}
                                    value={item.value}
                                />
                            ))
                        }
                    </Picker>
                </View>
            </View>
            
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    backdrop:{
        flex: 1
    },

    androidBackdrop:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    pickerContainer:{
        backgroundColor: 'white',
        width: '100%',
        height: '40%',
        position: 'absolute',
        bottom: 0
    },
    textView:{
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    text:{
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.75,
        lineHeight: 28,
        textAlign: 'center'
    },
})

export default BasePicker;