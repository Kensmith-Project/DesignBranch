import React, { FC, useState , } from 'react'

import { View, Text , SafeAreaView, StatusBar, StyleSheet, ScrollView, Pressable } from 'react-native'
import { Link } from '@react-navigation/native'



import doneIcon from 'react-native-vector-icons/MaterialIcons'
import DrawableInputFieldOne from '../../Components/drawableComponents/DrawableInputFieldOne'
import ReusableButton from '../../Components/drawableComponents/ReusableButton'

// import BankModalField from '../Components/elements/BankModalField'

// import { useBanks } from '../swr/banks'
// import { LoanRequest } from '../types/requests'
// import { setLoanRequest } from '../redux/slices/loanSlice'
import ValidationMessage from '../../Components/drawableComponents/ValidationMessage'



interface Props {
   navigation:any;
}



 const PasswordDetailsPage= (prop: Props)=>{
  
   const [range, setRange]= useState(50)
   const [sliding, setSliding]= useState("Inactive")
   const [checked, setchecked]= useState(false)
   const [formState,setFormState ]= useState('')
   
   // const { banks } = useSelector((state: RootState)=> state.thirdParty);
   
   const register = () => {
      
   prop.navigation.navigate("DoneAnimationPage")
      
   }
   
   
   
  
  
   // Handlers
   const handleChangeText = ()=>{
      setFormState('')

   }
   const message =  [{key: "1", icon: 'dot-single', title:'Should contain at least 8 characters.'}, {key:" 2", icon:'dot-single', title:'Both passwords must match.'}]
  const  ErrorMessage = message.map((item, index)=>(<ValidationMessage icon={item.icon} text={item.title} id={item.key}/>))




    return (<SafeAreaView >
      <ScrollView>
      <View  style={styles.main}>
      <Text style={styles.commandText}>Please Set-up your Login Details</Text>
      <View style={styles.first_layer}>
        <DrawableInputFieldOne Label={"Username"}  onChangeText={(text)=>handleChangeText()} />
        <DrawableInputFieldOne Label={"Password"} keyboardType="visible-password" onChangeText={(text)=>handleChangeText()}/>
        <DrawableInputFieldOne Label={"Confirm Password"}  keyboardType="visible-password" onChangeText={(text)=>handleChangeText()} />

        
        {ErrorMessage}
      
       
        
        
      </View>
      <View style={styles.last_btn}> 
         
         <ReusableButton text={"Create Account"} onPress={register}/>

         
        
      </View>
      <View style={styles.btm}>
        <Text style={styles.btmtext}>By clicking on “Create Account”, you agree  to the privacy policy & terms and conditions of HomeZone</Text>
      </View>
      </View>
      </ScrollView>
     
   
    </SafeAreaView>)
 }

 const styles = StyleSheet.create({
   main:{
      paddingTop:"10%",
      paddingHorizontal:"4%",
      backgroundColor:'#fcfcfc',
      
      

   },
   first_text:{
      fontSize:16,
      lineHeight:24,
     fontStyle:"normal",
      fontWeight:"400",
      color:'#000000',
      width:"100%",
      },
   first_layer:{
      marginTop:20,

   },
loan_amount:{
   fontWeight:"500",
   lineHeight:28,
   fontSize:14,
   textAlignVertical:"bottom"
   


},
oan_amount:{
   fontWeight:"600",
   lineHeight:28,
   fontSize:14,
   textAlignVertical:"bottom",
   color:"#000000",
   
   


},
slider:{
width:'100%',
height:200,
},
bottom_txt:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between'
},
btm_text:{
   fontSize:10,
   fontWeight:'500',
   fontStyle:'normal',
   lineHeight:28,
   color:'#000000',
   letterSpacing:0.75,
   textAlignVertical:'bottom'

},
horizontal:{
   backgroundColor:'#d6d8e7',
   height:2,
   marginTop:"10%"
},
interest_rate:{
   color:'#000000',
   fontSize:16,
   lineHeight:28,
   letterSpacing:0.75,
   textAlignVertical:'bottom',
   marginTop:'7%',
   marginBottom:'1%'

},
borrow_text:{
   color:'#000000',
   width:327,
   fontWeight:'400',
   lineHeight:28,
   letterSpacing:0.75,
   fontSize:14,
   textAlignVertical:'bottom',
   marginTop:'3%',
   


},
btn_area:{
   marginTop:'7%'
},
last_btn:{
    marginTop:'20%'
},
commandText:{
    fontWeight:'700',
    color:'#575757',
    fontSize:24
  },
  btmtext:{
    fontStyle:'normal',
    fontWeight:'400',
    fontSize:14,
    color:'#575757'

  },
  btm:{
    marginTop:0.5,
    paddingBottom:'3%'
  }
   
 });

export default PasswordDetailsPage
