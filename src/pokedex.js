import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Apps from './App';
import Pagination from './pagination';
import PokeList from './pokeList';



const pokedex = () => {
        return(
            <View style={styles.pokedex}>
                <View style={styles.topStrip}>
                    <View style={styles.ball}></View>
                </View>
                <View style={styles.pdScreen}>
                <View style={styles.moveApp}>
                 < Apps />
                 </View>
                </View>
            
            </View>
        )
    }


const styles = StyleSheet.create({
    pokedex: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',

    },
    topStrip: {
     height: 125,
     width: '100%',
     borderRightWidth: 0,
     borderLeftWidth: 0,
     borderTopWidth: 2,
     borderBottomWidth: 2,
     borderColor: 'black',
     backgroundColor: 'red',
     marginBottom: 25,
     shadowColor: "#000",
     shadowOffset: {
	    width: 0,
	    height: 2,
      },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5,
    },
    ball: {
     marginTop: 15,
     marginLeft: 35,
     height: 90,
     width: 90,
     backgroundColor: '#01B3FA',
     borderRadius: 500,
     borderWidth: 10,
     borderColor: 'black',
     shadowColor: "#000",
     shadowOffset: {
	    width: 0,
	    height: 2,
      },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5,

    },
    moveApp: {
marginTop: 70
    },
   pdImage: {
       height: 300,
       width: 'auto',
       resizeMode: 'contain',
   },
   pdScreen: {
       padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
       width: 320,
       height: 400,
       backgroundColor: 'white',
       borderColor: 'black',
       borderWidth: 7,
       borderRadius: 35,
       marginBottom: 120
   }

});

export default pokedex;