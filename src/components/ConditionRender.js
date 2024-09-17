import React from "react";
function conditional(){
    let islogeddin=false;
    if(islogeddin){return(<div>using condtional rendering when islogeddin = True</div>);}
    else{return(<div>using condtional rendering when islogeddin = false</div>);}
}
export default conditional;