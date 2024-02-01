import { FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-elements';
import categoryBannerData from '../appData/CategoryBannerData';
import CategoryBanner from '../components/CategoryBanner';
import CategoryHeading from '../components/CategoryHeading';
import RestaurentCard from '../components/RestaurentCard';
import restaurentData from '../appData/RestaurentData';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image style={styles.profileImg} source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFvYj7VGzTZe3r7fVip0nof1RvfsVJ8-6AuPpcLFlIA&s'}}  />
        <View style={styles.currentLocationParentContainer}>
          <Text style={styles.deliverText}>Deliver now!</Text>
          <View style={styles.currentLocationChildContainer}>
            <Text style={styles.locationText}>Current Location</Text>
            <Icon name="expand-more" size={28} color='#00CCBB'/>
          </View>
        </View>
        <Icon name="person" size={28} color='#00CCBB' />
      </View>

      {/* SearchBar */}
      <View style={styles.searchBarContainer}> 
        <View style={styles.searchInputContainer}>
          <Icon name='search' size={28} color='gray' />
          <TextInput placeholder='Restaurent & Cuisines'/>
        </View>
        <Icon name="tune" size={28} color='#00CCBB'/>
      </View>

      {/* Catgory banner */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.categoryBannerContainer} 
        contentContainerStyle={{gap:10}}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoryBannerData}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return <CategoryBanner  key={item.id} title={item.title} bannerImg={item.uri}  />
          }}
        />

        {/* Offers Near You */}

        <CategoryHeading title="Offers near you!" description="Why not support your local restaurent tonight!" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurentData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{gap:10}}
          renderItem={({item}) => {
            return <RestaurentCard key={item.id} item={item} />
          }}
        />
        <CategoryHeading title="Featured" description="Paid placement from our partners" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurentData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{gap:10}}
          renderItem={({item}) => {
            return <RestaurentCard key={item.id} item={item} />
          }}
        />
        <CategoryHeading title="Tasty Discount" description="Yummy discount on Indian cuisine!" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurentData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{gap:10}}
          renderItem={({item}) => {
            return <RestaurentCard key={item.id} item={item} />
          }}
        />
        <View style={{height:30}} />
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    flex:1,
   },
   headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,

   },
   profileImg:{
    height:50,
    width:50,
    borderRadius: 99,
    marginRight:15

   },
   currentLocationParentContainer:{
    flex:1
   },
   currentLocationChildContainer:{
    flexDirection:'row',
    alignItems:'center',
   },
   deliverText:{
    color:'gray',
   },
   locationText:{
    fontSize:20,
    fontWeight:'600',
   },
   searchBarContainer:{
    flexDirection:'row',
    alignItems: 'center',
    alignContent:'center',
    padding:10
   },
   searchInputContainer:{
    flexDirection:'row',
    alignItems: 'center',
    flex:1,
    backgroundColor:'#eee',
    paddingVertical:10,
    paddingHorizontal:15,
    marginRight:10,
    borderRadius:20,
   },
   categoryBannerContainer:{
    backgroundColor:'#eee',
    marginTop:10,
    padding:10,
   }
})