import "./Authenticate.css";
import {Link} from "react-router-dom"
import {auth} from "./../config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Auth(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();

    const signUp = async () => {
        if(password.length >= 6){
            try{
                await createUserWithEmailAndPassword(auth, email, password);
                alert("You were Signed Up!")
                
                setTimeout(() => {
                    navigate("/Signed")
                },1000)

            } catch(err){
                console.error(err);
            }

        }
        else{
            alert("Password must be at least 6 characters long")
        }
    };


    return(
        <div className="login">
         <Link className="back-link" to="/">Back</Link>
         <div className="login-container">
           <div className="login-container-input">
            <input className="input-field" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
            <input className="input-field" placeholder="Password..." type="password" onChange={(e) => setPassword(e.target.value)}/>
           </div>
           <button className="button login-button" onClick={signUp}>Sign Up</button>
         </div>
        </div>
    )
}

export default Auth;