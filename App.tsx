import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';
import React from 'react';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

import ChatUI from './screens/chatsui/app';

function TabsStack() {
  return (
    <Tab.Navigator
      initialRouteName="SplashScreenUI"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="SplashScreenUI"
        component={ChatUI}
        options={{title: () => <Text>All Chats</Text>}}
      />
      <Tab.Screen
        name="Unreads"
        component={ChatUI}
        options={{title: () => <Text>Unreads</Text>}}
      />
      <Tab.Screen
        name="Personals"
        component={ChatUI}
        options={{title: () => <Text>Personals</Text>}}
      />
      <Tab.Screen
        name="Groups"
        component={ChatUI}
        options={{title: () => <Text>Groups</Text>}}
      />
      <Tab.Screen
        name="SuperGroups"
        component={ChatUI}
        options={{title: () => <Text>SuperGP</Text>}}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="MainPage"
          component={TabsStack}
          options={{
            headerTitle: () => (
              <Text style={{fontWeight: 'bold', fontSize: 22}}>
                Telegram UI
              </Text>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
