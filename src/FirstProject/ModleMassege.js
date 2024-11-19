import "./FormPageStyle.css";

export default function ModleMassege({flag , content,s}){

        let classh1="";
        if(s==false){
            classh1="H1contentred";
        }
        else {
            classh1="H1contentgreen";

        }
 if(flag){
     return(
         <div className="Modle">
             <div className="DivModel">
                 <h1 className={classh1}>{content}</h1>

             </div>


         </div>


     );
 }
 else {
     return (<></>);
 }

}
