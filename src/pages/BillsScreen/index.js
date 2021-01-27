import 'react-native-gesture-handler';
import * as React from 'react';
import styles from './styles';
import { View, Text, Button, ScrollView } from "react-native";
import ButtonStyled from '../../components/Button'

const BillsScreen = ({ navigation, route }) => {
    return <ScrollView style={styles.container}>
        <View style={styles.form}>
            <View>
                <ButtonStyled type='add' typeText='biggest' navigate={navigation.navigate} page='AddBill' >Registrar Gasto</ButtonStyled>
            </View>
            <Text style={styles.text}>Lista de gastos</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
            <Text style={styles.text}>...</Text>
        </View>
    </ScrollView>
};

export default BillsScreen;