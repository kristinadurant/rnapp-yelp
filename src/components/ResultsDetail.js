import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ item }) => {
    return (
        <View style={styles.listItem}>
            <Image source={{ uri: item.image_url }} style={styles.image}/>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.location.address1}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        paddingLeft: 10
    },
    image: {
        width: 250,
        height: 180
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;
