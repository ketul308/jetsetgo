
import React from 'react';
import { Props } from './type';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RNStyles } from '../../Common/RNStyles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../Theme/colors';

const ScreenContainer: React.FC<Props> = (props: Props) => {
    const { children, backgoundColor } = props;
    return (
        <LinearGradient style={RNStyles.flex} colors={!backgoundColor ? [colors.appStart, colors.appEnd] : [backgoundColor, backgoundColor]}>
            <SafeAreaProvider>
                <SafeAreaView style={RNStyles.flex}>
                    {children}
                </SafeAreaView>
            </SafeAreaProvider>
        </LinearGradient>

    )
}

export default ScreenContainer;