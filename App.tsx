import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Context} from './context';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [time, setTime] = useState({});

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Context.Provider value={{time, setTime}}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Context.Provider>
      </SafeAreaProvider>
    );
  }
}
