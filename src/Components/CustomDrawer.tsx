import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    createDrawerNavigator,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
    Avatar, Title, Caption,
    Paragraph, Drawer, Text,
    TouchableRipple, Switch
} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, Vibration, View , Image, Pressable, Button, TouchableOpacity} from 'react-native';
import DrawableBtn from './CloseDrawableButton'
interface CustomDrawerContentProps extends DrawerContentComponentProps{}

const CustomDrawer = (props: CustomDrawerContentProps) => {
    const navigation = useNavigation<any>();




      // Handlers
      const gotoProfile = ()=>{
        navigation.navigate('Profile');
    }
    const gotoSaveRent = ()=>{
        navigation.navigate("SaveForRent");
    }
    const gotoWallet = ()=>{
        navigation.navigate('Wallet');
    }
    const gotoServiceAgent = ()=>{
        navigation.navigate("Hire a Service Agent");
    }
    const gotoServiceInspectProperty = ()=>{
        navigation.navigate("Inspect a Property");
    }
    const gotoSettings = ()=>{
        navigation.navigate( 'Settings' );
    }

  return (
   <View style={styles.container}>
     <DrawerContentScrollView {...props}>

         {/** User Info Section */}
         <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.avatarSection}>
                            <Avatar.Image
                                source={
                                  require('../images/avatarIcon.png')
                                }
                                size={50}
                            />
                            <View style={styles.avatarDescription}>
                              <Text>Ajah Kenneth</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/** Main Drawer Items */}
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        label="Profile"
                        onPress={gotoProfile} 
                        icon={({ color, size })=>(
                          <Image source={require('../images/profileIcon.png')} style={{ 
                            height:20,
                            width:20
                          }}/>
                        )}
                        inactiveTintColor={'#505050'}
                    />
                    <DrawerItem
                        label="Save for Rent"
                        onPress={gotoSaveRent} 
                        icon={({ color, size })=>(
                            <Image source={require('../images/saveforrentIcon.png')} style={{ 
                              height:20,
                              width:20
                            }}/>
                          )}
                        inactiveTintColor={'#505050'}
                    />
                    <DrawerItem
                        label="Wallet"
                        onPress={gotoWallet} 
                        icon={({ color, size })=>(
                            <Image source={require('../images/walletIcon.png')} style={{ 
                              height:20,
                              width:20
                            }}/>
                          )}
                        inactiveTintColor={'#505050'}
                    />
                    <DrawerItem
                        label="Hire a Service Agent"
                        onPress={gotoServiceAgent} 
                        icon={({ color, size })=>(
                            <Image source={require('../images/serviceagenticon.png')} style={{ 
                              height:20,
                              width:20
                            }}/>
                          )}
                        inactiveTintColor={'#505050'}
                    />
                    <DrawerItem
                        label="Inspect a Property"
                        onPress={gotoServiceInspectProperty} 
                        icon={({ color, size })=>(
                            <Image source={require('../images/propertyicon.png')} style={{ 
                              height:20,
                              width:20
                            }}/>
                          )}
                        inactiveTintColor={'#505050'}
                    />
                    <DrawerItem
                        label="Settings"
                        onPress={gotoSettings} 
                        icon={({ color, size })=>(
                            <Image source={require('../images/settingicon.png')} style={{ 
                              height:20,
                              width:20
                            }}/>
                          )}
                        inactiveTintColor={'#505050'}
                    />
                </Drawer.Section>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
              <View style={{
                 width:'100%',
                alignItems:'center',
                justifyContent:'center'
              }}>
               <TouchableOpacity  style={styles.btn}  onPress={() => props.navigation.closeDrawer()} >
        <Text  style={styles.btn_font}>Close</Text>
    </TouchableOpacity>
    {/* <Button title='Close' color={"#198619"} /> */}
              </View>
               
            </Drawer.Section>

           
         
   </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex: 1, 
        backgroundColor: '#FFFFFF',
    },

    drawerContent:{
        flex: 1
    },

    userInfoSection:{
        paddingLeft: 20,
    },

    avatarSection:{
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },

    avatarDescription:{
        marginLeft: 15,
    },

    title:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 3,
        color: 'white'
    },

    drawerSection:{
        marginTop: 15
    },

    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },

    bottomDrawerSection:{
        borderTopColor: "#f4f4f4",
        borderTopWidth: StyleSheet.hairlineWidth,
        marginBottom: 100
    },
    btn:{
        
        alignItems:'center',
        textAlign:'center',
      paddingVertical:"4.0%",
      marginBottom:20,
     
      
      
        borderRadius:13,
        
         backgroundColor:"#198619",
            width:"60%",
           
            
       
       
    },
    btn_font:{
        textAlign:'center',
       
        fontWeight:'600',
        color:'#ffffff'

    }
})


export default CustomDrawer