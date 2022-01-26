import { Alert, Linking, Platform, StatusBar } from 'react-native';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

const sleep = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

export const openLink = async (url, statusBarStyle, animated = true) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      // A delay to change the StatusBar when the browser is opened
      const delay = animated && Platform.OS === 'ios' ? 400 : 0;
      setTimeout(() => StatusBar.setBarStyle('light-content'), delay);
      await InAppBrowser.open(url, {
        dismissButtonStyle: 'close',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: true,
        animated,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'flipHorizontal',
        modalEnabled: true,
        enableBarCollapsing: true,
        showTitle: true,
        toolbarColor: '#beaaff',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        hasBackButton: true,
        browserPackage: null,
        showInRecents: false,
      });
      await sleep(800);
    } else {
      await Linking.openURL(url);
    }
  } catch (error) {
    await sleep(50);
    const errorMessage = error.message || error;
    Alert.alert('Oops!', errorMessage);
  } finally {
    // Restore the previous StatusBar of the App
    StatusBar.setBarStyle(statusBarStyle);
  }
};
