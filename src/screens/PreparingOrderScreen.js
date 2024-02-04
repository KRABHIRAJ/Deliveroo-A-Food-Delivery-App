import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 4000)
    }, [])
  return (
    <View style={styles.container}>
        <Animatable.Image
            source={require('../../assets/anim.gif')}
            animation="slideInUp"
            iterationCount={1}
            style={styles.animImage}
         />

         <Animatable.Text
            animation="slideInUp"
            iterationCount={1}
            style={{color:'white', fontWeight:'600', fontSize:18}}
         >
            Waiting for Restaurant to accept your order!
         </Animatable.Text>

         <Progress.Circle style={{marginTop:15}} size={60} color='white' indeterminate={true} />
    </View>
  )
}

export default PreparingOrderScreen

const styles = StyleSheet.create({
    container :{
        backgroundColor:'#00CCBB',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    animImage:{
        height:500,
        width:500,
        resizeMode:'contain'
    }
})