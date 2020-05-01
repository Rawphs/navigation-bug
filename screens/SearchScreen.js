import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Searching...</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});