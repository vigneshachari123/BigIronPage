import React from 'react';
import {FlatList, Text, View} from 'react-native';
import TextComponent from '../components/TextComponent';
import {LiveStockData, LiveStockisSelectedState} from '../store/Index';
import {useSnapshot} from 'valtio';

function LiveStock() {
  const snap = useSnapshot(LiveStockisSelectedState);

  if (snap.selected) {
    return (
      <View>
        <FlatList
          data={LiveStockData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={itemData => <TextComponent itemData={itemData} />}
        />
      </View>
    );
  } else {
    return null;
  }
}

export default LiveStock;
