import { ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Icon } from 'react-native-elements';
import DishRow from '../components/DishRow';

const RestaurentScreen = () => {
    const { params } = useRoute();
    const navigation = useNavigation();
    const {id,imgUrl,address,title,dishes,rating,short_description,genre,long,lat } = params.item;
    console.log('imgUrl >>', imgUrl);
  return (
    <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.container}
    >
      <ImageBackground style={styles.imageBg} source={{uri : imgUrl}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
            <Icon name="arrow-back" size={28} color='#00CCBB'/>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.restaurentInfo}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.locationandRatingContainer}>
                <View style={styles.locationandRatingChildContainer}>
                    <Icon name="star" size={22} color='#00CCBB'/>
                    <Text style={{color:'#00CCBB'}}>{rating}</Text>
                    <Text style={{color:'gray'}}>{genre}</Text>
                </View>
                <View style={styles.locationandRatingChildContainer}>
                    <Icon name="place" size={22} color='gray'/>
                    <Text style={{color:'gray'}}>Nearby .</Text>
                    <Text style={{color:'gray'}}>{address}</Text>
                </View>
            </View>
            <Text style={{color:'gray'}}>{short_description.length > 100 ? short_description.substring(0,100) : short_description}...</Text>
      </View>
      <TouchableOpacity style={styles.extraInfo}>
                <View style={styles.extraInfoChild}>
                    <Icon name="help-outline" size={22} color='gray'/>
                    <Text style={styles.infoText}>Have a Food allergy ?</Text>
                </View>
                <Icon style={{marginRight: 10}} name="keyboard-arrow-right" size={28} color='#00CCBB'/>
      </TouchableOpacity>

      <Text style={styles.menuText}>Menu</Text>
      <View style={styles.menuItem}>
          {
            dishes.map((dish) => (
                <DishRow key={dish.id} dish={dish} />
            ))
          }
      </View>
    </ScrollView>
  )
}

export default RestaurentScreen

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#eee",
        flex:1,
    },
    imageBg:{
        width:'100%',
        height: 210,
        position:'relative',
    },
    restaurentInfo:{
        padding:15,
        backgroundColor:'white'
    },
    titleText: {
        fontSize:25,
        fontWeight:'700',

    },
    backArrow: {
        backgroundColor:'#fff',
        position:'absolute',
        borderRadius:99,
        padding:4,
        top:20,
        left:15,
    },
    locationandRatingContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        marginVertical:5,

    },
    locationandRatingChildContainer: {
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    extraInfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:13,
        borderTopWidth:0.2,
        color:'gray',
        backgroundColor:'#fff'
        
    },
    extraInfoChild:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
    },
    infoText:{
        marginLeft:20,
        fontWeight:'600',
    },
    menuText:{
        marginTop:15,
        fontWeight:'700',
        fontSize:20,
        marginBottom:10,
        paddingHorizontal:13
    },
    menuItem:{
        backgroundColor:'#eee',
    }
})