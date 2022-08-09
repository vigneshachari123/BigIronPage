import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MylistScreen from './MylistScreen';
import ResultScreen from './ResultsScreen';
import ProfileScreen from './ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import {Colors} from './../colors/Color';
function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.yellow,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="MyList" component={MylistScreen} />
        <Tab.Screen name="Results" component={ResultScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
