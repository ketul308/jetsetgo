import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles';
import { RNStyles } from '../../Common/RNStyles';

type Props = {
    onChangeText?: ((text: string) => void)
    value?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    placeholder?: string
    onPressRightIcon?: () => void
    onPressLeftIcon?: () => void
}

const CustomTextInput = (props: Props) => {
    const {
        onChangeText,
        value,
        leftIcon,
        rightIcon,
        placeholder,
        onPressLeftIcon,
        onPressRightIcon,
    } = props;

    return (
        <View style={RNStyles.flexRowCenter}>
            {
                leftIcon &&
                <TouchableOpacity
                    style={styles.leftIcon}
                    onPress={onPressLeftIcon}
                >
                    {leftIcon}
                </TouchableOpacity>
            }
            <TextInput
                value={value}
                style={[
                    styles.TextInput, (leftIcon && rightIcon) ?
                        { ...styles.textInputLeftPad, ...styles.textInputRightPad } :
                        leftIcon ? styles.textInputLeftPad :
                            rightIcon ? styles.textInputRightPad : undefined
                ]}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
            {
                rightIcon &&
                <TouchableOpacity
                    style={styles.rightIcon}
                    onPress={onPressRightIcon}
                >
                    {rightIcon}
                </TouchableOpacity>
            }
        </View>
    )
}

export default CustomTextInput;