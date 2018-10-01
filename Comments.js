import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import SearchInput from '../components/SearchInput';


export default class Comments extends React.Component {
    state = {
        count: 0,
        commento: ''
    }

    componentDidMount() {
        const item = this.props.navigation.state.params.item;
        this.setState({ item: item });
    }

    onSubmitComplete = (comment) => this.setState({commento: comment})
    

	render() {
		return (
			<View style = {styles.container}>
                <View style = {{height: 20, margin: 5}}>
                    <Text>Qui ci sono i tuoi commenti</Text>
                </View>
                <SearchInput
                    style = {styles.search}
                    initialName = "" 
					onSubmit = {this.onSubmitComplete}
                />
                <ScrollView>
                    <View>
                        <Text>{this.state.commento}</Text>
                    </View>
                </ScrollView>
            </View>

		);
	}

  
    }
Comments.navigationOptions = ({ navigation }) => ({
        title: "Comments",
        headerLeft: <Button 
            title="Close" 
            onPress={() => navigation.goBack()} 
            color = 'black'
            borderColor= 'white'
            />,
    
    });
    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    search: {
		height: 40,
		width: 300,
		borderColor: "green",
		borderWidth: 1,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center"

	},
  });
  