import React, {useEffect} from 'react';
import {View} from 'react-native';
import Home from './components/Home';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import TabNavigation from './screens/TabNavigation';
import RNBootSplash from 'react-native-bootsplash';
function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <PaperProvider>
      <>
        <TabNavigation />
      </>
    </PaperProvider>
  );
}

export default App;
