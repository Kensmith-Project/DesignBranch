import React from 'react'
import { View, Text, Image , StyleSheet, Pressable, ScrollView} from 'react-native'

import * as Progress from 'react-native-progress'

import doneAnim from '../../icons/animations/done.json'
import AnimatedLottieView from 'lottie-react-native'
import Lottie from '../../icons/animations/lottie'
import ReusableButton from '../../Components/drawableComponents/ReusableButton'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
interface Props {
  navigation:any;
}
const LoanKY=(prop:Props)=> {
  const register = () => prop.navigation.navigate("Main")
  return (
    <ScrollView>
      <View style={styles.main}>
     
     {/* <Image source={require('../../assets/done.png'
    
)} style={styles.img}/> */}


<View >

{/* <AnimatedLottieView source={doneAnim} autoPlay loop={false} style={styles.animation}/> */}
<Lottie/>
</View>


     
     <Text style={styles.middle}> success!</Text>
     <Text style={styles.txt}>Your account has been created</Text>
    <View style={styles.button}>
        <ReusableButton text={'Continue to Homezone'} onPress={register}/>

    </View>
   </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  img:{
    
    marginTop:'30%'
  },
  main:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:"10%",
      paddingHorizontal:"4%",
  },
  title_txt:{
    marginTop:30,
    fontWeight:"600",
    letterSpacing:1,
    textAlignVertical:'center',
    lineHeight:32,
    fontStyle:'normal',
    fontSize:24,
    color:'#000000'

  },
  middle:{
    fontSize:30,
    fontStyle:'normal',
    color:'#198619',
    
    fontWeight:'700',
    alignItems:'center',
    marginTop:40,
    textAlign:'center',
    
    width:"70%"

    // "80%"

  },
  button:{
    
    marginTop:'80%',
    width:'100%',
    flex:1
  
  

  },
  btn_tx:{
    marginLeft:7,
    fontSize:15,
    color:'#0122AE'
  },
 animation:{
  width:150,
  height:150,
  color:'#00ba88',
  marginTop:'15%'
 },
 txt:{
    color:'#3A3A3A',
    fontSize:18,
    fontWeight:'600',
    lineHeight:25,
    textAlign:'center',
    marginTop:17

 }

})
export default LoanKY