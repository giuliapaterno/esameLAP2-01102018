import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

 
export default class SearchInput extends React.Component {
	state = { 
		commento: ''
	}
	handleTextInput = (text) => {
	this.setState({commmento: text})
	}

	render() {
		return (
			<View style = {this.props.style}> 
				<TextInput 
					value = {this.state.commento}
					onChangeText = {this.handleTextInput} 
					placeholder = "Commenta"
					onSubmitEditing = {() => this.props.onSubmit(this.state.commento)}
		 		/> 
			</View>
		)
	}
}