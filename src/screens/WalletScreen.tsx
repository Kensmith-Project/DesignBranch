import React from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';

const WalletScreen: React.FC<any> = ({navigation, route}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        // justifyContent: 'space-between',
      }}>
      <View style={{marginTop: 24, alignItems: 'center'}}>
        <Text
          style={{
            color: '#023302',
            fontWeight: '700',
            fontSize: 34,
            fontFamily: 'Nunito',
            fontStyle: 'normal',
          }}>
          N{'25,000.00'}
        </Text>
        <Text
          style={{
            color: '#3A3A3A',
            fontWeight: '600',
            fontSize: 16,
            fontFamily: 'Lora',
            fontStyle: 'normal',
          }}>
          Wallet ID: {'0733788941'}
        </Text>
        <View
          style={{
            marginBottom: 24.5,
            marginRight: 79,
            marginLeft: 79,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 22,
          }}>
          <Pressable
            style={{
              backgroundColor: '#198619',
              marginRight: 16,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: '#ffffff',
                paddingTop: 9,
                paddingBottom: 9,
                paddingLeft: 19,
                paddingRight: 20,
              }}>
              Add Funds
            </Text>
          </Pressable>
          <Pressable style={{backgroundColor: '#198619', borderRadius: 5}}>
            <Text
              style={{
                color: '#ffffff',
                paddingTop: 9,
                paddingBottom: 9,
                paddingLeft: 19,
                paddingRight: 20,
              }}>
              Send Funds
            </Text>
          </Pressable>
        </View>
        <Image source={require('../images/Line86.png')} />
      </View>
      <View style={{marginLeft: 27, marginTop: 40.5, marginBottom: 2}}>
        <Text style={{color: '#454B5E', fontWeight: '600', fontSize: 19.5}}>
          Transactions
        </Text>
        <Image source={require('../images/LineGreen.png')} />
        <ScrollView>
          <View>
            <Text
              style={{
                marginTop: 22,
                color: '#575757',
                fontSize: 16,
                fontWeight: '500',
                marginBottom: 36,
              }}>
              {'31, May, 2022, Tuesday'}
            </Text>
            <View style={{shadowColor: '-3px -3px 6px #F5FFF5, 3px 3px 6px #EFF4EF;'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 22,
                  // backgroundColor: 'yellow',
                }}>
                <View
                  style={{
                    backgroundColor: '#D79E85',
                    width: 32,
                    height: 32,
                    borderRadius: 7,
                    opacity: 0.1,
                    shadowColor: '-2px -2px 4px #E8FAE8, 2px 2px 4px #E3F3E3;ƒ',
                  }}>
                  <Image source={require('../images/Vectora.png')} />
                </View>
                <View style={{width: 216, height: 40}}>
                  <Text style={{color: '#575757'}}>
                    RVSL GLO USSD Charge for 1008 to 1703
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text>{'-'}</Text>
                  <Image source={require('../images/naira.png')} />
                  <Text style={{color: '#AE3D0B', paddingRight: 22}}>
                    5,000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 22,
                  // backgroundColor: 'yellow',
                }}>
                <View
                  style={{
                    backgroundColor: '#198619',
                    width: 32,
                    height: 32,
                    borderRadius: 7,
                    opacity: 0.1,
                    shadowColor: '-2px -2px 4px #E8FAE8, 2px 2px 4px #E3F3E3;ƒ',
                  }}>
                  <Image source={require('../images/Vectorb.png')} />
                </View>
                <View style={{width: 216, height: 40}}>
                  <Text style={{color: '#575757'}}>
                    RVSL GLO USSD Charge for 1008 to 1703
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text>{'+'}</Text>
                  <Image source={require('../images/nairaa.png')} />
                  <Text style={{color: '#198619', paddingRight: 22}}>
                    5,000
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View >
            <Text
              style={{
                marginTop: 22,
                color: '#575757',
                fontSize: 16,
                fontWeight: '500',
                marginBottom: 36,
              }}>
              {'31, May, 2022, Tuesday'}
            </Text>
            <View style={{shadowColor: '-3px -3px 6px #F5FFF5, 3px 3px 6px #EFF4EF;'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 22,
                  // backgroundColor: 'yellow',
                }}>
                <View
                  style={{
                    backgroundColor: '#D79E85',
                    width: 32,
                    height: 32,
                    borderRadius: 7,
                    opacity: 0.1,
                    shadowColor: '-2px -2px 4px #E8FAE8, 2px 2px 4px #E3F3E3;ƒ',
                  }}>
                  <Image source={require('../images/Vectora.png')} />
                </View>
                <View style={{width: 216, height: 40}}>
                  <Text style={{color: '#575757'}}>
                    RVSL GLO USSD Charge for 1008 to 1703
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text>{'-'}</Text>
                  <Image source={require('../images/naira.png')} />
                  <Text style={{color: '#AE3D0B', paddingRight: 22}}>
                    5,000
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View >
            <Text
              style={{
                marginTop: 22,
                color: '#575757',
                fontSize: 16,
                fontWeight: '500',
                marginBottom: 36,
              }}>
              {'31, May, 2022, Tuesday'}
            </Text>
            <View style={{shadowColor: '-3px -3px 6px #F5FFF5, 3px 3px 6px #EFF4EF;'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 22,
                  // backgroundColor: 'yellow',
                }}>
                <View
                  style={{
                    backgroundColor: '#D79E85',
                    width: 32,
                    height: 32,
                    borderRadius: 7,
                    opacity: 0.1,
                    shadowColor: '-2px -2px 4px #E8FAE8, 2px 2px 4px #E3F3E3;ƒ',
                  }}>
                  <Image source={require('../images/Vectora.png')} />
                </View>
                <View style={{width: 216, height: 40}}>
                  <Text style={{color: '#575757'}}>
                    RVSL GLO USSD Charge for 1008 to 1703
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text>{'-'}</Text>
                  <Image source={require('../images/naira.png')} />
                  <Text style={{color: '#AE3D0B', paddingRight: 22}}>
                    5,000
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WalletScreen;
