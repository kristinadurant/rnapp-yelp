import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import Hours from '../components/SingleRestaurantScreen/Hours';

const SingleRestaurantScreen = ({ navigation }) => {
    const [restaurant, setRestaurant] = useState(null);
    const id = navigation.getParam('id');

    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`);
        setRestaurant(response.data);
    };

    useEffect(() => {
        getRestaurant(id);
    }, []);

    if (!restaurant) {
        return null;
    }

    return (
        <>
            <Text style={styles.name}>
                {restaurant.name}
            </Text>
            <Text>
                {restaurant.display_phone}
            </Text>
            <Text>
                {restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}
            </Text>
            <Hours hours={restaurant.hours[0].open} />
            <FlatList
                data={restaurant.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </>
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
        fontWeight: 'bold',
        fontSize: 30
    }
});

export default SingleRestaurantScreen;
