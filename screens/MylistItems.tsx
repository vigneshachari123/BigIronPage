import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MyListType} from '../model/Model';
import {Colors} from '../colors/Color';
interface itemProp {
  itemData: {
    item: MyListType;
  };
}

function Mylistitems({itemData}: itemProp) {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.textHolder}>{itemData.item.title}</Text>
      <View style={styles.imageHolder}>
        <Image
          source={require('../images/Right_Black.png')}
          resizeMode={'contain'}
          style={styles.imageStyele}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    margin: 7,
    padding: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 8,
    justifyContent: 'space-between',
    backgroundColor: Colors.gray,
  },
  textHolder: {
    padding: 6,
    fontSize: 17,
    color: '#fff',
  },
  imageHolder: {
    backgroundColor: Colors.yellow,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 5,
  },
  imageStyele: {
    height: 16,
  },
});

export default Mylistitems;
