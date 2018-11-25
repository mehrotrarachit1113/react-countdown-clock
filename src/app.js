import React , { Component } from 'react'
import { Form , FormControl , Button } from 'react-bootstrap'
import Clock from './clock'
import './App.css'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            deadline : "December 25, 2018",
            newDeadline : ''
        }
    }

    changeDeadline(){
       this.setState({ deadline : this.state.newDeadline})
    }

    render(){
        return(
           <div className = "App">
              
               <div className = "App-title">Days to Christmas { this.state.deadline }</div>
              
               <Clock deadline = {this.state.deadline}/>

               <Form inline>
                   <FormControl 
                   className = 'deadline-input'
                   placeholder='New Date'
                   onChange={event => this.setState({ newDeadline : event.target.value })} 
                   />
                   <Button onClick = {() => this.changeDeadline()}>
                       Submit
                    </Button>
                </Form>

           </div>
        )
    }
}

export default App