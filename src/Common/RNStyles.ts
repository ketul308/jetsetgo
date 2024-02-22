import { StyleSheet } from "react-native";
import { colors } from "../Theme/colors";

const RNStyles = StyleSheet.create({
    flex: {
        flex: 1
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexRowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flexRowAround: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flexRowEvenly: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    shadowStyle: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    }
});

export { RNStyles };