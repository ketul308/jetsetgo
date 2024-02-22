import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from './styles'
import { All_Svgs } from '../../Assets'
import { colors } from '../../Theme/colors'
import { messages } from '../../Constants/Messages'

const ListShortComponent = ({ onSelectSort, sortType }: ListShortComponentProps) => {

    const _renderItem = useCallback(({ item }: { item: string }) => (
        <TouchableOpacity onPress={() => onSelectSort && onSelectSort(item)}>
            <View style={styles.viewSortItem} >
                <Text style={styles.textDurationTime}>{item}</Text>
                {
                    sortType?.name === item &&
                        sortType?.type === "INC" ?
                        <All_Svgs.UpArrow color={colors.fontDarkGray} />
                        : sortType?.type === "DCR" ?
                            <All_Svgs.DownArrow color={colors.fontDarkGray} /> :
                            undefined
                }
            </View>
        </TouchableOpacity>
    ), [sortType])

    return (
        <FlatList
            horizontal
            ListHeaderComponent={() => <Text style={styles.textDurationTime} children={messages.shortBy} />}
            data={["Price"]}
            contentContainerStyle={styles.sortList}
            renderItem={_renderItem}
        />
    )
}

export default ListShortComponent;