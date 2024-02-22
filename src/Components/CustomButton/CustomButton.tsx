import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../Theme/colors'


const CustomButton = (props: Props) => {
    const { label, onPress } = props;
    return (
        <TouchableOpacity style={styles.touchButton} onPress={onPress}>
            <LinearGradient style={styles.touchButton} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.white, colors.white]}>
                <Text style={styles.textLabel}>{label}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton