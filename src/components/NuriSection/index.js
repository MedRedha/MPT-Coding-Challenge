import React from 'react';

import { Text, View, useColorScheme } from 'react-native';

import Colors from '../../assets/colors';
import { styles } from './styles';

const NuriSection = ({ title, children }): React.FC => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      {children}
    </View>
  );
};

export default NuriSection;
