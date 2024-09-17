import React ,{Component}from "react";
const d = ({test1,test2}) => {
    return(
        <div>functional desturcture = {test1} and {test2}</div>
    )
}
export default d;
//class based implememtation below
// class desturcture extends Component {
//     render(){
//         const {test1, test2} = this.props
//         return(
//             <div>
//                 Testing desturcture: {test1} passed && {test2} passed
//             </div>
//         )
//     }
// }
// export default desturcture