import React ,{Component} from "react";
class Click extends Component{
    constructor(){
        super()
        this.state = {
            l:11
        }

    }
    click_button(){
        this.setState({
            l:this.state.l+10
        })
    }
    render(){
        //remember that event handling 
        //event binding 
        // return(
        //     <div>
        //         <button onClick={this.click_button.bind(this)}>
        //            click
        //         </button>
        //         <h> {this.state.l}</h>
        //     </div>
        // )
        //
        return(
            <div>
                <button onClick={()=>this.click_button()}>
                   click
                </button>
                <h> {this.state.l}</h>
            </div>
        )
    }
}
export default Click
 