import React, {useState} from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = props =>{
    let [enteredusername , setEnteredusername]= useState("")
    let [enteredage , setEnteredage]= useState("")
    
     const SubmitHandeler = (event)=>{
        event.preventDefault();
        if(enteredusername.trim().length===0 || enteredage.trim().length===0){
            return;
        }
        if(+ enteredage <1){
            return;
        }
        console.log(enteredusername,  enteredage)
        setEnteredusername("");
        setEnteredage("");
     }
    
     const usernameHandeler = event =>{
        setEnteredusername(event.target.value);
        
     }
     const ageHandeler = event =>{
        setEnteredage(event.target.value);
     }

    return (
       
        <Card className={styles.input}>
    <form onSubmit={SubmitHandeler}>
        <label htmlFor="Username">Username</label>
        <input type="text" id="username" onChange={usernameHandeler} value={enteredusername}></input>
        <label htmlFor="age">Age (Year)</label>
        <input type="number" id="Age" onChange={ageHandeler} value={enteredage}></input>
        <Button type="submit" >AddUser</Button>
    </form>
    </Card>
    );
};
export default AddUser;