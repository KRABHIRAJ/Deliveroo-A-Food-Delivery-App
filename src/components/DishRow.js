import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFrombasket, selectBasketItems, selectBasketItemsWithId } from '../../features/basketSlice';

const DishRow = (props) => {
    const {description, id, image, name, price} = props.dish;
    const [pressed, setPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(selectBasketItems);
    const itemWithId = items.filter((item) => item.id === id);
    

    const addItemToBasket = () => {
        let tempCount = (itemWithId[0]?.count || 0) + 1;
        dispatch(addToBasket({description, id, image, name, price, count:tempCount}));
    }

    const removeItemFromBasket = () => {
        let tempCount = itemWithId[0]?.count -1;
        dispatch(removeFrombasket({description, id, image, name, price, count:tempCount}));
    }
  return (
    <View>
        <TouchableOpacity onPress={() => {setPressed(!pressed)}} style={[styles.container, pressed ? {marginBottom: 0, borderBottomLeftRadius:0, borderBottomRightRadius:0} : {marginBottom :10}]}>
            <View style={{flex:0.85}}>
                <Text style={styles.titleText}>{name}</Text>
                <Text style={styles.descriptionText}>{description.length >60 ? description.substring(0,60) : description}... </Text>
                <Text style={{fontWeight:'600'}}>₹ {price}</Text>
            </View>
            <Image style={styles.dishImg} source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SNhXzyDq9WgtT01PIN4A2DBGHk7UBv5Vy7-GdLlNXw&s'}} />
        </TouchableOpacity>
        {
            pressed &&
            <View style={styles.counterContainer}>
                <TouchableOpacity disabled={itemWithId?.length === 0 } onPress={() => removeItemFromBasket()}>
                    <Icon name="remove-circle" size={28} color={itemWithId?.length === 0 ? 'gray':'#00CCBB'}/>
                </TouchableOpacity>
               <Text>{itemWithId[0]?.count || 0}</Text>
               <TouchableOpacity onPress={() => addItemToBasket()}>
                    <Icon name="add-circle" size={28} color='#00CCBB'/>
                </TouchableOpacity>
            </View>
        }
    </View>
  )
}

export default DishRow

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:15,
        backgroundColor:'white',
        borderRadius:20,
        marginHorizontal:10,
        justifyContent:'space-between'

    },
    dishImg: {
        width:80,
        height:80,
        resizeMode:'cover',
        borderRadius:10,
    },
    titleText:{
        fontSize:18,
        fontWeight:'600',
    },
    descriptionText:{
        color:'gray'
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems:'center',
        marginHorizontal:10,
        paddingHorizontal:10,
        gap:10,
        backgroundColor:'white',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginBottom:10,
        paddingBottom:15,

    }
})