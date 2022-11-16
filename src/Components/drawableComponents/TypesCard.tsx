import { NavigationAction } from '@react-navigation/native'
import React, { FC, ReactNode, useState } from 'react'
import { Pressable, StyleSheet ,View ,Text, PressableProps} from 'react-native'
import { TextProps } from 'react-native-svg'


interface btnprop extends PressableProps{
    text?: String,
   


    
   
}

function TypesCard({text, ...props}: btnprop) {
    const[ borderColor, setBorderColor]=  useState(true)
   return (<React.Fragment>
     <Pressable  style={borderColor? styles.btn_1: styles.btn_2} {...props}  onPress={()=>setBorderColor(!borderColor)} >
        <Text style={[styles.btn_font,]} >{text}</Text>
    </Pressable>
   </React.Fragment>)

}

const styles = StyleSheet.create({
    btn_1:{
        width:"100%",
        alignItems:'center',
      
      paddingVertical:"5.3%",
      marginBottom:20,
      padding:15,
      
        flex:1,
        borderRadius:13,
       borderColor:'rgba(185, 185, 185, 0.4)',
       borderWidth:1,
       borderStyle:'solid'

       
    },
    btn_2:{
        width:"100%",
        alignItems:'center',
      
      paddingVertical:"5.3%",
      marginBottom:20,
      padding:15,
      
        flex:1,
        borderRadius:13,
       borderColor:'#198619',
       borderWidth:1,
       borderStyle:'solid'

       
    },
    btn_font:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'500',
        color:'#3A3A3A',
      
    }

})
  

export default TypesCard