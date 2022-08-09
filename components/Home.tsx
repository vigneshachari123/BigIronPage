import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {Colors} from './../colors/Color';
import ImageComponent from './ImageComponent';

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Welcome</Text>
      <Searchbar placeholder="Search here..." value="" />
      <View style={styles.horizonatLine}></View>
      <View style={styles.imageConatiner}>
        <Image
          source={require('../images/BigIron_Logo.png')}
          style={styles.imageStyle}
          resizeMode={'contain'}
        />
      </View>
      <ImageComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  textColor: {
    fontSize: 20,
    margin: 10,
    color: Colors.yellow,
  },
  horizonatLine: {
    height: 6,
    backgroundColor: Colors.yellow,
    marginTop: 15,
  },
  imageConatiner: {
    paddingVertical: 10,
  },
  imageStyle: {
    marginTop: 3,
    marginLeft: 90,
    height: 55,
  },
});

export default Home;
