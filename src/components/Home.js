import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MIcon_1 from "react-native-vector-icons/MaterialCommunityIcons"
import HomeScreen from './screens/HomeScreen';
import Search from './screens/Search';
import FIcon from "react-native-vector-icons/FontAwesome"
import Favourite from './screens/Favourite';
import Profile from './screens/Profile';


const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>

      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        title: 'Home',
        tabBarIcon: () => {
          return <MIcon_1 name='home-outline' color={"#000"} size={30} />;
        }
      }} />
      <Tab.Screen name="Search" component={Search} options={{
        title: 'Search',
        tabBarIcon: () => {
          return <FIcon name='search' color={"#000"} size={25} />;
        }
      }} />
      <Tab.Screen name="Favourite" component={Favourite} options={{
        title: 'Favourite',
        tabBarIcon: () => {
          return <FIcon name='heart-o' color={"#000"} size={25} />;
        }
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        title: 'Profile',
        tabBarIcon: () => {
          return <FIcon name='user-o' color={"#000"} size={25} />;
        }
      }} />

    </Tab.Navigator>
  )
}
const Home = () => {
  return (
    <View style={styles.container}>
      <TabScreen style={styles.tab} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  tab: {
    bottom: 0,
  }
})