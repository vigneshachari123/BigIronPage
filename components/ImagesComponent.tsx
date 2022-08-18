import React, {useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, View} from 'react-native';
import {Colors} from '../colors/Color';
import {
  EquipmentisSelectedState,
  LiveStockisSelectedState,
  MakeOfferSelect,
  RealEstateisSelectedState,
} from '../store/Index';
const ImageComponent = () => {
  const EquipmentSelectHandler = () => {
    EquipmentisSelectedState.selected = true;
    RealEstateisSelectedState.selected = false;
    LiveStockisSelectedState.selected = false;
    MakeOfferSelect.selected = false;
  };

  const RealEstateSelectHandler = () => {
    RealEstateisSelectedState.selected = true;
    EquipmentisSelectedState.selected = false;
    LiveStockisSelectedState.selected = false;
    MakeOfferSelect.selected = false;
  };

  const LiveStockisSelectedHandler = () => {
    LiveStockisSelectedState.selected = true;
    RealEstateisSelectedState.selected = false;
    EquipmentisSelectedState.selected = false;
    MakeOfferSelect.selected = false;
  };

  const MakeOfferisSelected = () => {
    MakeOfferSelect.selected = true;
    LiveStockisSelectedState.selected = false;
    RealEstateisSelectedState.selected = false;
    EquipmentisSelectedState.selected = false;
  };

  return (
    <View>
      <View style={Styles.imageConatiner}>
        <Pressable onPress={EquipmentSelectHandler}>
          <Image
            source={require('../images/EquipmentIcon.png')}
            resizeMode={'contain'}
            style={Styles.imageStyle}
          />
        </Pressable>
        <Pressable onPress={RealEstateSelectHandler}>
          <Image
            source={require('../images/RealEstateIcon.png')}
            resizeMode={'contain'}
            style={Styles.imageStyle}
          />
        </Pressable>
        <Pressable onPress={LiveStockisSelectedHandler}>
          <Image
            source={require('../images/LiveAuctionIcon.png')}
            resizeMode={'contain'}
            style={Styles.imageStyle}
          />
        </Pressable>
        <Pressable onPress={MakeOfferisSelected}>
          <Image
            source={require('../images/MakeOfferIcon.png')}
            resizeMode={'contain'}
            style={Styles.imageStyle}
          />
        </Pressable>
      </View>
      <View style={Styles.horizontalLine}></View>
    </View>
  );
};

const Styles = StyleSheet.create({
  imageConatiner: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 60,
  },

  horizontalLine: {
    height: 6,
    backgroundColor: Colors.yellow,
    marginTop: 3,
  },
});

export default ImageComponent;
