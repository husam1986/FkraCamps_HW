import React ,{Component} from 'React';
import {View} from 'react-native';
import {Constants} from "expo";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import NewsList from "../components/newsList";

export default class Main extends Component {
    constructor(){
        super()
      
        this.state = {
          news: [],
          searchValue: '',
        }
    }  
    componentDidMount() {

    }

    search(q){
        fetch(
            `https://newsapi.org/v2/everything?q=${q}&from=2018-11-02&sortBy=publishedAt&apiKey=9a87892586ae4c79a9b8c86de704d03f`
        ).then(res => res.json())
        .then(news => {
            this.setState({news: news.articals});
        }).catch((err)=>{console.log(err)});

    }
    render() {
        return(
            <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
                <Header/>
                <SearchBar/>
                <NewsList/>
            </View>
        )
    }
} 