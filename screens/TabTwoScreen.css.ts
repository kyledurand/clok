import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

export function getStyles(colorScheme: 'light' | 'dark') {
  return StyleSheet.create({
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
    InputContainer: {
      marginTop: 10,
      paddingHorizontal: 20,
      width: '100%',
    },
    Input: {
      borderRadius: 5,
      borderColor: Colors[colorScheme].tint,
      flex: 1,
      padding: 10,
      borderWidth: 2,
      marginHorizontal: 4,
    },
  });
}
