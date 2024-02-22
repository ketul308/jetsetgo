import { View } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { styles } from '../../FlightList/styles';
import { hp, wp } from '../../../Common/functions';


const FlightItemSkeleton = () => {
    return (
        <View style={styles.flightItem}>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item width={"25%"} justifyContent="center" alignItems="center">
                        <SkeletonPlaceholder.Item width={wp(15)} height={hp(2)} />
                        <SkeletonPlaceholder.Item width={wp(12)} height={hp(1.6)} marginTop={hp(0.6)} />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item width={"50%"} justifyContent="center" alignItems="center">
                        <SkeletonPlaceholder.Item width={wp(15)} height={hp(2)} />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item width={"25%"} justifyContent="center" alignItems="center">
                        <SkeletonPlaceholder.Item width={wp(15)} height={hp(2)} />
                        <SkeletonPlaceholder.Item width={wp(12)} height={hp(1.6)} marginTop={hp(0.6)} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
            <View style={styles.viewDotLine} />
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent="space-between">
                    <SkeletonPlaceholder.Item width={wp(15)} height={hp(1.5)} />
                    <SkeletonPlaceholder.Item width={wp(15)} height={hp(1.5)} />
                    <SkeletonPlaceholder.Item width={wp(15)} height={hp(1.5)} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </View>
    )
}

export default FlightItemSkeleton;