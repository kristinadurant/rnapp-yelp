import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const Results = ({ results, title, navigation }) => {
    if(!results.length) {
        return null;
    }

    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                data={results}
                horizontal
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress = {() => navigation.navigate('RestaurantPage', { id: item.id })} >
                            <ResultsDetail item={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});
export default withNavigation(Results);
