import { flightObjectType } from "../Screens/HomeScreen/Types"
import { AllScreens } from "./NavConfig"

export type MainStackScreenTypes = {
    [AllScreens.WELCOME_SCREEN]: undefined
    [AllScreens.HOME_SCREEN]: undefined
    [AllScreens.DETAIL_SCREEN]: flightObjectType
}
