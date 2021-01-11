import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark,
        paddingTop: metrics.padding,
    },
    buttons: {
        paddingTop: metrics.padding
    },
    image: {
        height: metrics.windowHeight * 0.2,
        width: metrics.windowWidth * 0.35

    }
});

export default styles;