import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import TypesCard from '../../Components/drawableComponents/TypesCard'
import { StatusBar } from 'react-native'
import Button from '../../Components/drawableComponents/Button'
import ReusableButton from '../../Components/drawableComponents/ReusableButton'
// import TypesCard from '../../Components/drawableComponents/TypesCard'

const data = [{key: "1", title:'Register as a Landlord'}, {key:" 2",title:'Register as an Agent'}, {key:"3",title:'Register as a Tenant'}]
const TopMargin = Dimensions.get('screen').height/7
const footerMargin = Dimensions.get('screen').height/9
interface Props {
  navigation:any;
}
    


const SelectTypeSplashScreen = (props: Props) => {
  const [selectedId, setSelectedId] = useState(null);
  
  

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
   

    return (
      <TypesCard
        
      
        text={item.title}
      
       
       
      />
    );
  };
  return (
   <View style={styles.main}>
    <Text style={styles.commandText}>This will only take a few moments</Text>
    <View style={styles.content}>
      <Text style={styles.btn_font}>Please select one</Text>
         <View style={styles.list}>
         <FlatList
       data={data}
       renderItem={renderItem}
       keyExtractor={(item) => item.key}
       extraData={selectedId}/>
         </View>
          </View>
          <View style={styles.footer}>
            <ReusableButton text={'Continue'} onPress={navigateToNamePage}/>
          </View>
  
   </View>
  )
}

export default SelectTypeSplashScreen
const styles = StyleSheet.create({
  main:{
     paddingHorizontal: 20,
    height:'100%',
    paddingTop: StatusBar.currentHeight,
    
    
      },
      content:{
        marginTop:TopMargin
      },
      commandText:{
        fontWeight:'700',
        color:'#575757',
        fontSize:24
      },
      list:{
        marginTop:15
      },
      btn_font:{
       
        fontSize:19,
        fontWeight:'500',
        color:'#3A3A3A',
      
    },
    footer:{
      
      width:'100%',
      height:'13%',
      marginTop:footerMargin
    },
    
  
})