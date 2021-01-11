import 'react-native-gesture-handler';
import * as React from 'react';
import {
    View,
    Image
} from 'react-native';
import ButtonStyled from '../../components/Button'
import styles from './styles';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../../../images/scania.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.buttons}>
                <ButtonStyled typeText='big' navigate={props.navigation.navigate} page='Gains' >Ganhos</ButtonStyled>
            </View>
            <View style={styles.buttons}>
                <ButtonStyled typeText='big' navigate={props.navigation.navigate} page='Bills' >Gastos</ButtonStyled>
            </View>
            <View style={styles.buttons}>
                <ButtonStyled type='outline' typeText='big' navigate={props.navigation.navigate} page='Statistics' >Relatório</ButtonStyled>
            </View>
        </View >
    );
};


export default HomeScreen;