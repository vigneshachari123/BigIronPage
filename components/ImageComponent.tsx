import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function ImageComponent() {
  return (
    <View style={Styles.imageConatiner}>
      <Image
        source={require('../images/EquipmentIcon.png')}
        resizeMode={'contain'}
        style={Styles.imageStyle}
      />
      <Image
        source={require('../images/RealEstateIcon.png')}
        resizeMode={'contain'}
        style={Styles.imageStyle}
      />
      <Image
        source={require('../images/LiveAuctionIcon.png')}
        resizeMode={'contain'}
        style={Styles.imageStyle}
      />
      <Image
        source={require('../images/MakeOfferIcon.png')}
        resizeMode={'contain'}
        style={Styles.imageStyle}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  imageConatiner: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 55,
  },
});
export default ImageComponent;
