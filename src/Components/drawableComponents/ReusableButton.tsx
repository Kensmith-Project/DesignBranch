import { NavigationAction } from '@react-navigation/native'
import React, { FC, ReactNode } from 'react'
import { Pressable, StyleSheet ,View ,Text, PressableProps} from 'react-native'
import { TextProps } from 'react-native-svg'

interface btnprop extends PressableProps{
    text?: String,
   


    
   
}

function ReusableButton({text, ...props}: btnprop) {
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
      
      paddingVertical:"5.3%",
      marginBottom:20,
      fontSize:26,
      fontWeight:'500',
    //   padding:15,
      
        flex:1,
        borderRadius:13,
       backgroundColor:'#198619'

       
    },
    btn_font:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'500',
        color:'#FFFFFF',
        
      
    }

})
  

export default  ReusableButton