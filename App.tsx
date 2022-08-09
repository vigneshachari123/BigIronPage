import React from 'react';
import {View} from 'react-native';
import Home from './components/Home';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import TabNavigation from './screens/TabNavigation';
function App() {
  return (
    <PaperProvider>
      <>
        <TabNavigation />
      </>
    </PaperProvider>
  );
}

export default App;
