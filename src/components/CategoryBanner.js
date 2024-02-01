import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryBanner = ({title, bannerImg}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Image source={{uri : bannerImg}} style={styles.bannerImage}/>
        <Text style={styles.bannerTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryBanner

const styles = StyleSheet.create({
    container: {
        position:'relative',
        marginHorizontal:5,
    },
    bannerImage:{
        width:90,
        height: 90,
        resizeMode:'cover',
        borderRadius:15,
        position:'relative',
    },
    bannerTitle:{
        color:'white',
        position:'absolute',
        top:65,
        left:10,
        fontWeight:'600',
        fontSize:16,
    }
})