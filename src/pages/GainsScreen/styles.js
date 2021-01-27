import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: metrics.padding * 2,
    },
    text: {
        fontSize: fonts.bigger,
        fontWeight: 'bold',
        color: colors.white,
        paddingVertical: metrics.padding,
        textAlign: 'center'
    },
    valueLine: {
        flex: 1,
    },
    inputValue: {
        borderWidth: 2,
        borderColor: colors.primary,
        marginLeft: metrics.padding,
        width: metrics.windowWidth * 0.73,
    },
    inputDesc: {
        borderWidth: 2,
        borderColor: colors.primary,
        marginLeft: metrics.padding,
        width: metrics.windowWidth * 0.9,
    },
    descLine: {
        flex: 1,
        paddingTop: metrics.padding,
    },
    button: {
        paddingTop: metrics.padding * 2
    },

})

export default styles;