import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../../features/restaurentSlice'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { selectBasketItems, selectTotalAmount } from '../../features/basketSlice'
import DishRow from '../components/DishRow'

const BasketScreen = () => {
    const selectedRestaurant = useSelector(selectRestaurant);
    const cartItems = useSelector(selectBasketItems);
    const totalCartValue = useSelector(selectTotalAmount);
    
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
            <View />
            <View>
                <Text style={{fontSize:20, fontWeight:'700'}}>Basket</Text>
                <Text style={{color:'gray'}}>{selectedRestaurant.title}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='cancel' size={32} color='#00CCBB' />
            </TouchableOpacity>
        </View>

        {/* Estimated Delivery Time */}

        <View style={styles.deliveryTimeContainer}>
            <View style={styles.profileImgContainer}>
                <Image style={styles.profileImg} source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFvYj7VGzTZe3r7fVip0nof1RvfsVJ8-6AuPpcLFlIA&s'}}  />
                <Text>Deliver in 50-75 min</Text>
            </View>
          <TouchableOpacity>
            <Text style={{color:'#00CCBB'}}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Basket Details */}

        <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.menuItem}
        >
          {
            cartItems?.map((dish) => (
                <DishRow key={dish.id} dish={dish} cartItems={true} />
            ))
          }
        </ScrollView>
        
        <View style={styles.paymentDetail}>
          <View style={styles.paymentDetailChild}>
            <Text style={styles.grayText}>Subtotal</Text>
            <Text style={styles.grayText}>₹ {totalCartValue || 0}</Text>
          </View>
          <View style={styles.paymentDetailChild}>
            <Text style={styles.grayText}>Delivery Fee</Text>
            <Text style={styles.grayText}>₹ 40</Text>
          </View>
          <View style={styles.paymentDetailChild}>
            <Text style={{fontWeight:'700'}}>Order Total</Text>
            <Text style={{fontWeight:'700'}}>₹ {totalCartValue + 40 || 0}</Text>
          </View>

          <TouchableOpacity disabled={cartItems.length == 0} onPress={() => navigation.navigate('PreparingOrder')} style={[styles.placeOrderContainer, cartItems.length == 0 && {backgroundColor: 'gray'}]}>
            <Text style={[styles.placeOrderText]}>Place Order</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#eee",
        flex:1,
       },
       headerContainer: {
        flexDirection:'row',
        backgroundColor:'white',
        padding:15,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#00CCBB',
        borderBottomWidth:1,
       },
       profileImg:{
        height:40,
        width:40,
        borderRadius: 99,
        marginRight:15
    
       },
       deliveryTimeContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:10,
        marginTop:20,
        backgroundColor:'white',
       },
       profileImgContainer: {
        flexDirection:'row',
        alignItems:'center',
       },
       menuItem:{
        backgroundColor:'#eee',
        marginTop:20,
    },
    paymentDetail:{
      backgroundColor: 'white',
      padding:20,
      paddingTop:7,
      borderTopColor:'#00CCBB',
      borderTopWidth:1.3,
    },
    paymentDetailChild:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:7,
    },
    grayText: {
      color:'gray',
      fontSize:15,
    },
    placeOrderContainer:{
      backgroundColor:'#00CCBB',
      padding:17,
      borderRadius:15,
      marginVertical:15,
    },
    placeOrderText:{
      color:'white',
      textAlign:'center',
      fontSize:19,
      fontWeight:'600'
    }

})