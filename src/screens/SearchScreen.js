import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage
                ? <Text>{errorMessage}</Text>
                :
                <ScrollView>
                    <Text>We have found {results.length} results</Text>
                    <Results title="Cost Effective" results={filterResultsByPrice('$')} />
                    <Results title="Bit Pricier" results={filterResultsByPrice('$$')} />
                    <Results title="Big Spender" results={filterResultsByPrice('$$$')} />
                </ScrollView>
            }
        </>
    )
}

export default SearchScreen;