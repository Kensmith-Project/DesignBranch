import React from 'react'
import { View , Text, ScrollView, FlatList, StyleSheet, ImageBackground, Alert} from 'react-native'
import { SafeAreaView } from 'react-native'
import HireServiceAgentFeatureComponent from '../../Components/HireServiceAgentFeatureComponent'
import HireSlides from '../../Components/HireSlides'
import { Image, Pressable,} from 'react-native'
import { COLOR } from '../../utils/Tools'




/* 
ImUrl?: any;
  likes?: string;
  name?: string;
  jobtitle?: string;
  rate?:string;
  phone?: string;

*/

const HireServiceAgentScreen = () => {
  return (
    <SafeAreaView>
     <View style={{
        padding:10
      }}>
     <Text style={styles.bigTex}>Featured</Text>
      <View >
      <FlatList horizontal={true} 
      pagingEnabled={true} data={HireSlides} renderItem={({item})=>
       <HireServiceAgentFeatureComponent
       ImUrl={item.ImUrl}
       likes={item.likes}
       name={item.name}
       rate={item.rate}
       phone={item.phone}
       jobtitle={item.jobtitle}
       />} 
     
     />
      </View>
     <ScrollView>
     <View>
      <View style={styles.topContainer}>
        
      </View>
      <View style={{paddingLeft: 20, paddingRight: 20, marginTop: 44}}>
      <Text style={styles.bigTex}>Categories</Text>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable >
              <ImageBackground
                source={require('../../images/forrent.png')}
                style={{width: 160, height: 160}}>
                <View
                  style={{
                    backgroundColor: COLOR.buttonPrimary,
                    width: 145,
                    height: 150,
                    opacity: 0.8,
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                 
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      lineHeight: 23,
                      marginTop: 8,
                      color: COLOR.baseColorPrimary,
                    }}>
                  Plumbers
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>

            <Pressable >
              <ImageBackground
                source={require('../../images/forsale.png')}
                style={{width: 160, height: 160}}>
                <View
                  style={{
                    backgroundColor: COLOR.buttonPrimary,
                    width: 145,
                    height: 150,
                    opacity: 0.8,
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      lineHeight: 23,
                      marginTop: 8,
                      color: COLOR.baseColorPrimary,
                    }}>
                    Electricians
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
          <View style={{marginTop: 22}}>
            <Pressable
             >
              <ImageBackground
                source={require('../../images/backimgtoolthree.png')}
                style={{width: 160, height: 160}}>
                <View
                  style={{
                    backgroundColor: COLOR.buttonPrimary,
                    width: 160,
                    height: 160,
                    opacity: 0.8,
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                 
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '900',
                      lineHeight: 23,
                      marginTop: 8,
                      color: COLOR.baseColorPrimary,
                    }}>
                   Cleaners
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
     </ScrollView>
     </View>
      
        

      
    
    </SafeAreaView>
  
  )
}
const styles = StyleSheet.create({
  bigTex:{
    fontSize:24,
    fontWeight:'600',
    
    marginVertical:10

  },
  topContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  
})

export default HireServiceAgentScreen