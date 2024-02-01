import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const CategoryHeading = ({title,description}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View>
             <Text style={styles.heading}>{title}</Text>
             <Text style={styles.description}>{description}</Text>
        </View>
        <Icon name="arrow-forward" size={28} color='#00CCBB' />
    </TouchableOpacity>
  )
}

export default CategoryHeading

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        justifyContent:'space-between'
    },
    heading:{
        color:'black',
        fontSize:22,
        fontWeight:'700',
        marginBottom:2,
    },
    description:{
        color:'gray'
    }
})