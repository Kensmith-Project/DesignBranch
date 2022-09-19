import React from 'react';
import { 
    View, FlatList, Text, NativeScrollEvent, 
    NativeSyntheticEvent, 
    ImageSourcePropType,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    GestureResponderEvent,
    Platform
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


export interface ImageCarouselProps{
    images?: ImageSourcePropType[];
    hideActions?: boolean;
    onBackPress?: (event?: GestureResponderEvent)=> void;
    onShare?: (event?: GestureResponderEvent)=> void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
    images, hideActions = false , onBackPress, onShare
})=>{

    // State
    const [active, setActive] = React.useState<number>(0);


    // Handlers
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>{
        let slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
        if (slide !== active){
            setActive(slide);
        }
    }

    // Helpers
    const renderItem = ({ item }: { item: ImageSourcePropType })=>{
        return(
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={item}
                    style={styles.image}
                >
                    { !hideActions &&
                        <View style={{ backgroundColor: 'rgba(0,0,0, 0.15)', flex: 1 }}>
                        </View>
                    }
                </ImageBackground>
            </View>
        )
    }


    return(
        <View style={styles.carousel}>

            {/** Image List */}
            <FlatList
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={images}
                renderItem={renderItem}
                horizontal={true}
                style={styles.flatList}
                onScroll={handleScroll}
                keyExtractor={(item,index)=> index + 'im'}
            />

            {/** Actions */}
            { !hideActions && 
                <View style={styles.actions}>
                    <TouchableOpacity onPress={onBackPress}>
                        <AntDesignIcon name='left' color={'white'} size={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onShare}>
                        <SimpleLineIcons name='share-alt' color={'white'} size={20}/>
                    </TouchableOpacity>
                </View>
            }

            {/** Info */}
            <View style={styles.indicatorSection}>
                {
                    images?.map((image, index)=>(
                        <Text 
                            key={'txt' + index}
                            style={index === active ? styles.activeIndicator : styles.indicator}
                        >
                            ⬤
                        </Text>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    carousel:{
        position: 'relative',
    },

    imageContainer:{
        height: 250,
        width: Dimensions.get('screen').width,
        padding: 0,
    },

    image:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },

    flatList:{
        flexGrow: 0
    },

    indicatorSection:{
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        alignSelf: 'center'
    },

    indicator:{
        color: '#888',
        margin: 3,
        fontSize: Platform.OS === 'android' ? Dimensions.get('screen').width/30 : Dimensions.get('screen').width/40
    },

    activeIndicator:{
        color: 'white',
        margin: 3,
        fontSize: Platform.OS === 'android' ? Dimensions.get('screen').width/30 : Dimensions.get('screen').width/40
    },

    actions:{
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        width: Dimensions.get('screen').width,
        justifyContent: 'space-between',
        padding: 15
    },

})

export default ImageCarousel;