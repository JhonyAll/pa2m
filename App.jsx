import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from './components/Home';
import Veiculo from './components/Veiculos';
 import Detalhes from './components/Detalhes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }} />
      <Tab.Screen name="Veículos" component={Veiculo} options={{
          tabBarLabel: 'Veículos',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="ball" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}