import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar, Button} from 'react-native-paper';
import {Colors} from '../colors/Color';
export default function ProfileScreen() {
  return (
    <View style={styles.mainConatiner}>
      <View
        style={{
          alignItems: 'flex-end',
          marginTop: 10,
          marginRight: 10,
        }}>
        <View style={styles.profileHeaderTextContainer}>
          <Text style={styles.profileHeaderText}>My Profile</Text>
        </View>
      </View>
      <View style={styles.imageHolder}>
        <Image
          source={require('../images/ProfileAvatar.png')}
          resizeMode={'contain'}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.profileDefails}>
        <Text style={styles.nameHolder}>VIGHNESH DINESH ACHARI</Text>
        <Text>ID :767676409</Text>
      </View>
      <View style={styles.detailsConatiner}>
        <Text style={styles.informationHeader}>Company </Text>
        <Text style={styles.informationDetails}>Goa Vega</Text>
        <Text style={styles.informationHeader}>Email </Text>
        <Text style={styles.informationDetails}>
          vignesh.achari@goavega.com
        </Text>
        <Text style={styles.informationHeader}>Title </Text>
        <Text style={styles.informationDetails}>
          Associate Softwere Engineer-Trainee
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
  },
  detailsConatiner: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.gray,
  },
  informationHeader: {
    fontSize: 25,
    paddingLeft: 10,
    color: Colors.yellow,
  },
  informationDetails: {
    paddingLeft: 10,
    color: '#fff',
  },
  nameHolder: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  profileDefails: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeaderText: {
    fontSize: 20,
    padding: 4,
  },
  profileHeaderTextContainer: {
    backgroundColor: Colors.yellow,
    borderRadius: 10,
  },
  imageHolder: {
    alignItems: 'center',
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: '#000',
    backgroundColor: 'red',
  },
});
