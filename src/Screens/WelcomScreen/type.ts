import { NavigationProp } from "@react-navigation/native"
import { MainStackScreenTypes } from "../../Navigation/types"
import { AllScreens } from "../../Navigation/NavConfig"

export type props = {
    navigation: NavigationProp<MainStackScreenTypes, AllScreens.WELCOME_SCREEN>
}