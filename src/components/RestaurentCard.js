import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCurrentRestaurant } from '../../features/restaurentSlice';


const RestaurentCard = ({item}) => {
const navigation = useNavigation();
const dispatch = useDispatch();
const {id,imgUrl,address,title,dishes,rating,short_description,genre,long,lat } = item;


const handleOnPress = () => {
    dispatch(setCurrentRestaurant(item));
    navigation.navigate('Restaurent',{item:item})
}
  return (
    <TouchableOpacity onPress={() => handleOnPress()} style={styles.container}>
        <Image source={{uri: imgUrl}} style={styles.resImage} />
        <View style={styles.restaurentDetailContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.ratingContainer}>
                <Icon name='star' size={22} color='#00CCBB' />
                <Text style={{color:'#00CCBB'}}>{rating}</Text>
                <Text style={{color:'gray'}}>{genre}</Text>
            </View>
            <View style={styles.addressContainer}>
                <Icon name='place' size={22} color='#00CCBB' />
                <Text style={{color:'gray'}}>Nearby . <Text>{address}</Text></Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurentCard

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    restaurentDetailContainer: {
        padding:10,
        overflow:'hidden',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems:'center',
        gap:5,
        marginTop:5,
    },
    resImage: {
        width:300,
        height:200,
        resizeMode:'cover',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    addressContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
        marginVertical:5,
    },
    titleText: {
        fontWeight: '700',
        fontSize:20,
    }
})