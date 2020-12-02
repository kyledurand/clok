import * as React from 'react';
import {StyleSheet, ScrollView, TextInput, useColorScheme} from 'react-native';

import {Text, View} from '../components/Themed';
import {Context} from '../context';
import {Time} from '../types';
import {getStyles} from './TabTwoScreen.css';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const {time, setTime} = React.useContext(Context);
  const styles = getStyles(colorScheme || 'light');
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Tab Two</Text>
      <View
        style={styles.Separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.Title}>thing below</Text>
      <ScrollView
        style={styles.InputContainer}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          style={styles.Input}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(text) => handleSetTime({hours: Number(text)})}
        />
        <TextInput
          style={styles.Input}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(text) => handleSetTime({minutes: Number(text)})}
        />
        <TextInput
          style={styles.Input}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(text) => handleSetTime({seconds: Number(text)})}
        />
      </ScrollView>
    </View>
  );

  function handleSetTime(newTime: Time) {
    if (!setTime) return;
    setTime({
      hours: newTime.hours || time?.hours,
      minutes: newTime.minutes || time?.minutes,
      seconds: newTime.seconds || time?.seconds,
    });
  }
}
