import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useSnapshot} from 'valtio';
import {RealEstateisSelectedState} from '../store/Index';
import {RealEstateData} from './../store/Index';
import TextComponent from './../components/TextComponent';
import {Colors} from '../colors/Color';

function RealEstate() {
  const snap = useSnapshot(RealEstateisSelectedState);

  if (snap.selected) {
    return (
      <View>
        <Text style={styles.headerText}>Upcoming Reality Auctions </Text>
        <FlatList
          data={RealEstateData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={itemData => <TextComponent itemData={itemData} />}
        />
        <Text style={styles.headerText}>Up for Sale</Text>
        <View style={styles.imageandtextContainer}>
          <View>
            <Text style={styles.textHolder}>Real Estate Up for Sale</Text>
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
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: '#000',
    padding: 5,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
  },
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

  textHolder: {
    margin: 5,
    padding: 8,
    color: '#fff',
  },
  itemsText: {
    color: Colors.yellow,
    paddingLeft: 10,
  },
});

export default RealEstate;
