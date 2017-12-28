import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Discover from './discover'
import LastChance from './lastChance'

const discover = ({navigation}) => (
    <Discover navigation={navigation} />
)
const lastChance = ({navigation}) => (
    <LastChance navigation={navigation}/>
)
const DiscoverRoute = StackNavigator({
    0: {
        screen: discover
    },
    1: {
        screen: lastChance
    }
},{
    headerMode: 'none',
    mode: 'modal'
})
export default DiscoverRoute 