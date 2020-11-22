import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function PokeList({ pokemon }) {
    return (
        <View>
          {pokemon.map(p => (
              <View key={p}><Text style={styles.poketext}>{p}</Text></View>
          ) )}
        </View>
    )
}

const styles = StyleSheet.create({
    poketext: {
        fontSize: 16,
        textAlign: 'center'
    }
    

})
