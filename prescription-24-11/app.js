import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components"
import ReactModal from "react-modal"

let Context = React.createContext()


let Button = styled.button`
  background-color: #466AB3;
  padding: 10px;
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: bold;
  min-width: 100px;
`
let Container = styled.main`
  background-color: red;
  min-height: 500px;
  padding: 10px 10%;
  
`
let TextInput = styled.input`
  display: block;
  border: 2px solid #000;
  width: 100%;
  margin: 10px 0px;
  height: 40px;
  font-size: 1.4rem;
`

let Navigation = styled.header`
  background-color: #fff;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10%;
`
let Prescript = styled.div`
  height: 80px;
  border: 1px solid;
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 2rem;
  margin-top: 20px;
`

////Header///////////////////////////// 

class Header extends React.Component {

    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Context.Consumer>
                {
                    (ctx) => {
                        return (
                            <Navigation>
                                <ReactModal isOpen={ctx.state.modalState}>
                                    <h1>hussam </h1>
                                    <button onClick={()=>{ctx.actions.toggle();}}>hhh</button>

                                </ReactModal>


                                <img width="120px;" src={require('./assets/logo.png')} />
                                <Button onClick={() => {
                                    ctx.actions.toggle();
                                }}>Post A Job</Button>
                            </Navigation>
                        )
                    }
                }
            </Context.Consumer>

        )
    }
}



//////// Prescriptions /////////////

class Prescriptions extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Context.Consumer>
                {
                    (ctx)=>{
                        return (
                        <Container>{
                            ctx.state.prescrip.map((item,i)=>{
                                return <Prescript key={i}>{item.drug}</Prescript>
                            })

                        }</Container>)
                    }
                }
            </Context.Consumer>
        )
    }
}



////////////////App////////

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            prescrip: [{
                drug: 'pramastol',
                date: '18-11-2018'
            }],
            doctor_name: '',
            modalState: false,
        }
    }

    render() {
        return (
            <Context.Provider value={
                {
                    state: this.state,
                    actions: {
                        toggle: ()=>{
                            this.setState({
                              modalState: !this.state.modalState
                            })
                          }
                    }
                }
            }>
                <Header />
                <Prescriptions/>
            </Context.Provider>
        )

    }
}

ReactDOM.render(<App />, document.getElementById('root'))