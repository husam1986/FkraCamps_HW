import React,{Component} from "react";
import {View, Image,Text,StyleSheet} from "react-native";


export default class newsitem extends Component{
    render() {
        let {item}= this.props;
        const {description, publishedAt, title , urlToImage} = item;
        return (
                <View style={Styles.headerContainer}>
                <Image
                style={styles.image}
                resizeMode="cover"
                source = {{url: urlToImage}}
                />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.title}>{description}</Text>
                    <Text style={styles.title}>{publishedAt}</Text>
                </View>
                </View>

            
        )
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        height:60,
        flexdirection:"row"
    },
    image : {
        height:60
    },
    title:{
        color:"red"
    }
})