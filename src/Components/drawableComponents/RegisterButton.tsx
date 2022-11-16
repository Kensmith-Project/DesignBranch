import { NavigationAction } from '@react-navigation/native'
import React, { FC, ReactNode } from 'react'
import { Pressable, StyleSheet ,View ,Text, PressableProps} from 'react-native'
import { TextProps } from 'react-native-svg'

interface btnprop extends PressableProps{
    text?: String,
   


    
   
}

function RegisterButton({text, ...props}: btnprop) {
   return (<React.Fragment>
     <Pressable  style={[styles.btn, ]} {...props}  >
        <Text style={[styles.btn_font,]} >{text}</Text>
    </Pressable>
   </React.Fragment>)

}

const styles = StyleSheet.create({
    btn:{
        width:"100%",
        alignItems:'center',
        textAlign:'center',
      paddingVertical:"5.3%",
      marginBottom:20,
      
        flex:1,
        borderRadius:13,
        backgroundColor:'#0122ae',
       
    },
    btn_font:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'500',
        color:'#FFFFFF',

    }

})
  

export default  RegisterButton