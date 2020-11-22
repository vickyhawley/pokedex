import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PokeList from './pokeList';
import Pagination from './pagination';
import axios from 'axios';

function App() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=12')
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() =>{
        setLoading(true)
     let cancel
        
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
        })

        return() => cancel()
    }, [currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }
    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl)
    }

    if (loading) return (
        <Image
        source={require('../assets/165.gif')}
        ></Image>
    )
    
    return (
        <View style={styles.pokesearch}>
        <PokeList pokemon={pokemon}/>
        < Pagination 
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ?  gotoPrevPage : null}
        />
        </View>
    );
}


const styles = StyleSheet.create({
    pokesearch: {
        width: 200
    }
})
export default App;