import { IoIosSwitch } from "react-icons/io";
import "./ToggleSwitch.css";
import {useState} from "react";
export const ToggleSwitch=()=>{
    const[isOn,setIsOn]= useState(true);
    const handleToggleSwitch=()=>{
        setIsOn(!isOn);
    }
    const checkIsOn =isOn ? "on" : "off";
    const toggleBGColor={backgroundColor:isOn ? "#4caf50" : ""}
    return(
        <>
        <h1 style={{color:"#000" , textAlign: "center"}}>
        Toggle Switch  <IoIosSwitch  style={{color:"red" , textAlign: "center"}}/>
</h1>

<div className="toggle-switch" style={toggleBGColor}onClick={handleToggleSwitch}>
    <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{checkIsOn}</span>
    </div>
</div>
        </>
    );
};