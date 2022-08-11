import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MylistScreen from './MylistScreen';
import ResultScreen from './ResultsScreen';
import ProfileScreen from './ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import {Colors} from './../colors/Color';
import Icon from 'react-native-vector-icons/Ionicons';

function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#000',
          },
          tabBarActiveTintColor: Colors.yellow,
          tabBarStyle: {
            backgroundColor: '#000',
          },

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="home" size={30} color={'#fff'} />,
          }}
        />
        <Tab.Screen
          name="MyList"
          component={MylistScreen}
          options={{
            tabBarIcon: () => <Icon name="list" size={30} color={'#fff'} />,
          }}
        />
        <Tab.Screen
          name="Results"
          component={ResultScreen}
          options={{
            title: 'Auction Results',
            headerTintColor: Colors.yellow,
            headerTitleAlign: 'center',
            tabBarIcon: () => <Icon name="hammer" size={30} color={'#fff'} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTintColor: Colors.yellow,
            tabBarIcon: () => (
              <Icon name="ios-person" size={30} color={'#fff'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
