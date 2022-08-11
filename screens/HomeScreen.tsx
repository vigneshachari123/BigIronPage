import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useSnapshot} from 'valtio';
import LiveStock from '../Auctions/LiveStock';
import MakeOffer from '../Auctions/MakeOffer';
import RealEstate from '../Auctions/RealEstate';
import TodaysAution from '../Auctions/TodaysAution';
import UpcomingEquipment from '../Auctions/UpcomingEquipment';
import Home from '../components/Home';
import ImageComponent from '../components/ImagesComponent';
import {EquipmentisSelectedState} from '../store/Index';

function HomeScreen() {
  const snap = useSnapshot(EquipmentisSelectedState);

  return (
    <View style={styles.conatiner}>
      <Home />
      <TodaysAution />
      <ImageComponent />
      <UpcomingEquipment />
      <RealEstate />
      <LiveStock />
      <MakeOffer />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default HomeScreen;
