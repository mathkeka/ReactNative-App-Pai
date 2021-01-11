import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonStyled = ({ style, children, type, typeText, navigate, page }) => (
  <TouchableOpacity
    style={[
      styles.container,
      style,
      type ? styles[`button-${type}`] : {},
    ]}
    onPress={() => {
      navigate(page, { name: page })
    }}
  >
    <Text style={[
      styles.text,
      typeText ? styles[`text-${typeText}`] : {},
    ]}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default ButtonStyled;
