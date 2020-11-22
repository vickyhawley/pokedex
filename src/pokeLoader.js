import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const PokeLoader = () => {
        return(
            <View style={{flex: 1}}>
                <Image 
                  source={require('../assets/165.gif')}
                  style={{marginVertical: '50%', marginHorizontal:'40%', height: 100,
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center'}}
                />
            </View>
        )
    }


const styles = StyleSheet.create({
    img: {
     height: 100,
     width: 100,
     justifyContent: 'center',
     alignItems: 'center'
    }
})

export default PokeLoader;