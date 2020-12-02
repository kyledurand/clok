import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import {Context} from '../context';

export default function TabOneScreen() {
  const {time} = useContext(Context);
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>
        {time?.hours || 0}:{time?.minutes || 0}:{time?.seconds || 0}
      </Text>
      <View
        style={styles.Separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
