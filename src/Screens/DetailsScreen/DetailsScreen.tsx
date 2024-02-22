import { View, Text, FlatList } from 'react-native'
import React from 'react';
import { messages } from '../../Constants/Messages'
import ScreenContainer from '../../Components/ScreenContainer/ScreenContainer'
import { colors } from '../../Theme/colors'
import { styles } from './styles'
import { RNStyles } from '../../Common/RNStyles'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { All_Svgs } from '../../Assets'
import { hp } from '../../Common/functions'
import { formatTimeWithAMPM } from '../../Common/helper'
import { Props } from './type'



const DetailsScreen: React.FC<Props> = (props: Props) => {
    const { route } = props;
    const navigation = useNavigation();

    const { fare, displayData } = route?.params ?? {};
    const { destination, source, totalDuration, airlines } = displayData ?? {};
    const { airlineName, flightNumber } = airlines?.[0] ?? {}

    return (
        <ScreenContainer backgoundColor={colors.white}>
            <View style={RNStyles.flex}>
                <View style={styles.viewDark}>
                    <Text style={styles.textHeaderTitle}>{messages.flightDetails}</Text>
                </View>
                <View style={styles.viewOuter}>
                    <FlatList
                        data={[]}
                        renderItem={() => null}
                        style={styles.viewContent}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={() => (
                            <>
                                <View style={RNStyles.flexRowEvenly}>
                                    <Text children={source?.airport.cityName} style={styles.textCityName} />
                                    <View style={styles.viewPlaneIcon} children={<All_Svgs.simplePlane height={hp(3)} />} />
                                    <Text children={destination?.airport.cityName} style={styles.textCityName} />
                                </View>
                                <View style={styles.viewDivide} />
                            </>
                        )}
                        ListFooterComponent={() => (
                            <View>
                                <View style={RNStyles.flexRowCenter}>
                                    <Text style={styles.textLabel}>{messages.airline}</Text>
                                    <Text style={styles.textValue}>{airlineName}</Text>
                                </View>
                                <View style={RNStyles.flexRowCenter}>
                                    <Text style={styles.textLabel}>{messages.flightNo}</Text>
                                    <Text style={styles.textValue}>{flightNumber}</Text>
                                </View>
                                <View style={RNStyles.flexRowCenter}>
                                    <Text style={styles.textLabel}>{messages.departureTime}</Text>
                                    <Text style={styles.textValue}>{formatTimeWithAMPM(source?.depTime)}</Text>
                                </View>
                                <View style={RNStyles.flexRowCenter}>
                                    <Text style={styles.textLabel}>{messages.arrivalTime}</Text>
                                    <Text style={styles.textValue}>{formatTimeWithAMPM(destination?.arrTime)}</Text>
                                </View>
                                <View style={RNStyles.flexRowCenter}>
                                    <Text style={styles.textLabel}>{messages.duration}</Text>
                                    <Text style={styles.textValue}>{totalDuration}</Text>
                                </View>
                                <View style={RNStyles.flexRowCenter}>
                                    <Text style={styles.textLabel}>{messages.totalCharges}</Text>
                                    <Text style={styles.textValue}>{fare}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.viewButtonContainer}>
                    <CustomButton
                        label={messages.done}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>
        </ScreenContainer>
    )
}

export default DetailsScreen