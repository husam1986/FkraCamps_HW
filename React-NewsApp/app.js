
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
  margin: 5px;
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
let DropDownL = styled.select `
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  border: 0px;
  height: 40px;
  outline: none;
  padding: 0 10px;
  margin: 5px;
`
let Enpty_div = styled.div `
width: 200px;
flex-grow: 1;  
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
  
  getNews(searchTerm = 'Iraq',sorting = '', art_numb=15) {
    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=${sorting}&apiKey=978d6c3818ff431b8c210ae86550fb1f`)
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
        news: data.articles.slice(0,parseInt(art_numb))
      })
      console.log(this.state)
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
     // this.setState({
     //   searchValue: ''
     // })
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

  onSortListChang(){
 let d = document.getElementById("DropDownSort").value;
  //console.log();
  this.getNews(this.state.searchValue,d)
  }

  onLimitListChang(){
    let d = document.getElementById("DropDownLimit").value;
     console.log(d);
     this.getNews(this.state.searchValue,'',d)
     }
   
// My >

  render() {
    return (
      <React.Fragment>
        <Navigation>
          <img width="150px;" src={require('./assets/logo.svg')}/>
          <Enpty_div></Enpty_div>
          <DropDownL id="DropDownSort" onChange = {this.onSortListChang.bind(this)}>
            <option value=''>default</option>
            <option value='title'>article title</option>
            <option value='publishedAt' >article date</option>
            <option value='Vote_value'>number of votes</option>
          </DropDownL>
          <DropDownL id="DropDownLimit" onChange = {this.onLimitListChang.bind(this)}>
            <option value="5">5 article</option>
            <option value="10">10 article</option>
            <option value="15">15 article</option>
          </DropDownL>
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

