import { Dimensions, StyleSheet } from 'react-native';

import Colors from '../../assets/colors';

const ScreenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    marginTop: 20,
    marginBottom: 95,
    paddingVertical: 16,
    marginHorizontal: 24,
  },
  documentResult: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  documentDetails: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    paddingTop: 8,
    color: '#0060FF',
    paddingBottom: 5,
    fontWeight: '400',
    width: ScreenWidth * 0.8,
  },
  buttonTextBlue: {
    fontSize: 18,
    paddingTop: 8,
    fontWeight: '400',
    width: ScreenWidth * 0.8,
    color: '#0060FF',
  },
  replaceText: {
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 5,
    fontWeight: '400',
    width: ScreenWidth * 0.8,
    color: '#0060FF',
    textAlign: 'right',
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 5,
    fontWeight: '400',
    width: ScreenWidth * 0.8,
    color: Colors.black,
    textAlign: 'left',
  },
  docTitle: {
    minWidth: '100%',
    fontSize: 12,
    fontWeight: '500',
    color: Colors.dark,
    textAlign: 'left',
  },
  date: {
    fontSize: 8,
    marginTop: 3,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'left',
  },
});
