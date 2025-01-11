import "./EV.css";
export const EventPropagation =()=>{
const handleGrandParent=() =>{
    console.log("Grandparent clicked");
    
}
const handleParentClick=() =>{
    console.log("Parent clicked");
    
}
const handleChildClick=(event)=>{
    console.log(event);
    console.log("child clicked");
    
}
    return(
        <>
            <section className="main-div">
<div className="g-div" onClickCapture={handleGrandParent}>
<div className="p-div" onClickCapture={handleParentClick}>
<button className="c-div" onClickCapture={handleChildClick}>
Child Div
</button>
</div>
</div>
            </section>
        </>
    );
};