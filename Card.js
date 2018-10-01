import React from 'react';
import { StyleSheet, Text, View,Dimensions, TouchableOpacity, Image } from 'react-native';
const Width = Dimensions.get('window').width
const link = 'http://picsum.photos/600/600?';

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor); 
    
    return bgColor;

    }
const bgC = random_bg_color();

export default Card = (props) => {
    const author = props.item.author;
    const vect = author.split(' ');
    const name = vect[0];
    const surname = vect[1];
    const initialN = name.substring(0,1);
    const initialS = surname.substring(0,1);
    const initials = initialN+initialS;
      return (
      <View style={styles.container}>
      <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <View style = {styles.avatar}>
                    <Text style = {styles.text}>{initials}</Text>
                </View>
            <View style = {styles.informationContainer}>
                <Text>{props.item.author}</Text>
                
            </View>
            <TouchableOpacity onPress = {props.goComments}>
                    <View>
                        <Text>0 Comments</Text>
                    </View>
                </TouchableOpacity>
                </View>
            <View style = {styles.imageContainer}>
                <Image style = {{width: Width, height: 300}} source = {{uri: link+props.item.id}}/>
            </View>
       </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    //justifyContent: 'center',
  },
  informationContainer: {
    marginRight: 60    
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: bgC,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 5
  },
  text: {
    color: 'white'
  }
});
