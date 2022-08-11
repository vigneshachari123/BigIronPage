import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../colors/Color';

function TodaysAution() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Today's Auctions</Text>
      <View style={styles.imageandtextContainer}>
        <View>
          <Text style={styles.livestockText}>Live stock New Demo Auction</Text>
          <Text style={styles.itemsText}>17 items</Text>
        </View>
        <View style={styles.imageHolder}>
          <Image
            source={require('../images/Right_Black.png')}
            resizeMode={'contain'}
            style={styles.imageStyele}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellow,
  },
  headerText: {
    margin: 6,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.black,
  },
  imageHolder: {
    margin: 5,
    backgroundColor: Colors.yellow,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 5,
  },
  imageStyele: {
    height: 16,
  },
  imageandtextContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: Colors.gray,
    marginHorizontal: 10,
    borderRadius: 6,
  },

  livestockText: {
    paddingTop: 5,
    paddingLeft: 10,
    color: '#fff',
  },
  itemsText: {
    color: Colors.yellow,
    paddingLeft: 10,
  },
});

export default TodaysAution;
