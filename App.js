import * as React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './screen/home';
import SearchScreen from './screen/search';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>

  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: { 
        paddingHorizontal: 0.1,
        backgroundColor: '#030341',
        position: 'absolute',
        borderTopWidth: 0,
    },
  })}
    initialRouteName={'Home'}
    tabBarOptions={{
       activeTintColor: '#04E4FF',
       inactiveTintColor: '#ffeeee',
       activeBackgroundColor: 'transparent',
    }}>
      <Tab.Screen name="Home" component={Home}
       options={() => ({tabBarIcon: ({color}) => (
									<Icon name="home" size={17} color={color} />
						),
					})}/>
      <Tab.Screen name="Pesquisa" component={SearchScreen}
      options={() => ({
        tabBarIcon: ({color}) => (
              <Icon name="search" size={17} color={color}/>
        ),
      })}
      />

      <Tab.Screen name="download" component={SettingsScreen}
      options={() => ({
        tabBarIcon: ({color}) => (
              <Icon name="download" size={17} color={color}/>
        ),
      })}
      />

      <Tab.Screen name="Profile" component={SettingsScreen}
      options={() => ({
        tabBarIcon: ({color}) => (
              <Icon name="user" size={20} color={color}/>
        ),
      })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyTabs />
    <StatusBar backgroundColor='#131341' style="light" />
    </NavigationContainer>
  );
}
