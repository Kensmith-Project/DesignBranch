import React from 'react';
import { ColorValue, Text, TextStyle, View, ViewStyle } from 'react-native';


export interface TagProps{
    backgroundColor?: ColorValue;
    color?: ColorValue;
    style?: ViewStyle;
    icon?: React.ReactNode;
    text?: string;
    textStyle?: TextStyle;
}

const Tag: React.FC<TagProps> = ({
    backgroundColor = '#f0eef4', color, style,
    icon, text, textStyle
})=>{

    let containerStyle: ViewStyle = {
        backgroundColor: backgroundColor,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    }

    let defaultTextStyle: TextStyle ={
        color: color,
        marginLeft: 5,
        fontSize: 12
    }

    return(
        <View style={[containerStyle, style]}>
            { icon }
           <Text style={[defaultTextStyle, textStyle]}>{text}</Text>
        </View>
    )
}

export default Tag;