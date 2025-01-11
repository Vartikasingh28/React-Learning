import "./components/EV.css";
import { Todo } from "./projects/Todo/Todo";
// import { LiftingState, LiftState } from "./components/LiftStateUp";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
// import { State } from "./components/hooks/State";

export const App= () =>{
  return(
     <section >
    {/* <State/> */}
    {/* <Sibling/> */}
    {/* <LiftState/> */}
    {/* <ToggleSwitch/> */}
    {<Todo/>}
  </section>
  );
};

// export function Sibling (){
//     console.log("Sibling component rendered");
//     return(
// <div className="main-div">
// <h2>Sibling Component </h2>
// </div>
//     ) 
    
// }
