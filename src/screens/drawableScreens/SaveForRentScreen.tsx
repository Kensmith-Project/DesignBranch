import React from 'react'
import { View , Text, StyleSheet, Dimensions} from 'react-native'
import { SafeAreaView } from 'react-native'
import Loginfemale from '../../icons/loginfemale'
import Button from '../../Components/drawableComponents/Button'
import RegisterButton from '../../Components/drawableComponents/RegisterButton'
const measure = Dimensions.get('screen').height
const measureWidth = Dimensions.get('screen').width


const margintop = measure/4

interface Props {
  navigation:any;
}


const SaveForRent = (props: Props) => {
  const navigateToSelect = ()=> props.navigation.navigate('SelectTypeSplashScreen')

  
  return (
    <SafeAreaView>
       <View style={styles.main}>
        <View style={styles.centre_img}>
        <Loginfemale />
        </View>
      

        <View style={styles.text_part}>
          <Text style={styles.text}>Seems you are not signed in yet. Please login or create an account to start saving towards your rent.</Text>
        </View>
        <View style={styles.register_section}>
          <Button text={'Create Account'} style={{backgroundColor:'', width:'50%', margin:3, borderStyle: 'solid' , borderColor:'#198619', borderWidth:1,   borderRadius:6,height:45}} onPress={navigateToSelect}/>
          <RegisterButton text={'Log In'} style={{backgroundColor:'#198619', width:'50%',  borderRadius:6 ,height:45,margin:3  }} />

        </View>
   
   </View>
    </SafeAreaView>
  
  )
}

export default SaveForRent
const styles = StyleSheet.create({

  main:{
width:'100%',
height:'100%',
padding:20
  },
  centre_img:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'50%',
    width:'100%',
    padding:15,
   


  },
  text_part:{
   
     alignItems:'center',
     justifyContent:'center',
    
    
  },
  text:{
    color:'#3A3A3A',
    fontWeight:'600',
    textAlign:'justify',
    lineHeight:25,


  },
  register_section:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:margintop,
    
    flex:1
  }

  
})