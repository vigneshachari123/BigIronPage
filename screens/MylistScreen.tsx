import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Mylistitems from './MylistItems';
import {MyList} from '../store/Index';

export default function MylistScreen() {
  return (
    <View>
      <FlatList
        data={MyList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemData => <Mylistitems itemData={itemData} />}
      />
    </View>
  );
}
