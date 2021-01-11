import 'react-native-gesture-handler';
import * as React from 'react';
import { ScrollView, Text } from "react-native";
import styles from './styles';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ButtonStyled from '../../components/Button'

const GainsScreen = ({ navigation, route }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <View>
                    <ButtonStyled type='addViagem' typeText='biggest' navigate={navigation.navigate} page='AddGain' >Registrar viagem</ButtonStyled>
                </View>
                <Text style={styles.text}>Lista de ganhos</Text>
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
    );
};

export default GainsScreen;