import React from 'react';
import {View, StyleSheet, Text, SafeAreaView,
     TextInput, ScrollView, Image} from 'react-native';


export default function SearchScreen() {
        const [text, onChangeText] = React.useState('Disney, Marvel,Dc,Cartoon Network');
      
        return (
          <SafeAreaView style={{backgroundColor: '#131330', flex: 1,}}>
            <View style={styles.header}>
                <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            </View>

            <ScrollView style={styles.colletion}>
            <Image source={{uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/849CD3BFC6C39AEDAC3924E0EB36369A38A16AAE1B9B041B646BEB7063978673/scale?width=400&aspectRatio=1.78&format=png'}}
            style={{width: 400, height: 250, borderRadius: 5, borderColor: "#ffee", borderWidth: 1, margin: 7}} />
            <Image source={{uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AF6131CD749FD32EF6FBA1F175C27ED7C187931B871FC242E7CFBE229B23D60C/scale?width=400&aspectRatio=1.78&format=png'}}
            style={{width: 400, height: 250, borderRadius: 5, borderColor: "#ffee", borderWidth: 1, margin: 7}} />
            <Image source={{uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/856E54FF4065A22A0979F78A9A9C6730496FD0052AA25DC114698D6353D464C5/scale?width=400&aspectRatio=1.78&format=png'}}
            style={{width: 400, height: 250, borderRadius: 5, borderColor: "#ffee", borderWidth: 1, margin: 7}} />
            <Image source={{uri: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D4330FE6F445EC74D28A70D9F3D4CB471CD1220559EC00C5135D61BAE8B46F1/scale?width=400&aspectRatio=1.78&format=png'}}
            style={{width: 400, height: 250, borderRadius: 5, borderColor: "#ffee", borderWidth: 1, margin: 7}} />
            <Image source={{uri: 'https://hbomax-images.warnermediacdn.com/2022-03/rick_and_morty.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com'}}
            style={{width: 400, height: 250, borderRadius: 5, borderColor: "#ffee", borderWidth: 1, margin: 7}} />
            <Image source={{uri: 'https://hbomax-images.warnermediacdn.com/2022-03/adventure_time.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com'}}
            style={{width: 400, height: 250, borderRadius: 5, borderColor: "#ffee", borderWidth: 1, margin: 7, marginBottom: 90}} />
            </ScrollView>

          </SafeAreaView>
        );
      };
  
  const styles = StyleSheet.create({
    header: {
        marginTop: 90,
    },
    input: {
      height: 60,
      fontSize: 15,
      margin: 12,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      borderColor: '#131390',
      color: '#000',
      backgroundColor: '#FFFFFF'
    },
    colettion: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 450,
        height: 500,
        }
  });