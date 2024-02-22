import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { RNStyles } from '../../Common/RNStyles';
import { flightObjectType } from '../../Screens/HomeScreen/Types';
import { All_Svgs } from '../../Assets';
import { colors } from '../../Theme/colors';
import { messages } from '../../Constants/Messages';
import { hp } from '../../Common/functions';
import { formatTimeWithAMPM } from '../../Common/helper';


const FlightItem = ({ item, index, onPressFlight }: { item: flightObjectType } & FlightItemProps) => {

    const { fare, displayData } = item;
    const { totalDuration, source, destination, airlines } = displayData;
    const { airport: destAirport } = source;
    const { airport: sourceAirport } = destination;


    const startTime = formatTimeWithAMPM(source?.depTime), endTime = formatTimeWithAMPM(destination?.arrTime);
    const startCityCode = sourceAirport.cityCode;
    const endCityCode = destAirport.cityCode;
    const airlineName = airlines?.[0].airlineName;
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.flightItem} onPress={() => onPressFlight && onPressFlight(item)}>
            <View style={RNStyles.flexRow}>
                <View style={styles.viewLeft}>
                    <Text style={styles.textArrivalTime} children={startTime} />
                    <Text style={styles.textCityCode} children={startCityCode} />
                </View>
                <View style={styles.viewMid}>
                    <View style={RNStyles.flexRowCenter} children={[
                        <View key={"0"} style={styles.viewGrayCircle} children={<View style={styles.viewDarkCircle} />} />,
                        <View key={"1"} style={styles.viewLine} />,
                        <All_Svgs.simplePlane key={"2"} color={colors.fontDarkGray} />,
                        <View key={"3"} style={styles.viewLine} />,
                        <View key={"4"} style={styles.viewGrayCircle} children={<View style={styles.viewDarkCircle} />} />
                    ]} />
                    <Text style={styles.textDurationTime} children={totalDuration} />
                </View>
                <View style={styles.viewRight}>
                    <Text style={styles.textArrivalTime} children={endTime} />
                    <Text style={styles.textCityCode} children={endCityCode} />
                </View>
            </View>
            <View style={styles.viewDotLine} />
            <View style={RNStyles.flexRowBetween}>
                <Text style={styles.textDurationTime}>{airlineName}</Text>
                <View style={RNStyles.flexRowCenter}>
                    <All_Svgs.Mail />
                    <Text children={"  |  "} />
                    <All_Svgs.Spoons height={hp(1.7)} />
                </View>
                <Text style={styles.textPrice}>{messages.ruppe + fare}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FlightItem;