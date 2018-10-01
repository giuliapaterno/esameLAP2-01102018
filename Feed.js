import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import Card from '../components/Card';
import CardProva from '../components/SearchInput';

const linkJson = 'https://picsum.photos/list';


export default class Feed extends React.Component {
    state = {
        list: []
    }
/*     getJSON(url) {
        return get(url).then(JSON.parse);
    } */

    componentDidMount() {
        this._getData(); 
        //this.setState({list:data});
        
    }

    _getData = async () => {
        serverURL = linkJson;
        const headers = {
          "Content-Type": "application/json",
          accept: "application/json"
        };
        return await fetch(serverURL, { headers: headers })
            .then(res => res.json())
            .then(json => {
             //console.log(json);
             this.setState({list:json})
            })
            .catch(error =>
              console.log("Some errors occured while getting data", error)
            );
        };
      
    _renderRow = ({ item }) => {
        return (
            <Card item={item} goComments = {() => this.props.navigation.navigate('Comments', { item: item })}/>
        )
    };

    _keyExtractor = (item, index) => {
        item.id = index;
        return String(index);
    };
    render() {
        //console.log(this.state.list)
        return (
        <FlatList
            data={this.state.list}
            renderItem={this._renderRow}
            keyExtractor={this._keyExtractor}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
