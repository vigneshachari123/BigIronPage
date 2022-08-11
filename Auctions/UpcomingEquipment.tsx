import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {
  EquipmentisSelectedState,
  UpcomingEquipmentAuction,
} from '../store/Index';
import UpcomingEquipmentItems from './UpcomingEquipmentItems';
import {useSnapshot} from 'valtio';
import TextComponent from '../components/TextComponent';

function UpcomingEquipment() {
  const snap = useSnapshot(EquipmentisSelectedState);

  if (snap.selected) {
    return (
      <View style={styles.container}>
        <Text style={styles.textHolder}>Upcoming Equipment Auctions</Text>
        <FlatList
          data={UpcomingEquipmentAuction}
          keyExtractor={(item, index) => index.toString()}
          renderItem={itemData => <TextComponent itemData={itemData} />}
        />
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  textHolder: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 6,
  },
});
export default UpcomingEquipment;
