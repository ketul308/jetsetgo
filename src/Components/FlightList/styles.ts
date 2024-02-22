import { StyleSheet } from "react-native";
import { hp } from "../../Common/functions";
import { colors } from "../../Theme/colors";
import { RNStyles } from "../../Common/RNStyles";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({

    itemSeparatorComponent: {
        height: hp(3)
    },
    flightItem: {
        padding: hp(2),
        backgroundColor: colors.white,
        borderRadius: hp(1),
        ...RNStyles.shadowStyle,
    },
    viewLeft: {
        width: "25%",
        ...RNStyles.contentCenter
    },
    viewMid: {
        width: "50%",
        ...RNStyles.contentCenter
    },
    viewRight: {
        width: "25%",
        ...RNStyles.contentCenter
    },
    textArrivalTime: {
        color: colors.fontcolor,
        fontSize: fontsize[16],
        fontWeight: "800",
        marginBottom: hp(0.5)
    },
    textPrice: {
        color: colors.darkYellow,
        fontSize: fontsize[16],
        fontWeight: "800",
        marginBottom: hp(0.5)
    },
    textCityCode: {
        color: colors.fontcolor,
        fontSize: fontsize[10],
        fontWeight: "600",
        paddingHorizontal: hp(0.7),
        backgroundColor: colors.lightGray,
        borderRadius: hp(1),
        ...RNStyles.flexRowCenter
    },
    viewGrayCircle: {
        backgroundColor: colors.lightGray,
        height: hp(1.5),
        width: hp(1.5),
        borderRadius: hp(0.8),
        ...RNStyles.contentCenter
    },
    viewDarkCircle: {
        backgroundColor: colors.fontcolor,
        height: hp(0.6),
        width: hp(0.6),
        borderRadius: hp(0.5),
    },
    viewLine: {
        height: 1,
        backgroundColor: colors.lightGray,
        flex: 1
    },
    textDurationTime: {
        color: colors.fontDarkGray,
        fontSize: fontsize[12],
        fontWeight: "700"
    },
    viewDotLine: {
        borderTopWidth: hp(0.2),
        borderColor: colors.lightGray,
        borderStyle: "dashed",
        marginVertical: hp(2)
    },
    contentContainerStyle: {
        paddingTop: hp(2),
        paddingBottom: hp(4),
    },
    viewSortItem: {
        backgroundColor: colors.lightGray,
        paddingHorizontal: hp(1),
        ...RNStyles.flexRowCenter,
        paddingVertical: hp(0.2),
        borderRadius: hp(1),
    },
    sortList: {
        marginVertical: hp(1),
        alignItems: "center"
    },
    viewEmptyList: {
        marginTop: hp(10),
        alignItems: "center"
    },
    textEmpty: {
        color: colors.fontDarkGray,
        fontSize: fontsize[12],
        fontWeight: "500",
        marginTop: hp(1)
    },
});