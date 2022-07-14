import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, ScrollView, Animated, Text } from 'react-native';

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
 return (
   <SafeAreaView style={styles.main} >
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
      source={{uri: 'https://play.hbomax.com/assets/images/branding/desktop/hbomax/splashscreen.png',}}
      style={{
        width: scrollY.interpolate({
          inputRange:[0, 120],
          outputRange:[230, 90],
          extrapolate: 'clamp'
        }),
        height: 90
      }}
      resizeMode='contain'
      />
    <Image
     style={{width: 255, height: 40, marginBottom: 47}}
    source={{
    uri: 'https://play.hbomax.com/assets/images/branding/desktop/hbomax/splashscreen.png',
    }}
    
    />
     </Animated.View>

     <ScrollView 
     scrollEventThrottle={16}
     onScroll={Animated.event([{
       nativeEvent: {
         contentOffset: { y: scrollY }
       },
     }],
     { useNativeDriver: false })}
     >

      <View style={styles.destaque}>
      <Image source={{uri: 'https://hbomax-images.warnermediacdn.com/2021-02/ZSJL_16x9_3.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=960'}}
       style={{width: 400, height: 250, borderRadius: 5, borderColor: "#ffee", borderWidth: 1}} />
      </View>

      <View style={styles.grups}>
      <ScrollView horizontal>
    <Image style={{width: 150, height: 90, marginRight: 3, backgroundColor: '#131380', borderRadius: 10}} source={{uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=400&aspectRatio=1.78&format=png'}} />
    <Image style={{width: 150, height: 90, marginRight: 3, backgroundColor: '#131380', borderRadius: 10}} source={{uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=400&aspectRatio=1.78&format=png'}} />
    <Image style={{width: 150, height: 90, marginRight: 3, backgroundColor: '#131380', borderRadius: 10}} source={{uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=400&aspectRatio=1.78&format=png'}} />
    <Image style={{width: 150, height: 90, marginRight: 3, backgroundColor: '#131380', borderRadius: 10}} source={{uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=400&aspectRatio=1.78&format=png'}} />
</ScrollView>
      </View>

      <View style={styles.boxone}>
      <Text style={{fontSize: 17, color: "#fff", marginBottom: 3}}>Recomendados</Text>
        <ScrollView horizontal>

            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/yPuyVIbMuz4V9CHIvuLy6IzPjby.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/9nnQIvKliuKndMHsoLTiTShuY9l.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/y47TQybIv7GqrrAkmnt6jFciP7a.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/tzFAboMUGJKoPQEtlxfxbbYsSWa.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fBIzAD9ZDdNVNdsNPdsMUfrM3fI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/qNAPgepJ4NHNA74ThVsxQEOUceJ.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
        </ScrollView>
      </View>

      <View style={styles.boxone}>
      <Text style={{fontSize: 17, color: "#fff", marginBottom: 3}}>Lançamento</Text>
        <ScrollView horizontal>

            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cdkyMYdu8ao26XOBvilNzLneUg1.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/boIgXXUhw5O3oVkhXsE6SJZkmYo.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
        </ScrollView>
      </View>

      <View style={styles.boxone}>
      <Text style={{fontSize: 17, color: "#fff", marginBottom: 3}}>Originais Max</Text>
        <ScrollView horizontal>

            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/y47TQybIv7GqrrAkmnt6jFciP7a.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/5mi3aRl16yKmfpQJMzvqN5TXkdA.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
        </ScrollView>
      </View>

      <View style={styles.boxend}>
      <Text style={{fontSize: 17, color: "#fff", marginBottom: 3}}>Animados</Text>
        <ScrollView horizontal>

            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/y47TQybIv7GqrrAkmnt6jFciP7a.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/5mi3aRl16yKmfpQJMzvqN5TXkdA.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
            <Image style={{width: 100, height: 150, marginRight: 3}} source={{uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg'}} />
        </ScrollView>
      </View>
     </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#131340'
    },
  header:{
    backgroundColor: '#131341',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxone: {
    backgroundColor: 'transparent',
    margin: 7,
    borderRadius: 5,
    height: 200,
  },
  boxend: {
    backgroundColor: 'transparent',
    margin: 7,
    borderRadius: 5,
    height: 200,
    marginBottom: 25
  },
  destaque: {
   height: 300,
   backgroundColor: 'transparent',
   borderRadius: 4,
   alignItems: 'center',
   justifyContent: 'center'
  },
  grups: {
    height: 90,
    width: 400,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 5
  }
});
