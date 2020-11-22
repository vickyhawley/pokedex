import React from 'react';
import { View, Header, Item, Input, Icon } from 'react-native';
import {PokeLoader} from './pokeLoader';
import SearchBody from './searchBody';
import axios from 'axios';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        pokeSearch: "",
        onCall: true,
        data: {}
        }
    }
        searchPoke = () =>{
            this.setState({onCall: true});
            if(this.state.pokeSearch === "") {
                return;
            }
        const self = this;
        axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
		.then(function(response){
			console.log(response.data);
			self.setState({data: response.data});
			self.setState({onCall: false});
		})
		.catch(function(error){
			console.log(error);
		});
    }

    renderBody = () =>{
        if(this.state.onCall){
            return(
               <PokeLoader />
            )
        } 
        else{
    
            return(
               <SearchBody data={this.state.data}/>
            )
         }
    }

        render(){
            return(
               <View style={{flex: 1}}>
                    <Header 
                     searchBar={true}
                     rounded
                     >
                    <Item>
                       <Icon name="ios-search" onPress={this.state.searchPoke}/>
                       <Input value={this.state.pokeSearch}
                           placeholder="Search Pokemon"
                           onChangeText={(pokeSearch) =>this.setState({pokeSearch})}
                        />
                    </Item>
                
                    </Header>
                   {this.renderBody()}
               </View>
        )
     }
    
}

export default Search;