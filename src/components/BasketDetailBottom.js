import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectTotalAmount, selectTotalItemInBasket } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketDetailBottom = () => {
  const totalAmount = useSelector(selectTotalAmount);
  const totalItemCount = useSelector(selectTotalItemInBasket);
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Basket')} style={styles.cartDetails}>
      <View style={styles.itemCountTextContainer}>
        <Text style={styles.itemCountText}>{totalItemCount}</Text>
      </View>
      <Text style={styles.cartDetailText}>View Basket</Text>
      <Text style={styles.cartDetailText}>₹ {totalAmount || 0}</Text>
    </TouchableOpacity>
  )
}

export default BasketDetailBottom

const styles = StyleSheet.create({
    cartDetails:{
        position:'absolute',
        bottom:10,
        alignSelf:'center',
        backgroundColor:'#00CCBB',
        width:'85%',
        paddingVertical:20,
        paddingHorizontal:15,
        paddingRight:20,
        borderRadius:13,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
       },
       itemCountTextContainer: {
          backgroundColor:'#01A296',
          width:30,
          paddingVertical:5,
          borderRadius:7,
       },
       itemCountText:{
        color:'white',
        fontWeight:'700',
        fontSize:18,
        textAlign:"center",
       },
       cartDetailText:{
        color:'white',
        fontSize:20,
        fontWeight:'700',
       }
})