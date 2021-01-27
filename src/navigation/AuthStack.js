import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/index';
import { GoogleSignin } from '@react-native-community/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "690538925327-d31emes0voh9r0j1c162odi8iu0n9euo.apps.googleusercontent.com",
        });
    }, []);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
