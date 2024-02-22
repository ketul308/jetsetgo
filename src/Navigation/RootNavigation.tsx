import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import SplashScreen from 'react-native-splash-screen';

export default function RootNavigation() {

    React.useEffect(() => {
        const _timeOut = setTimeout(() => {
            SplashScreen.hide();
            clearTimeout(_timeOut);
        }, 3000);
    }, []);

    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}