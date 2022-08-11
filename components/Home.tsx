import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {Colors} from './../colors/Color';
import Notification from './Notifications';

function Home() {
  return (
    <View style={styles.container}>
      <Notification />
      <Text style={styles.textColor}>Welcome</Text>
      <View style={styles.searchbarContainer}>
        <Searchbar placeholder="Search here..." value="" />
      </View>
      <View style={styles.horizonatLine}></View>
      <View style={styles.imageConatiner}>
        <Image
          source={require('../images/BigIron_Logo.png')}
          style={styles.imageStyle}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  textColor: {
    fontSize: 24,
    marginTop: 5,
    marginLeft: 12,
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
  searchbarContainer: {
    marginHorizontal: 10,
    marginTop: 5,
  },
});

export default Home;
