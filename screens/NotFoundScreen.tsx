import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {RootStackParamList} from '../types';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={styles.Link}
      >
        <Text style={styles.LinkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  LinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
