import {Link} from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
import { useAuth} from "../context/auth-context";
export const Signup=()=>{
    const {email, password, setEmail, setPassword} =useAuth();
    const {signUp}=useAxios();
    return(
        <div className="auth-container">
            <form className="signup-cmp">
            <h1>Oodles Tube</h1>
            <p className="para-style">Sign up to watch</p>
                <div>
                <input className="input-style" type="text" placeholder="Enter your name"/>
               </div>
               <div>
                <input className="input-style" type="text" placeholder="Enter your Username"/>
               </div>
               <div>
                <input className="input-style" type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div>
                <input className="input-style" type="text" placeholder="Enter your password" onChange ={(e)=>setPassword(e.target.value)}/>
               </div>
               <div>
                <button className="signup-btn" onClick={(e)=>signUp(e,email,password)}>Sign Up </button>
               </div>
                <p> Already have an account?<Link style={{textDecoration:"none"}} to="/login">Sign in</Link></p>
            </form>
        </div>
    )
}