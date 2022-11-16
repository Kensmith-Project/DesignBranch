import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper';
interface Props{
    icon: string;
    text: string;
    id: string
}

const ValidationMessage = (prop: Props) => {
  return (
   <View style={styles.main} key={prop.id}>
    <Entypo name={prop.icon} size={20}/>
    <Text style={styles.text}>{prop.text}</Text>

   </View>
  )
}
const styles = StyleSheet.create({
    main:{
        display:'flex',
        marginTop:1,
        flexDirection:'row'

    },
    text:{
        fontWeight:'400',
        fontSize:15,
        color:'#575757',
        marginLeft:1
    }
    
})

export default ValidationMessage