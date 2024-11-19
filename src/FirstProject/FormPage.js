import "./FormPageStyle.css";
import {useState} from "react";
import "./ModleMassege";
import ModleMassege from "./ModleMassege";
export default function FormPage(){

      const [InputForm , setInputForm] = useState(
          {Name:"",PhoneNumber:0,Age:0,AreYouEmployee:false,Salary:""},);
      const[ModelMassege,setModelMassege] = useState({state:false,content:"",s:false});
      // const [content, setContent] = useState("");

     function Validation(){
         if(InputForm.PhoneNumber.length>=10 && InputForm.PhoneNumber.length<=12 && InputForm.Age>18 && InputForm.Age<60){
             setModelMassege({state:true,content:"the submit successfully",s:true});
         }
         else if((InputForm.PhoneNumber.length<10 || InputForm.PhoneNumber.length>12)&&(InputForm.Age<18 || InputForm.Age>60)){
             setModelMassege({state:true,content:"the Age and Number invalid",s:false});
         }

         else if(InputForm.PhoneNumber.length<10 || InputForm.PhoneNumber.length>12) {
             setModelMassege({state:true,content:"the number is invalid",s:false});
         }
         else if (InputForm.Age<18 || InputForm.Age>60){
             setModelMassege({state:true,content:"the Age out of range",s:false});
         }


     }
     function Close(){
         if(ModelMassege) {
             setModelMassege(false);
         }
     }
     const DisabledCheck=(InputForm.Name=="" || InputForm.PhoneNumber==0
         || InputForm.Age==0 || InputForm.AreYouEmployee==false || InputForm.Salary=="");

     let flagClass="";
    if(DisabledCheck){
        flagClass="BtnSubmit";
    }

    return(
        <div className="Contener" onClick={Close}>
            <ModleMassege flag={ModelMassege.state} content={ModelMassege.content} s={ModelMassege.s}/>
           <form onSubmit={(event)=>{event.preventDefault()}}>
            <div className="Div1">

                <h1 className="Header">Requesting a Loan</h1>
                <hr/>

                <label>Name: </label>
                <input  value={InputForm.Name} onChange={(event)=>{
                    setInputForm({...InputForm,Name:event.target.value});
                }}/>
                <br/>

                <label>Phone Number: </label>
                <input  value={InputForm.PhoneNumber} onChange={(event)=>{
                    setInputForm({...InputForm,PhoneNumber:event.target.value});
                }}/>
                <br/>

                <label>Age: </label>
                <input value={InputForm.Age} onChange={(event)=>{
                    setInputForm({...InputForm,Age:event.target.value});
                }}/>
                <br/>

                <label>Are you an Employee? </label>
                <input checked={InputForm.AreYouEmployee} type={"checkbox"} checked={InputForm.AreYouEmployee} onChange={(event)=>{
                    setInputForm({...InputForm,AreYouEmployee:event.target.checked});
                }}/>
                <br/>

                <label>Salary: </label>
                <select  value={InputForm.Salary} onChange={(event)=>{
                    setInputForm({...InputForm,Salary:event.target.value});
                }}>
                    <option>Less than 500$</option>
                    <option>Grater than 500$</option>
                    <option>Less than 200$</option>
                </select>

                <br/>
                <br/>
                <div className="DivBtn" >
                    <button className={flagClass} disabled={DisabledCheck} onClick={Validation}>Submit</button>
                </div>
            </div>
           </form>
        </div>
    );

}