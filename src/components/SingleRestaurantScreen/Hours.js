import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const DAYS = {
    "0": "Monday",
    "1": "Tuesday",
    "2": "Wednesday",
    "3": "Thursday",
    "4": "Friday",
    "5": "Saturday",
    "6": "Sunday"
}

const Hours = ({ hours }) => {
    return (
        <FlatList
            style={{height: 500}}
            data={hours}
            keyExtractor={item => item.day}
            renderItem={({item}) => {
                return (
                    <View>
                        <Text>{DAYS[item.day]}</Text>
                        <Text>{item.start} - {item.end}</Text>
                    </View>
                )
            }}
        />
    )
}

export default Hours;
