import React from 'react';
import { 
    ColorValue, Text, TextStyle, 
    Touchable, View, ViewStyle, TouchableWithoutFeedback 
} from 'react-native';


export interface FilterTagProps{
    backgroundColor?: ColorValue;
    color?: ColorValue;
    highlightColor?: ColorValue;
    style?: ViewStyle;
    text: string;
    value: any;
    textStyle?: TextStyle;
    onSelect?: (value: string, isSelected: boolean)=> void;
}

const FilterTag: React.FC<FilterTagProps> = ({
    backgroundColor = 'white', color, style,
    text, textStyle, highlightColor = "#91EA91", 
    onSelect, value
})=>{

    // State
    const [isClicked, setIsClicked] = React.useState<boolean>(false);

    // Handlers
    const handlePress = ()=>{
        setIsClicked(!isClicked);
        onSelect && onSelect(value, !isClicked);
    }

    let containerStyle: ViewStyle = {
        backgroundColor: backgroundColor,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 4,
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderWidth: isClicked ? 1 : undefined,
        borderColor: isClicked ? highlightColor : undefined,
    }

    let defaultTextStyle: TextStyle ={
        color: isClicked ? highlightColor : color,
        fontSize: 14,
    }

    return(
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={[containerStyle, style]}>
                <Text style={[defaultTextStyle, textStyle]}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FilterTag;