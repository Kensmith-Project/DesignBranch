import React from 'react'
import { StyleSheet, View, Image ,TouchableOpacity , useWindowDimensions} from 'react-native'
import { Text } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'

interface Props{
  
  ImUrl?: any;
  likes?: string;
  name?: string;
  jobtitle?: string;
  rate?:string;
  phone?: string;

}

const HireServiceAgentFeatureComponent = (props:Props) => {
  const width= useWindowDimensions()
  return (
    <View style={[styles.main,]}>
      
      <Image source={props.ImUrl} />
      <View style={styles.flexbox}>
        <View style={styles.section}>
          <Text>⭐ {props.likes}</Text>
          <TouchableOpacity  style={styles.btn}   >
        <Text  style={styles.btn_font}>Hire me</Text>
    </TouchableOpacity>
        </View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.joTitle}>{props.jobtitle}</Text>
        <Text style={styles.rate}>{props.rate}</Text>
        
        <View style={styles.basephone}>
          <View style={styles.radius}>
            <Feather name='phone' color={'#198619'} size={10}/>
          </View>
          <Text style={styles.phone}>{props.phone}</Text>
        </View>
      </View>

    </View>
  )
}
 const styles = StyleSheet.create({
  main:{
  height:'40%',
 width:250,
  borderRadius:20,
  display: 'flex',
  flexDirection:'row',
  padding:10

  },
  imgflexbox:{
    
    width:'30%',
    height:'100%'
    
  
    },
    flexbox:{
      height:'100%',
      width:'70%',
      display:'flex',
      flexDirection:'column',
    gap:4
      
    
      },
      section:{
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-between'
      },
      btn:{
        
        alignItems:'center',
        textAlign:'center',
      // paddingVertical:"4.0%",
      // marginBottom:20,
     
      
      
        borderRadius:13,
        
         backgroundColor:"#198619",
            // width:"10%",
           
            
       
       
    },
    btn_font:{
        textAlign:'center',
       
        fontWeight:'800',
        color:'#ffffff'

    },
    name:{
      color:'#575757',
      fontSize:15.5,
      paddingHorizontal:5,
      marginTop:10
    },
    joTitle:{
      color:'#3A3A3A',
      fontSize:17,
      fontWeight:'700',
      paddingHorizontal:5,
      marginTop:10
    },
    rate:{
     color:'#3A3A3A',
     fontSize:14,
     fontWeight:'700',
     paddingHorizontal:5,
      marginTop:10
    },
    basephone:{
      display:'flex',
      flexDirection:'row',
      paddingHorizontal:5,
      marginTop:10


    },
    radius:{
      borderRadius:40,
      backgroundColor:'#C8D3D9',
      justifyContent:'center',
      alignItems:'center',
     width:20,
     height:20
    },
    phone:{
      color:'#198619',
      fontSize:14,
      fontWeight:'400'
    }
 })

export default HireServiceAgentFeatureComponent