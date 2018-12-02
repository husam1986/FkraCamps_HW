import React ,{Component} from 'React';
import {View,Image} from 'react-native';

export default class Header extends Component{
    render() {
        return (
        <View style={{height:80,flexDirection:"row",alignItems:"center", backgroundColor:'red'}}>
            <Image style={{ width: 80,height:40, padding:0 , margin:0}} source ={require('../assets/logo.png')}/>
        </View>

        );}
} 