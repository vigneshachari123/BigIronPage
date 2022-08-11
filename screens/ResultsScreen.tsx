import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {Colors} from '../colors/Color';
import ResultsImageComponent from '../components/ResultsImageComponent';
import TextComponent from '../components/TextComponent';
import {AuctionResults} from '../store/Index';

export default function ResultScreen() {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        value={''}
        style={styles.searchbarStyle}
      />
      <ResultsImageComponent />

      <FlatList
        data={AuctionResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemData => <TextComponent itemData={itemData} />}
        style={styles.flatlistContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  searchbarStyle: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  flatlistContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ffff',
  },
});
