
// import necesary libs.
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'


let SearchBox = styled.input `
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  border: 0px;
  height: 40px;
  outline: none;
  padding: 0 10px;
`
let Navigation = styled.header `
  display: flex;
  padding: 0px 10%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 25px rgba(0,0,0,0.16);
  height: 100px;
`

let NewsContainer = styled.main`
  background-color: red;
  padding: 20px 10%;

`

let NewsItem = styled.div`
  background-color: #fff;
  border: 2px solid #E5E9F2;
  min-height: 150px;
  margin: 20px 0px;
  border-radius: 4px;
  display: flex;
  padding: 10px;
`
//my
let NewsText = styled.div`
  padding-left: 14px;
  position: relative;
  flex-grow: 1;  
`

let DateTime = styled.time`
  position: absolute;
  bottom: 0px;
  color: #399DF2;
  font-family: sans-serif;
`


//<My 
let Voter = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
//My>


class News extends Component{
  
  constructor(){
    super()
  
    this.state = {
      news: [],
      searchValue: ''
    }
    //localStorage.clear()
    //
    
    this.loadDB()
    

  }
//< My   تحميل الاخبار والفوتنك من الداتابيس
  loadDB() {
    if (JSON.parse(localStorage.getItem('db')) == null){
      localStorage.setItem('db', JSON.stringify(this.state));
      this.getNews() };
      
    this.state = JSON.parse(localStorage.getItem('db'))
    console.log(this.state)
  }
  // My>
  
  getNews(searchTerm = 'Iraq') {
    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=978d6c3818ff431b8c210ae86550fb1f`)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      // <My   اضافة عنصر للاوبجكت  يحمل قيمة الفوتنك
      data.articles.forEach(element => {
        element.Vote_value = 0;
       })
      // My >

      this.setState({
        news: data.articles
      })
      localStorage.setItem('db', JSON.stringify(this.state)); /// My  حفظ الاخبار كلها بضمنها الفوتنك في اللوكل داتابيس
    })
  }

  onInputChange(event){
    this.setState({
      searchValue: event.target.value
    })
  } 

  onKeyUp(event){
    if(event.key == 'Enter'){
      this.getNews(this.state.searchValue)
      this.setState({
        searchValue: ''
      })
    }
  }
    //< My  ازرار الفوتنك  تخزن القيم في اوبجكت الاخبار ثم تعمل رندرنك لاضهار النتيجة
  onMouse_VoterUp(event,i){
    this.state.news[i].Vote_value +=1
    localStorage.setItem('db', JSON.stringify(this.state));
    ReactDOM.render(<App/>, document.getElementById('root'))
  }

  onMouse_VoterDown(event,i){
    this.state.news[i].Vote_value -=1
    localStorage.setItem('db', JSON.stringify(this.state));
    ReactDOM.render(<App/>, document.getElementById('root'))
  }
// My >

  render() {
    return (
      <React.Fragment>
        <Navigation>
          <img width="150px;" src={require('./assets/logo.svg')}/>
          <SearchBox 
          onChange={this.onInputChange.bind(this)} 
          onKeyUp={this.onKeyUp.bind(this)}
          value={this.state.searchValue} placeholder="search term"/>
        </Navigation>
        <NewsContainer>
          {
            this.state.news.map((item, i)=>{
              return (
              <NewsItem key={i}>
                  <img width="124px;" height="124px" src={item.urlToImage} />
                <NewsText>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <DateTime>{item.publishedAt}</DateTime>
                </NewsText>
                <Voter>
                  <img onMouseUp={this.onMouse_VoterUp.bind(this,this,i)} height="13px" src={require('./assets/upvote.svg')}></img>
                  <div>{item.Vote_value}</div>
                  <img onMouseUp={this.onMouse_VoterDown.bind(this,this,i)} height="13px" src={require('./assets/downvote.svg')} alt=""></img>
                </Voter>
              </NewsItem>
              )
            })
          }
        </NewsContainer>
      </React.Fragment>
    )
  }
}

function App() {
  return <div>
    <News/>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))

