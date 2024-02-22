import { NavigationProp } from "@react-navigation/native"
import { MainStackScreenTypes } from "../../Navigation/types"
import { AllScreens } from "../../Navigation/NavConfig"

export type T = any

export type Props = {
    navigation: NavigationProp<MainStackScreenTypes, AllScreens.HOME_SCREEN>
}

export type flightObjectType = {
    displayData: {
        airlines?: Array<{
            airlineCode: string;
            airlineName: string;
            flightNumber: string;
        }> | null;
        destination: {
            airport: {
                airportCode: string;
                airportName: string;
                cityCode: string;
                cityName: string;
                countryCode: string;
                countryName: string;
                terminal: string;
            };
            arrTime: string;
        };
        source: {
            airport: {
                airportCode: string;
                airportName: string;
                cityCode: string;
                cityName: string;
                countryCode: string;
                countryName: string;
                terminal: string;
            };
            depTime: string;
        };
        stopInfo: string;
        totalDuration: string;
    }
    fare: number;
    id: string;
}
