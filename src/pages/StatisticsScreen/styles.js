import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
    },
    text: {
        fontSize: fonts.bigger,
        fontWeight: 'bold',
        color: colors.white,
        paddingVertical: metrics.padding,
        textAlign: 'center'
    },
})

export default styles;