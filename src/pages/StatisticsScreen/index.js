import 'react-native-gesture-handler';
import * as React from 'react';
import { ScrollView, View, Text, Button } from "react-native";
import styles from './styles';

const StatisticsScreen = ({ navigation, route }) => {
    return <ScrollView style={styles.container}>
        <Text style={styles.text}>ENTROU NA PAGINA DE ESTATÍSTICAS</Text>
        <Text style={styles.text}>Aqui serão exibidos gráficos de gastos e ganhos do mês atual</Text>
    </ScrollView>;
};

export default StatisticsScreen;