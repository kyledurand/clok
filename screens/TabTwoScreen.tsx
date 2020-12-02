import React, {useContext} from 'react';
import {StyleSheet, TextInput, ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {Context} from '../navigation/BottomTabNavigator';

export default function TabTwoScreen() {
  const {time, setTime} = useContext(Context);
  console.log({time, setTime});
  console.log('hi');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>thing below</Text>
      <ScrollView
        style={styles.inputContainer}
        keyboardShouldPersistTaps="handled"
      >
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setTime && setTime(Number(text))}
        />
      </ScrollView>
      <EditScreenInfo path="/screens/TabTwoScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  input: {
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 2,
  },
});
