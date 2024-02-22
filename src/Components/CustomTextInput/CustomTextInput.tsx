import React, { forwardRef } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles';
import { RNStyles } from '../../Common/RNStyles';

type Props = {
    onChangeText?: ((text: string) => void)
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    placeholder?: string
    onPressRightIcon?: () => void
    onPressLeftIcon?: () => void
}

const CustomTextInput = forwardRef<TextInput, Props>((props, ref) => {
    const {
        onChangeText,
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
                ref={ref}
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
})

export default CustomTextInput;