import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles';
import { Entypo } from '@expo/vector-icons'; // Make sure you have installed and imported the Entypo icons

const SettingsScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const textStyle = theme === 'light' ? styles.lightText : styles.darkText;
  const isDarkMode = theme === 'dark';

  return (
    <View style={containerStyle}>
      <Text style={[styles.settingsText, textStyle]}>Settings</Text>

      <TouchableOpacity style={styles.option} onPress={() => {}}>
        <Text style={[styles.optionText, textStyle]}>Language</Text>
        <Entypo name="chevron-thin-right" size={24} color={isDarkMode ? 'white' : 'black'} />
      </TouchableOpacity>
      <View style={styles.line}></View>

      <TouchableOpacity style={styles.option} onPress={() => {}}>
        <Text style={[styles.optionText, textStyle]}>My Profile</Text>
        <Entypo name="chevron-thin-right" size={24} color={isDarkMode ? 'white' : 'black'} />
      </TouchableOpacity>
      <View style={styles.line}></View>

      <TouchableOpacity style={styles.option} onPress={() => {}}>
        <Text style={[styles.optionText, textStyle]}>Contact Us</Text>
        <Entypo name="chevron-thin-right" size={24} color={isDarkMode ? 'white' : 'black'} />
      </TouchableOpacity>
      <View style={styles.line}></View>

      <TouchableOpacity style={styles.option} onPress={() => {}}>
        <Text style={[styles.optionText, textStyle]}>Change Password</Text>
        <Entypo name="chevron-thin-right" size={24} color={isDarkMode ? 'white' : 'black'} />
      </TouchableOpacity>
      <View style={styles.line}></View>

      <TouchableOpacity style={styles.option} onPress={() => {}}>
        <Text style={[styles.optionText, textStyle]}>Privacy Policy</Text>
        <Entypo name="chevron-thin-right" size={24} color={isDarkMode ? 'white' : 'black'} />
      </TouchableOpacity>
      <View style={styles.line}></View>

      <View style={styles.toggle}>
        <Text style={[styles.optionText, textStyle]}>Theme</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
