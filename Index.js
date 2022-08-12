import Constants from 'expo-constants';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Index() {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://pawme.epizy.com/' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});