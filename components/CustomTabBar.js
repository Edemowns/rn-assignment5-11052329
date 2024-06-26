import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  const backgroundColor = isLightTheme ? '#fff' : '#041145';
  const iconColor = isLightTheme ? '#000' : '#fff';
  const labelColor = isLightTheme ? '#000' : '#fff';

  const icons = {
    Home: require('../pictures/home.png'),
    myCards: require('../pictures/myCards.png'),
    Statistics: require('../pictures/statictics.png'),
    Settings: require('../pictures/settings.png'),
  };

  return (
    <View style={[styles.tabBar, { backgroundColor }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
          >
            <View style={styles.iconCircle}>
              <Image source={icons[route.name]} style={[styles.icon, { tintColor: iconColor }]} />
            </View>
            <Text style={[styles.label, { color: isFocused ? '#673ab7' : labelColor }]}>
              {options.tabBarLabel !== undefined ? options.tabBarLabel : route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    //backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 12,
  },
});

export default CustomTabBar;
