import { TransitionPresets } from '@react-navigation/stack';

enum AllScreens {
    HOME_SCREEN = "HOME_SCREEN",
    DETAIL_SCREEN = "DETAIL_SCREEN",
    WELCOME_SCREEN = "WELCOME_SCREEN",

}
const screenOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
};

export { AllScreens, screenOptions };