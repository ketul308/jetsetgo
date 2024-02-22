import { StyleSheet } from "react-native";
import { hp } from "../../Common/functions";
import { colors } from "../../Theme/colors";

export const styles = StyleSheet.create({
    TextInput: {
        width: '100%',
        height: 50,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        color: colors.fontDarkGray,
        backgroundColor: colors.white
    },
    leftIcon: {
        position: "absolute",
        zIndex: 1,
        left: hp(1)
    },
    rightIcon: {
        position: "absolute",
        zIndex: 1,
        right: hp(1)
    },
    textInputLeftPad: {
        paddingLeft: hp(4)
    },
    textInputRightPad: {
        paddingRight: hp(4)
    },

});