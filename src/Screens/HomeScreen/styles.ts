import { StyleSheet } from "react-native";
import { hp, wp } from "../../Common/functions";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({
    mainPadding: {
        paddingHorizontal: hp(2),
        paddingVertical: hp(2)
    },
    textInputContainer: {
        paddingHorizontal: hp(2),
        backgroundColor: colors.white,
        paddingTop: hp(1),
    },
    viewTopHeader: {
        backgroundColor: colors.appEnd,
        paddingTop: hp(5),
    },
    textTitle: {
        color: colors.white,
        fontSize: fontsize[40],
        fontWeight: "500",
        paddingLeft: hp(2)
    },
    viewExtraBg: {
        backgroundColor: colors.white,
        height: hp(2),
        width: wp(100),
        marginTop: hp(2),
        borderTopLeftRadius: hp(2),
        borderTopRightRadius: hp(2)
    },
    itemSeparatorComponent: {
        height: hp(3)
    },
})