import React from 'react'
import { useState } from 'react'
import { Pressable, StyleSheet ,View ,Text, TextInput, TextInputProps, Dimensions} from 'react-native'
const marginTop= Dimensions.get('screen').height/50

interface Props extends TextInputProps{
    Label: String
   
   
}

function DrawableInputFieldOne({placeholderTextColor= "#A0A3BD",Label,...props }: Props) {
    
   return (<>
   <View style={styles.main}>
    <Text style={styles.input_label}>{Label}</Text>
        <TextInput style={[styles.input,props.style]} placeholderTextColor={placeholderTextColor} {...props}/>
    </View>
   </>)

}

const styles = StyleSheet.create({
    main:{
  marginTop:'4%'
    },
    input:{
        width:"100%",
        alignItems:'center',
       
      paddingVertical:"5.3%",
      
      flex:1,
        borderRadius:13,
        borderColor:'rgba(185, 185, 185, 0.4)',
       
        borderWidth:1,
        marginTop:'1%',
        marginBottom:'3%',
        fontSize:16,
        fontStyle:'normal',
        letterSpacing:0.75,
        paddingHorizontal:'5%'
       
       
    },
    input_label:{
       
        fontSize:20,
        fontWeight:'400',
        color:'#3A3A3A',
        lineHeight:28,
      
       
        



    }

})
  

export default DrawableInputFieldOne