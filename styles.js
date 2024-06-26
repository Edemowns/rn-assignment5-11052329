import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#041126',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 50,
  },
  textContainer: {
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    marginTop: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightNameText: {
    color: '#000',
  },
  darkNameText: {
    color: '#fff',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 50,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  creditCardContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  creditCardImage: {
    width: '80%',
    height: undefined,
    aspectRatio: 1.6, 
    resizeMode: 'contain',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconButton: {
    flex: 1,
    alignItems: 'center',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconText: {
    textAlign: 'center',
    fontSize: 12,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  leftText: {
    fontWeight: 'bold',
  },
  rightText: {
    color: 'blue',
  },
  lightNameText: {
    color: '#000',
  },
  darkNameText: {
    color: '#fff',
  },
  lightIconText: {
    color: '#000',
  },
  darkIconText: {
    color: '#fff',
  },
  lightTransactionText: {
    color: '#000',
  },
  darkTransactionText: {
    color: '#fff',
  },
  transactionDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  transactionLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  largeIconCircle: { 
    width: 80, 
    height: 80,
    borderRadius: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  largeIconImage: { 
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  transactionProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  transactionTextContainer: {
    marginLeft: 10,
  },
  transactionBoldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionSubText: {
    color: '#aaa',
  },
  transactionDescription: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightTransactionSubText: {
    color: '#aaa',
  },
  darkTransactionSubText: {
    color: '#555',
  },
  lightrightText: {
    color: 'blue',
  },
  darkrightText: {
    color: 'blue',
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 25,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  settingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 24,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  blueText: {
    color: 'blue',
  },
});

export default styles;
