import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../colors/Color';
import {useSnapshot} from 'valtio';
import {MakeOfferSelect} from '../store/Index';

function MakeOffer() {
  const snap = useSnapshot(MakeOfferSelect);

  if (snap.selected) {
    return (
      <View>
        <Text style={Styles.HeaderText}>2012 John Deere S67 4WD COMBINE</Text>
        <Image
          source={require('../images/makeOffer.png')}
          resizeMode={'contain'}
          style={Styles.imageStyle}
        />
        <View style={Styles.textContainer}>
          <Text style={Styles.textStyle}>VIEW DETAILS</Text>
          <Text style={Styles.textStyle}>BUY NOW </Text>
          <Text style={Styles.textStyle}>MAKE A OFFER</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
}

const Styles = StyleSheet.create({
  imageStyle: {
    height: 250,
    marginLeft: 40,
    marginBottom: 10,
  },
  HeaderText: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    color: Colors.black,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    padding: 8,
    backgroundColor: Colors.yellow,
    marginLeft: 10,
    borderRadius: 8,
  },
});

export default MakeOffer;
