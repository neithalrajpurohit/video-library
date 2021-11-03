import {Link} from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useAxios } from "../hooks/useAxios";

export const Login = () => {
const {email,setEmail,password,setPassword} = useAuth();
const {login}=useAxios();
    return(
        <div>
            
        <div className="style-login">
            <h1>Oodles Tube</h1>
            <p style={{color:"grey",opacity:"100%"}}>Login to Oodles Tube </p>
            <input className="input-login" type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            <div>
            <input  className="input-login" type="text" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
            <button className="login-btn" onClick={(e)=>login(e,email,password)}>Login</button>
            </div>
            <p> New user ? <Link style={{textDecoration:"none"}} to= "/signup">Signup</Link> </p>
        </div>
        </div>
    )
}