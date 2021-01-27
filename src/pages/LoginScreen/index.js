import React, { useContext } from 'react';
import {
    Text,
    ScrollView
} from 'react-native';
import SocialButton from '../../components/SocialButton';
import { AuthContext } from '../../navigation/AuthProvider';

const LoginScreen = () => {

    const { googleLogin } = useContext(AuthContext);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Minha Carteira</Text>
            <SocialButton
                buttonTitle="Login com Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
            />
        </ScrollView>
    );
};

export default LoginScreen;