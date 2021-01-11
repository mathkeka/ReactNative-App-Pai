import { Platform } from 'react-native';
import { Dimensions } from 'react-native';

export default {
  padding: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 0 },
  }),
  tabBarHeight: 50,
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
};
