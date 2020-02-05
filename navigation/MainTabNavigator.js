import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import PlanScreen from '../screens/PlanScreen';
import TrackScreen from '../screens/TrackScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const PlanStack = createStackNavigator(
  {
    Plan: PlanScreen,
  },
  config
);

PlanStack.navigationOptions = {
  tabBarLabel: 'Plan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

PlanStack.path = '';

const TrackStack = createStackNavigator(
  {
    Track: TrackScreen,
  },
  config
);

TrackStack.navigationOptions = {
  tabBarLabel: 'Track',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

TrackStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  PlanStack,
  TrackStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
