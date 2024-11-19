import "./StylePage.css";
import Food from "./Food";
import {useState} from "react";
import Mountain from "./Mountain";
import Beach from "./Beach";
import Birds from "./Birds";
import Rose from "./Rose";
import Car from "./Car";

export default function HomePage() {

const [MountainBolean, setMountainBolean] = useState(true);
const [FoodBolean, setFoodBolean] = useState(false);
const [BeachBolean, setBeachBolean] = useState(false);
const [BirdsBolean, setBirdsBolean] = useState(false);
const [RoseBolean, setRoseBolean] = useState(false);
const [CarBolean, setCarBolean] = useState(false);
const [InputSearch, setInputSearch] = useState("");

function FoodFun(){
    setBirdsBolean(false);
    setMountainBolean(false);
    setBeachBolean(false);
    setRoseBolean(false);
    setCarBolean(false);
    setFoodBolean(true);

}
   function MountainFun(){
       setBirdsBolean(false);
    setBeachBolean(false);
    setFoodBolean(false);
       setRoseBolean(false);
       setCarBolean(false);
    setMountainBolean(true);
   }
    function BeachFun(){
    setBirdsBolean(false);
        setFoodBolean(false);
        setMountainBolean(false);
        setRoseBolean(false);
        setCarBolean(false);
        setBeachBolean(true);
    }
    function BirdsFun() {

        setFoodBolean(false);
        setMountainBolean(false);
        setBeachBolean(false);
        setRoseBolean(false);
        setCarBolean(false);
        setBirdsBolean(true);
    }
     function SearchFun(){
       if (InputSearch=="Rose" || InputSearch=="rose" )
       {
           setFoodBolean(false);
           setMountainBolean(false);
           setBeachBolean(false);
           setBirdsBolean(false);
           setCarBolean(false);
           setRoseBolean(true);
       }
       if(InputSearch=="Car" || InputSearch=="car") {
           setFoodBolean(false);
           setMountainBolean(false);
           setBeachBolean(false);
           setBirdsBolean(false);
           setRoseBolean(false);
           setCarBolean(true);
       }
     }
    return (
        <div className="container">

            <div className="Div1">
                <h1 className="header">SnapShot</h1>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <input  onChange={(event)=>{
                     setInputSearch(event.target.value);}} placeholder="Saerch..."/>
                    <button onClick={SearchFun} className="btnSearch">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <br/>
                <br/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button onClick={MountainFun}>Mountain</button>
                    <button onClick={BeachFun}>Beach</button>
                    <button onClick={BirdsFun} >Birds</button>
                    <button onClick={FoodFun}>Food</button>
                </div>
            </div>

            <div className="Div2">
                <Mountain flag={MountainBolean}/>
                <Food flag={FoodBolean}/>
                <Beach flag={BeachBolean}/>
                <Birds flag={BirdsBolean}/>
                <Rose flag={RoseBolean}/>
                <Car flag={CarBolean}/>
            </div>


        </div>

    );
}