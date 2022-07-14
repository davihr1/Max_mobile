import React from "react";
import { View, SafeAreaView, StyleSheet, Image, ScrollView, Animated } from 'react-native';


export default function Header () {
    <Animated.View 
style={[
  styles.header,
  {
    height: scrollY.interpolate({
      inputRange:[10, 120, 145],
      outputRange:[100, 10, 0],
      extrapolate: 'clamp'
    }),
    opacity: scrollY.interpolate({
      inputRange:[1, 80, 170],
      outputRange: [1, 0.5,0],
      extrapolate: 'clamp'
    })
  }
 ]}
>
 <Animated.Image
 source={{ri: 'https://maxstar.vercel.app/assets/HBO_Max_Logo.svg.png',}}
 style={{
   width: scrollY.interpolate({
     inputRange:[0, 120],
     outputRange:[230, 90],
     extrapolate: 'clamp'
   }),
   height: 90
 }}
 resizeMode="contain"
 />
<Image
style={{width: 250, height: 40, marginBottom: 50}}
source={{
uri: 'https://maxstar.vercel.app/assets/HBO_Max_Logo.svg.png',
}}

/>
</Animated.View>
}