import { View, Text, Image } from 'react-native'
import React from 'react'
import { messages } from '../../Constants/Messages'
import ScreenContainer from '../../Components/ScreenContainer/ScreenContainer'
import { styles } from './styles'
import { All_Images } from '../../Assets'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { props } from './type'
import { AllScreens } from '../../Navigation/NavConfig'

const WelcomScreen: React.FC<props> = (props) => {
    const { navigation } = props;
    return (
        <ScreenContainer>
            <View style={styles.viewImageAndText}>
                <Image
                    source={All_Images.logo}
                    style={styles.imageAppLogo}
                />
                <View>
                    <Text style={styles.textWeAre}>{messages.weAreGoing}</Text>
                    <Text style={styles.textAreYouIn}>{messages.areYouIn}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton onPress={() => navigation.navigate(AllScreens.HOME_SCREEN)} label={messages.getstarted} />
            </View>
        </ScreenContainer>
    )
}

export default WelcomScreen;