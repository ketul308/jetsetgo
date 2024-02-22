import { StyleSheet } from "react-native";
import { hp, wp } from "../../Common/functions";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";
import { RNStyles } from "../../Common/RNStyles";

export const styles = StyleSheet.create({
    textHeaderTitle: {
        color: colors.white,
        fontSize: fontsize[20],
        fontWeight: "500",
        textAlign: "center"
    },
    textCityName: {
        color: colors.appEnd,
        fontSize: fontsize[25],
        fontWeight: "bold",
    },
    viewDark: {
        backgroundColor: colors.appEnd,
        paddingTop: hp(2),
    },
    viewPlaneIcon: {
        backgroundColor: colors.lightGray,
        padding: hp(2),
        borderRadius: hp(4),
        marginVertical: hp(3)
    },
    viewDivide: {
        height: hp(0.2),
        backgroundColor: colors.lightGray,
        marginBottom: hp(1)
    },
    viewOuter: {
        flex: 1,
        backgroundColor: colors.appEnd
    },
    viewContent: {
        backgroundColor: colors.white,
        marginHorizontal: hp(2),
        borderRadius: hp(1),
        marginTop: hp(4)
    },
    viewButtonContainer: {
        paddingHorizontal: hp(2),
        backgroundColor: colors.appEnd,
        ...RNStyles.contentCenter,
        paddingVertical: hp(4)
    },
    textLabel: {
        color: colors.fontcolor,
        fontSize: fontsize[20],
        fontWeight: "500",
        flex: 0.7,
        marginLeft: hp(1),
        marginVertical: hp(1)
    },
    textValue: {
        color: colors.fontDarkGray,
        fontSize: fontsize[18],
        fontWeight: "400",
        flex: 0.3
    }
})