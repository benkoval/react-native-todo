import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import Header from './components/Header';
const headerTitle = 'To Do';
// after status bar, replace the <Text> with
<View style={styles.centered}>
  <Header title={headerTitle} />
</View>;
// add styles
centered: {
  alignItems: 'center';
}