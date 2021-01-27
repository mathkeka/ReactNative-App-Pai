import 'react-native-gesture-handler';
import * as React from 'react';
import { ScrollView, Text } from "react-native";
import styles from './styles';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ButtonStyled from '../../components/Button'

const BillsScreen = ({ navigation, route }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <View style={styles.valueLine}>
                    <Text style={styles.text}>Valor:</Text>
                    <TextInput style={styles.inputValue} placeholder={' Insira o valor do gasto'} keyboardType='number-pad' />
                </View>
                <View style={styles.valueLine}>
                    <Text style={styles.text}>Destinatário:</Text>
                    <TextInput style={styles.inputValue} placeholder={' Insira o valor do gasto'} keyboardType='default' />
                </View>
                <View style={styles.descLine}>
                    <Text style={styles.text}>Descrição:</Text>
                    <TextInput style={styles.inputDesc} keyboardType='default' numberOfLines={6} />
                </View>
                <View style={styles.button}>
                    <ButtonStyled typeText='big' navigate={navigation.navigate} page='Gains' >Confirmar</ButtonStyled>
                </View>
            </View>
        </ScrollView>
    );
};

export default BillsScreen;