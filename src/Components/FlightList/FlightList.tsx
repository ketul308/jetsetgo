import { View, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import FlightItem from './FlightItem'
import { styles } from './styles'
import { flightObjectType } from '../../Screens/HomeScreen/Types'
import EmptyFlightList from './EmptyFlightList'

type Props = {
    data: Array<flightObjectType>
    onPressFlight?: (data: any) => void
}

const FlightList = (props: Props) => {
    const { data, onPressFlight } = props;

    const memoizedFlatList = useMemo(() => (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            initialNumToRender={8}
            maxToRenderPerBatch={8}
            windowSize={8}
            ListEmptyComponent={EmptyFlightList}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={styles.itemSeparatorComponent} />}
            renderItem={({ item, index }) => <FlightItem {...{ index, item, onPressFlight }} />}
        />
    ), [data]);

    return (
        memoizedFlatList
    )
}

export default FlightList