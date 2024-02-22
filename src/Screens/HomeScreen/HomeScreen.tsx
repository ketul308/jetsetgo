import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ScreenContainer from '../../Components/ScreenContainer/ScreenContainer';
import { Props, } from './Types';
import FlightList from '../../Components/FlightList/FlightList';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import { colors } from '../../Theme/colors';
import { styles } from './styles';
import { All_Svgs } from '../../Assets';
import ListShortComponent from '../../Components/FlightList/ListShortComponent';
import { messages } from '../../Constants/Messages';
import { RNStyles } from '../../Common/RNStyles';
import FlightItemSkeleton from '../../Components/Skeletons/FlightItemSkeleton/FlightItemSkeleton';
import useHomeScreen from './useHomeScreen';

const HomeScreen: React.FC<Props> = (props: Props) => {

    const {
        airlineName,
        setAirlineName,
        sortBy,
        status,
        visibleFlights,
        onPressFlight,
        onPressRightIcon,
        onShort,
        skeletonArray,
        flatlistOneElement
    } = useHomeScreen();

    return (
        <ScreenContainer backgoundColor={colors.white}>
            <View style={RNStyles.flex}>
                <FlatList
                    data={flatlistOneElement}
                    stickyHeaderIndices={[1]}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => <View style={styles.viewTopHeader} children={[<Text key={0} children={messages.letsBook} style={styles.textTitle} />, <View key={1} style={styles.viewExtraBg} />]} />}
                    renderItem={() => {
                        return (
                            <View style={styles.textInputContainer}>
                                <CustomTextInput
                                    value={airlineName}
                                    placeholder={messages.searchAirline}
                                    leftIcon={<All_Svgs.Search />}
                                    rightIcon={airlineName.length ? <All_Svgs.Close /> : undefined}
                                    onChangeText={(t) => setAirlineName(t)}
                                    onPressRightIcon={onPressRightIcon}
                                />
                                <View>
                                    {visibleFlights.length > 0 && <ListShortComponent onSelectSort={onShort} sortType={sortBy} />}
                                </View>
                            </View>
                        )
                    }}
                    ListFooterComponent={() => (
                        <View style={styles.mainPadding}>
                            {
                                status == "loading" ?
                                    <FlatList
                                        data={skeletonArray}
                                        renderItem={() => <FlightItemSkeleton />}
                                        ItemSeparatorComponent={() => <View style={styles.itemSeparatorComponent} />}
                                    />
                                    :
                                    <FlightList
                                        data={visibleFlights}
                                        onPressFlight={onPressFlight}
                                    />
                            }
                        </View>
                    )}
                />
            </View>
        </ScreenContainer>
    )
}

export default HomeScreen;