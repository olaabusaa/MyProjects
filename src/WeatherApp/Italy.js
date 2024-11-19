import "./FirstPageSty.css"
export default function Italy({flag}){

   if (flag){
       return(
           <div className="ItalyDiv1">
               <div className="ItalyDiv2"><img className="sunphoto" src="https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/10d.svg"/>
               </div>
               <div className="ItalyDiv3">
                   <h3>Today</h3>
                   <h1>Italy</h1>
                   <p>Temperature:6°C </p>
                   <p> Rainy</p>
               </div>
               <div className="wednsday">
                   <h4>Wednsday</h4>
                   <img className="icon" src="https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/04d.svg"/>
                   <p className="Temp">21°C</p>
               </div>
               <div className="thursday">
                   <h4>Thursday</h4>
                   <img className="icon"
                        src="https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/02n.svg"/>
                   <p className="Temp">24°C</p>
               </div>
               <div className="friday">
                   <h4>Monday</h4>
                   <img className="icon"
                        src=" https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/02n.svg"/>
                   <p className="Temp">21°C</p>

               </div>
               <div className="sunday">
                   <h4>Sunday</h4>
                   <img className="icon"
                        src="https://raw.githubusercontent.com/alexkowsik/react-weather-app/0db0670c49fb9c4be1ef85c95b01714def7ad3ab/src/images/04d.svg"/>
                   <p className="Temp">18°C</p>
               </div>
           </div>
       );
   }

    return(<></>);
}