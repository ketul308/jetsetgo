import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { All_Svgs } from '../../Assets'
import { hp } from '../../Common/functions'
import { messages } from '../../Constants/Messages'

const EmptyFlightList = () => {
    return (
        <View style={styles.viewEmptyList}>
            <All_Svgs.NoFlight height={hp(5)} />
            <Text style={styles.textEmpty}>{messages.noFlightFound}</Text>
        </View>
    )
}

export default EmptyFlightList;