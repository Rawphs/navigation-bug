import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export const ItemScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button onPress={() =>  navigation.navigate('ItemDetails', { slug: 'one'})} title="Item one" />
      <Button onPress={() =>  navigation.navigate('ItemDetails', { slug: 'two'})} title="Item two" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
