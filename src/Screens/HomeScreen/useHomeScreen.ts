import React, { useEffect, useState } from "react";
import { Alert, TextInput } from "react-native";
import { APIs } from "../../APIs/API";
import { setError, setFlightList, toggleStatus } from "../../redux/slices/flightSlice";
import { AppDispatch, RootState } from "../../redux/store/store";
import { T, flightObjectType } from "./Types";
import { useNetInfo } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { AllScreens } from "../../Navigation/NavConfig";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackScreenTypes } from "../../Navigation/types";
import { messages } from "../../Constants/Messages";
import { useDebounce } from "../../Common/functions";


export default function useHomeScreen() {

    const netInfo = useNetInfo();
    const [visibleFlights, setVisibleFlights] = useState<Array<flightObjectType>>([]);
    const [airlineName, setAirlineName] = useState<string>("");
    const [sortBy, setSortBy] = useState<sortType>({
        name: "",
        type: undefined
    });
    const skeletonArray = [...Array(5).keys()];
    const flatlistOneElement = [1];

    const navigation = useNavigation<NavigationProp<MainStackScreenTypes>>();
    const _ref: T = React.createRef<TextInput>();

    const flightList = useAppSelector((e: RootState) => e.flight.flightList);
    const status = useAppSelector((e: RootState) => e.flight.status);
    const dispatch = useAppDispatch();

    const getFlightsFromApi = (_id: string) => async (dispatch: AppDispatch) => {
        dispatch(toggleStatus("loading"));

        const response = await APIs.getFlights(_id);

        console.log("debounceGetApiData", response?.data?.result?.length)

        if (response.message === "Success") {
            dispatch(setFlightList(response.data.result));
            dispatch(toggleStatus("succeeded"));
        } else {
            dispatch(toggleStatus("failed"));
            dispatch(setError(response.message));
        }
    }

    useDebounce(() => {
        if (netInfo.isConnected && flightList.length === 0) {
            let _id = "4829d4ab0e96bfab50e7";
            dispatch(getFlightsFromApi(_id));
        } else if (netInfo.isConnected === false) {
            return Alert.alert(messages.alert, messages.internet_required, [{
                text: 'Ok',
                onPress: () => null
            }], { cancelable: false, onDismiss: () => null })
        }
    }, 1000, netInfo);

    useEffect(() => {
        if (flightList.length) {
            setVisibleFlights(flightList);
        }
    }, [flightList])

    useEffect(() => {
        if (airlineName.length && sortBy.name.length) {
            const filteredFlights = flightList.filter((ele: any) => ele.displayData.airlines?.[0].airlineName.toLowerCase().includes(airlineName));
            const temp = [...filteredFlights].sort((a, b) => sortBy.type === "INC" ? a.fare - b.fare : sortBy.type === "DCR" ? b.fare - a.fare : 0);

            setVisibleFlights(temp);
        } else if (airlineName.length) {
            const filteredFlights = flightList.filter((ele: any) => ele.displayData.airlines?.[0].airlineName.toLowerCase().includes(airlineName));
            setVisibleFlights(filteredFlights);
        } else if (sortBy.name.length) {
            const sortedFlights = [...flightList].sort((a, b) => sortBy.type === "INC" ? b.fare - a.fare : sortBy.type === "DCR" ? a.fare - b.fare : 0);
            setVisibleFlights(sortedFlights);
        } else {
            setVisibleFlights([...flightList]);
        }
    }, [airlineName, sortBy]);

    function onShort(by: string): void {
        if (by === "Price") {
            if (sortBy.type === undefined) {
                setSortBy({ name: "Price", type: "INC" })
            } else if (sortBy.type === "INC") {
                setSortBy({ name: "Price", type: "DCR" })
            } else {
                setSortBy({ name: "", type: undefined })
            }
        }
    }

    function onPressFlight(data: flightObjectType) {
        navigation.navigate(AllScreens.DETAIL_SCREEN, data);
    }

    const onPressRightIcon = () => {
        setAirlineName("");
        _ref.current?.clear();
    }

    return {
        visibleFlights, setVisibleFlights,
        airlineName, setAirlineName,
        sortBy, setSortBy,
        skeletonArray,
        _ref,
        flightList,
        flatlistOneElement,
        status,
        dispatch,
        getFlightsFromApi,
        onPressFlight,
        onPressRightIcon,
        onShort
    }
}