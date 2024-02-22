import { StyleSheet } from "react-native";
import { hp } from "../../Common/functions";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({
    imageAppLogo: {
        height: hp(18),
        width: hp(18),
        borderRadius: hp(4),
        alignSelf: "center",
        borderColor: colors.white,
        borderWidth: 2,
        marginTop: hp(2)
    },
    viewImageAndText: {
        flex: 1,
        paddingHorizontal: hp(2),
        justifyContent: 'space-between',
        paddingBottom: hp(3)
    },
    textWeAre: {
        color: colors.white,
        fontSize: fontsize[40],
        fontWeight: "bold",
    },
    textAreYouIn: {
        color: colors.white,
        fontSize: fontsize[15],
        fontWeight: "400"
    },
    buttonContainer: {
        paddingBottom: hp(5),
        paddingHorizontal: hp(2),
        marginTop: hp(2)
    }
})