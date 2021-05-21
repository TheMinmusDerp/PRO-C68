import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation-tabs'

import InstagramScreen from './screens/in'
import FacebookScreen from './screens/fb'

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const TabNavigator = createBottomTabNavigator(
  {
    Instagram: { screen: InstagramScreen },
    Facebook: { screen: FacebookScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Instagram') {
          return (
            <Image
              source={require('./assets/in.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === 'Facebook') {
          return (
            <Image
              source={require('./assets/fb.jpg')}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
