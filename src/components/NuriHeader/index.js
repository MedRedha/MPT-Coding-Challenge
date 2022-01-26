import React, { useEffect, useState } from 'react';

import { ImageBackground, Text, View } from 'react-native';

import Colors from '../../assets/colors';
import { styles } from './styles';

const NuriHeader = ({ isDarkMode, screenOrientation }): React.FC => {
  const [orientation, setOrientation] = useState(screenOrientation);

  useEffect(() => {
    setTimeout(() => setOrientation(screenOrientation), 500);
  }, [screenOrientation]);

  return (
    <View style={{ height: orientation === 'PORTRAIT' ? 250 : 210 }}>
      <ImageBackground
        accessibilityRole='image'
        source={!isDarkMode ? require('../../assets/images/BackgroundDark.png') : require('../../assets/images/Background.png')}
        style={styles.background}
        imageStyle={[styles.logo]}>
        <View style={{ marginTop: 25 }}>
          <Text
            style={[
              styles.text,
              {
                fontSize: orientation === 'PORTRAIT' ? 35 : 35,
                color: isDarkMode ? Colors.white : Colors.black,
                shadowColor: isDarkMode ? Colors.dark : Colors.light,
              },
            ]}>
            - NURI -
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: orientation === 'PORTRAIT' ? 35 : 35,
                color: isDarkMode ? Colors.white : Colors.black,
                shadowColor: isDarkMode ? Colors.black : Colors.light,
              },
            ]}>
            The Challenge
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NuriHeader;
