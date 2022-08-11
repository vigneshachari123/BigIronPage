import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

function Notification() {
  return (
    <View style={styles.container}>
      <AwesomeIcon
        name="commenting-o"
        color="#fff"
        size={25}
        style={styles.iconStyle}
      />

      <AwesomeIcon
        name="map-marker"
        color="#fff"
        size={25}
        style={styles.iconStyle}
      />
      <AwesomeIcon
        name="bell-o"
        color="#fff"
        size={25}
        style={styles.iconStyle}
      />
      {/* <Icon
        name="notifications-outline"
        size={20}
        color={'#fff'}
        style={{marginRight: 10}}
      /> */}
      {/* <Icon
        name="document-text-outline"
        size={20}
        color={'#fff'}
        style={{marginRight: 10}}
      /> */}
      {/* <Icon
        name="location-outline"
        size={20}
        color={'#fff'}
        style={{marginRight: 10}}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
    // paddingRight: 10,
  },
  iconStyle: {
    height: 40,
    textAlign: 'center',
    width: 45,
  },
});
export default Notification;
