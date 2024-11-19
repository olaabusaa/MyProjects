import "./FirstPageSty.css"
import {useState} from "react";
import NewYork from "./NewYork";
import Italy from "./Italy";
export default function FirstPage() {

    const [InputValue, setInputValue] = useState("");
    const [NewYokFlag, setNewYokFlag] = useState(true);
    const[ItalyFlag, setItalyFlag] = useState(false);
    function newYok() {
        if (InputValue === "NewYork") {
            setNewYokFlag(true);
            setItalyFlag(false);
        }
    }
    function italy(){
        if (InputValue === "Italy") {
            setItalyFlag(true);
            setNewYokFlag(false);
        }
    }

    return(
        <div className="d1">
            <div className="d2">
                <input onChange={(event) => {
                    setInputValue(event.target.value);
                }} className="inputCity" placeholder="Enter a City"/>
                <button className="btn" onClick={()=>{
                    newYok();
                    italy();
                }}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div className="d3">
            <NewYork flag={NewYokFlag}/>
                <Italy flag={ItalyFlag}/>

            </div>
        </div>
    );
}