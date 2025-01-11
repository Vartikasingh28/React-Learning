import "./EV.css";
export const EventHandling =()=> {
  // function handleButtonClick(){
  //   alert("Hey I am onclick Event");
  // }

  const handleButtonClick =(event) =>{
    // console.log(event);
    
        alert("Hey I am onclick Event");

  }
  const handleWelcomeUser =(user)=>{
    console.log(`Hey ${user}, welcome`);
    
  }
  return(
    <>
      <button onClick={handleButtonClick}>Click me</button>

      <button onClick={() => handleButtonClick()}>Click me 2</button>
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <button onClick={() => alert("Hey I am inline function")}>Inline Function</button>

      <button onClick={() =>handleWelcomeUser ("vartika")}>Click me</button>

    </>
  );
};