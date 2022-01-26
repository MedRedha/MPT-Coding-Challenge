import React, { useCallback, useEffect, useState } from 'react';

import { ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { getBundleId, getDeviceId, getIpAddress, getModel, getSystemVersion } from 'react-native-device-info';
import { addOrientationListener, removeOrientationListener } from 'react-native-orientation';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from './src/assets/colors';
import NuriDocumentPicker from './src/components/NuriDocumentPicker';
import NuriHeader from './src/components/NuriHeader';
import NuriSection from './src/components/NuriSection';
import { openLink } from './src/utils';

const App: () => React.FC = () => {
  const [currentOrientation, setCurrentOrientation] = useState('');
  const [url] = useState('https://nuriCodingChallenge/');
  const [statusBarStyle] = useState('dark-content');
  const isDarkMode = useColorScheme() === 'dark';
  const [ip, setIp] = useState('');

  useEffect(() => {
    getIpAddress().then((ip) => {
      setIp(ip);
    });

    addOrientationListener((orientation) => {
      setCurrentOrientation(orientation);
    });

    return () => {
      removeOrientationListener();
    };
  }, []);

  const onOpenLink = useCallback(async () => {
    await openLink(url, statusBarStyle);
  }, [url, statusBarStyle]);

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}
      edges={['bottom']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: currentOrientation === 'LANDSCAPE' && 80,
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <NuriHeader isDarkMode={isDarkMode} screenOrientation={currentOrientation} />
        <NuriSection title='Device Info:'>
          <Text
            style={[
              styles.sectionDescription,
              {
                color: isDarkMode ? Colors.light : Colors.dark,
              },
            ]}>
            {'\u2219'} iOS Version: {getSystemVersion()}
            {'\n'}
            {'\u2219'} Model: {getModel()}
            {'\n'}
            {'\u2219'} Device ID: {getDeviceId()}
            {'\n'}
            {'\u2219'} Device IP Address: {ip}
            {'\n'}
            {'\u2219'} Bundle Identifier: {getBundleId()}
            {'\n'}
          </Text>
        </NuriSection>
        <NuriSection title='Deep Linking:'>
          <TouchableOpacity onPress={onOpenLink}>
            <Text style={[styles.sectionDescription, { color: '#0060FF' }]}>Click here to open the default browser</Text>
          </TouchableOpacity>
          <Text style={[styles.sectionDescription, { color: isDarkMode ? Colors.white : Colors.dark }]}>
            Accessing "nuriCodingChallenge://" should directly redirected you to the app
          </Text>
        </NuriSection>
        <NuriSection title='Document Picker:'>
          <NuriDocumentPicker isDarkMode={isDarkMode} />
        </NuriSection>
        <Text style={[styles.footer, { color: isDarkMode ? Colors.white : Colors.dark }]}>Made with 💜 by Nuri®</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: 17,
    fontWeight: '400',
    marginTop: 8,
    marginLeft: 16,
    paddingHorizontal: 24,
  },
  footer: {
    bottom: 60,
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
