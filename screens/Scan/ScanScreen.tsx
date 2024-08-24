import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ShipmentList from '../Home/components/ShipmentList';
import ShipmentItem from '../Home/components/ShipmenItem';

const ScanScreen = () => {
  //   const item = {
  //     addressFrom: 'ttt',
  //     id: 'la',
  //     stautus: 'c',
  //     origin: 'l',
  //     destination: 'ooo',
  //     addressTo: 'yyy',
  //   };

  return (
    <View>
      <Text>Scan</Text>
      <Text>Scan</Text>
      <Text>Scan</Text>
      <Text>Scan</Text>
      <ShipmentList />
      {/* <ShipmentItem item={item} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScanScreen;
