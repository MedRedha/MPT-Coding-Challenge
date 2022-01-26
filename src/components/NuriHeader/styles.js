import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    opacity: 1,
    width: '100%',
    overflow: 'visible',
    resizeMode: 'cover',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
