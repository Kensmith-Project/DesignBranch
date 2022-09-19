import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export default interface GeneralStackScreenProps{
    navigation?: NativeStackNavigationProp<any, any>;
    route?: RouteProp<any>;
}