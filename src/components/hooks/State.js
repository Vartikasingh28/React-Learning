import { useState } from "react";
export const State=()=>{
//     let value=0;
// const  handleButtonClick=()=>{
// value++;
// console.log(value);
//             <h1>{value}</h1>

const[count,setCount]= useState(0);
        console.log("parent component rendered");

const handleButtonClick = () =>{

    setCount(() =>count +1);
}

    return(
        <>
        <section className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
            </section>
            <ChildComponent count={count}/>
        </>
    )
}
function ChildComponent ({count}){
    console.log("child component rendered");
    return(
<div className="main-div">
<h2>Child Component - {count}</h2>
</div>
    ) 
    
}

export function Sibling (){
    console.log("Sibling component rendered");
    return(
<div className="main-div">
<h2>Child Component </h2>
</div>
    ); 
}

