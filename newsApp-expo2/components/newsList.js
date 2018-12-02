import React ,{Component} from 'React';
import { View,Text } from 'react-native';

export default class NewsList extends Component{
    render() {
        return (
        <View style={{flex:1 ,alignItems:"center", backgroundColor:'green'}}>
        <View>
            <Text>NewsList 1</Text>
            <Text>NewsList 2</Text>
            <Text>NewsList 3</Text>
        </View>


        </View>
        
        );
        
    }
} 