import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles';

const HomeScreen = () => {
  const { theme } = useTheme();
  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const nameTextStyle = theme === 'light' ? styles.lightNameText : styles.darkNameText;
  const iconTextStyle = theme === 'light' ? styles.lightIconText : styles.darkIconText;
  const transactionTextStyle = theme === 'light' ? styles.lightTransactionText : styles.darkTransactionText;
  const transactionSubTextStyle = theme === 'light' ? styles.lightTransactionSubText : styles.darkTransactionSubText;

  return (
    <ScrollView style={containerStyle} contentContainerStyle={[styles.scrollContainer, { paddingBottom: 100 }]}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={require('../pictures/profile.png')} style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={[styles.nameText, nameTextStyle]}>Edem Larry Nyanyo</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('../pictures/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.creditCardContainer}>
        <Image source={require('../pictures/Card.png')} style={styles.creditCardImage} />
      </View>

      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconCircle}>
            <Image source={require('../pictures/send.png')} style={styles.iconImage} />
          </View>
          <Text style={[styles.iconText, iconTextStyle]}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconCircle}>
            <Image source={require('../pictures/recieve.png')} style={styles.iconImage} />
          </View>
          <Text style={[styles.iconText, iconTextStyle]}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconCircle}>
            <Image source={require('../pictures/loan.png')} style={styles.iconImage} />
          </View>
          <Text style={[styles.iconText, iconTextStyle]}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconCircle}>
            <Image source={require('../pictures/topUp.png')} style={styles.iconImage} />
          </View>
          <Text style={[styles.iconText, iconTextStyle]}>TopUp</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textRow}>
        <Text style={[styles.leftText, transactionTextStyle]}>Transactions</Text>
        <Text style={[styles.rightText, styles.blueText]}>See All</Text>
      </View>

      <View style={styles.transactionDetailContainer}>
        <View style={styles.transactionLeftContainer}>
          <View style={styles.largeIconCircle}>
            <Image source={require('../pictures/apple.png')} style={styles.largeIconImage} />
          </View>
          <View style={styles.transactionTextContainer}>
            <Text style={[styles.transactionBoldText, transactionTextStyle]}>Apple Store</Text>
            <Text style={[styles.transactionSubText, transactionSubTextStyle]}>Entertainment</Text>
          </View>
        </View>
        <Text style={[styles.transactionDescription, transactionTextStyle]}>-$15,99</Text>
      </View>
      
      <View style={styles.transactionDetailContainer}>
        <View style={styles.transactionLeftContainer}>
          <View style={styles.largeIconCircle}>
            <Image source={require('../pictures/spotify.png')} style={styles.largeIconImage} />
          </View>
          <View style={styles.transactionTextContainer}>
            <Text style={[styles.transactionBoldText, transactionTextStyle]}>Spotify</Text>
            <Text style={[styles.transactionSubText, transactionSubTextStyle]}>Music</Text>
          </View>
        </View>
        <Text style={[styles.transactionDescription, transactionTextStyle]}>-$12,99</Text>
      </View>

      <View style={styles.transactionDetailContainer}>
        <View style={styles.transactionLeftContainer}>
          <View style={styles.largeIconCircle}>
            <Image source={require('../pictures/moneyTransfer.png')} style={styles.largeIconImage} />
          </View>
          <View style={styles.transactionTextContainer}>
            <Text style={[styles.transactionBoldText, transactionTextStyle]}>Money Transfer</Text>
            <Text style={[styles.transactionSubText, transactionSubTextStyle]}>Transaction</Text>
          </View>
        </View>
        <Text style={[styles.transactionDescription, styles.blueText]}>$300</Text>
      </View>

      <View style={styles.transactionDetailContainer}>
        <View style={styles.transactionLeftContainer}>
          <View style={styles.largeIconCircle}>
            <Image source={require('../pictures/grocery.png')} style={styles.largeIconImage} />
          </View>
          <View style={styles.transactionTextContainer}>
            <Text style={[styles.transactionBoldText, transactionTextStyle]}>Grocery</Text>
            <Text style={[styles.transactionSubText, transactionSubTextStyle]}>Shopping</Text>
          </View>
        </View>
        <Text style={[styles.transactionDescription, transactionTextStyle]}>-$88</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
