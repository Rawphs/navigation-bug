import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FaqScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Questions and answers here</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
