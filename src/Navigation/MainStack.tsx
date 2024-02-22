import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackScreenTypes, } from './types';
import { AllScreens, screenOptions } from './NavConfig';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen/DetailsScreen';
import WelcomScreen from '../Screens/WelcomScreen/WelcomScreen';

const Stack = createStackNavigator<MainStackScreenTypes>();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName={AllScreens.WELCOME_SCREEN}>
            <Stack.Screen name={AllScreens.WELCOME_SCREEN} component={WelcomScreen} />
            <Stack.Screen name={AllScreens.HOME_SCREEN} component={HomeScreen} />
            <Stack.Screen name={AllScreens.DETAIL_SCREEN} component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default MainStack;