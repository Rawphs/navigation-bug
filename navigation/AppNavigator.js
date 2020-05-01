import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { ItemScreen } from '../screens/ItemScreen'
import { SearchScreen } from '../screens/SearchScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { FaqScreen } from '../screens/FaqScreen'
import { ItemDetailsScreen } from '../screens/ItemDetailsScreen'

const BottomTab = createBottomTabNavigator();
const MainNavigation = createStackNavigator();

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Faq" component={FaqScreen} />
  </Stack.Navigator>
)

const TabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Items" component={ItemScreen} />
    <BottomTab.Screen name="Search" component={SearchScreen} />
    <BottomTab.Screen name="ProfileStack" component={ProfileStack} />
  </BottomTab.Navigator>
)

export const AppNavigator = () => (
  <MainNavigation.Navigator headerMode='none'>
    <MainNavigation.Screen name="Home" component={TabNavigator} />
    <MainNavigation.Screen name="ItemDetails" component={ItemDetailsScreen} />
  </MainNavigation.Navigator>
)
