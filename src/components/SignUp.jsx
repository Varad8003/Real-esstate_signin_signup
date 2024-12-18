import { useState } from "react"
import {auth} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { toast } from "react-toastify";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp=async ()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            toast.success("Sign Up Successfull !");
        }catch(error){
            toast.error(error.message);
        }
    };
  return (
    <div className="signup-form">
        <h2>Sign Up</h2>
        <input type="email"
        value={email}
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)} />

        <input type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleSignUp}>Sign up</button>
    </div>
  )
}

export default SignUp