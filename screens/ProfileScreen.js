import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button onPress={() =>  navigation.navigate('Faq')} title="Faq" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
