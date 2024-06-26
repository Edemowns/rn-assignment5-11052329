import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, View, StyleSheet, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import CustomTabBar from './components/CustomTabBar';

const Tab = createBottomTabNavigator();

const App = () => {
  const { theme } = useTheme();
  const MyTheme = theme === 'light' ? DefaultTheme : DarkTheme;

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          tabBar={(props) => <CustomTabBar {...props} />}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="myCards" component={PlaceholderScreen} options={{ tabBarLabel: 'My Cards' }} />
          <Tab.Screen name="Statistics" component={PlaceholderScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 20,
  },
});

const PlaceholderScreen = () => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>Coming Soon...</Text>
  </View>
);

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
