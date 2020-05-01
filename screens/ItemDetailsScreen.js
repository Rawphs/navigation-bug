import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ItemDetailsScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>Details about item {route.params.slug}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
