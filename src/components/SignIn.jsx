import { useState } from "react"
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify";


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn =async ()=>{
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Sign In successfull!")
        }catch(error){
            toast.error(error.message);
        }
    };
  return (
    <div className="signin-form">
        <h2>Sign In</h2>
        <input type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />

<input type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />

<button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default SignIn