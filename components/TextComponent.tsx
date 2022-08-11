import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from '../colors/Color';
function TextComponent({itemData}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.imageandtextContainer}>
        <View>
          <Text style={styles.livestockText}>{itemData.item.title}</Text>
          <Text style={styles.itemsText}>{itemData.item.item}</Text>
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
    backgroundColor: '#fff',
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
    margin: 3,
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

export default TextComponent;
