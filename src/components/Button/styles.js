import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.windowHeight * 0.1,
    width: metrics.windowWidth * 0.8,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  'button-outline': {
    backgroundColor: colors.dark,
    borderWidth: 3,
    borderColor: colors.primary,
  },

  'button-addViagem': {
    height: metrics.windowHeight * 0.05,
    width: metrics.windowWidth * 0.9,
  },

  text: {
    color: colors.lighter,
    fontWeight: 'bold',
    fontSize: fonts.small,
  },

  'text-big': {
    fontSize: fonts.big + 2,
  },
  'text-biggest': {
    fontSize: fonts.big,
  },
});

export default styles;
