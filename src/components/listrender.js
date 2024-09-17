import React from "react";

function  listrender ()  {
    const person=[
        {
            name:"krishna",
            age:20
        },
        {
            name:"Geeta",
            age:22
        },
        {
            name:"reena",
            age:21
        },
        {
            name:"charan",
            age:22
        }
    ]
    const per = person.map(x => (<div>{x.name} and {x.age}</div>))
    return(<div>{per}</div>);
}
export default listrender;