import React, { Component } from "react";
class State_message extends Component{
    constructor(){
        super()
        this.state = {
            cont:0,
            message: "hello state-topic testing in rect"
        }
    }
    increase(){
        this.setState({
            cont:this.state.cont+1
        })
    }
    change_state(){
        this.setState({
            message:"sucessfully changed the state"
        })
    }
    render(){
        return(
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={()=>this.change_state()}>
                    change_state
                </button>
                <button onClick={()=>this.increase()}>click to increase</button>
                <h1>
                    {this.state.cont}
                </h1>
            </div>
        )
    }
}
export default State_message ;