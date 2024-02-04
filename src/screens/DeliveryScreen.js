import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../../features/restaurentSlice';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

// import MapView, {Marker} from 'react-native-maps';

const DeliveryScreen = () => {
    const currRestaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    console.log('currRestaurant >>',currRestaurant);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.closeIconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                 <Icon name="close" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{color:'white', fontSize:18}}>Order Help</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.estimatedArrivalContainer}>
            <View style={styles.estimatedTime}>
                <View>
                    <Text style={{color:'gray', fontSize:18}}>Estimated Arrival</Text>
                    <Text style={{fontSize:30, fontWeight:'700'}}>45-55 Minutes</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/fls'
                    }}
                    style={styles.riderImage}
                />
            </View>
            {/* 25.50343628949097, 85.37931603727836 */}
            <Progress.Bar indeterminate={true}  color="#00CCBB" width={150} />
            <Text style={{color:'gray', marginVertical:10}}>Your Order at {currRestaurant.title} is being prepared</Text>
            {/* <MapView
                initialRegion={{
                    latitude: '25.50343628949097',
                    longitude: '85.37931603727836',
                    latitudeDelta: '0.005',
                    longitudeDelta: '0.005'
                }} 
                mapType='mutedStandard'
                style={styles.map}
             >
                <Marker
                coordinate={{
                    latitude: '25.50343628949097',
                    longitude: '85.37931603727836'
                }}
                title={currRestaurant.title}
                description={currRestaurant.short_description}
                identifier='origin'
                pinColor='#00CCBB'
                 />
             </MapView> */}

           
        </View>
        
      </SafeAreaView>
      <Animatable.Image
            source={require('../../assets/anim.gif')}
            animation="slideInUp"
            iterationCount={1}
            style={styles.animImage}
         />
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({
    container :{
        backgroundColor:'#00CCBB',
        flex:1,   
    },
    safeAreaContainer:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    riderImage: {
        height:80,
        width:80
    },
    closeIconContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:20
    },
    estimatedArrivalContainer:{
        backgroundColor:'#fff',
        padding:20,
        margin:20,
        borderRadius:20,
    },
    estimatedTime:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    animImage:{
        height:500,
        width:500,
        resizeMode:'contain',
        alignSelf:'center',
    }
})