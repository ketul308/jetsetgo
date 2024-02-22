import { StyleSheet } from "react-native";
import { hp } from "../../Common/functions";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({
    touchButton: {
        height: hp(5),
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp(1)
    },
    textLabel: {
        color: colors.fontcolor,
        fontSize: fontsize[12],
        fontWeight: "600"
    }

});