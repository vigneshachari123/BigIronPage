import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function ResultsImageComponent() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/EquipmentIcon.png')}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <Image
        source={require('../images/RealEstateIcon.png')}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <Image
        source={require('../images/MakeOfferIcon.png')}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <Image
        source={require('../images/LiveAuctionIcon.png')}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <Image
        source={require('../images/EquipmentIcon.png')}
        resizeMode="contain"
        style={styles.imageStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignContent: 'center',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  imageStyle: {
    height: 55,
    width: 50,
    marginHorizontal: 2,
  },
  imageStyle1: {
    height: 50,
    backgroundColor: 'red',
    marginHorizontal: 2,
  },
});
