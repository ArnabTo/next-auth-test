'use client';

import { useState } from "react";


const Login = () => {
       const [info, setInfo] = useState({username:'',email:'', password:''})
    // if(session.status === 'loading'){
    //     return <h2>Loading...</h2>
    // }if(session.status === 'authenticated'){
    //     return <>
    //     <h2>Sing In Successfull</h2>
    //     <button className="border-[white] border-2 p-4" onClick={()=>signOut('google')}>Signout </button>
    //     </>
    // }if(session.status === 'unauthenticated'){
    //     return <>
    //     <h1>Please Sign In</h1>
    //     <button className="border-[white] border-2 p-4" onClick={()=>signIn('google')}>Login with google</button>
    //     </>
    // }
    const handleInput=(e)=>{
        setInfo((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    const handleForm=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password)
    }
console.log({info})
    return (
        <div className="max-w-6xl mx-auto">
            <form onSubmit={(e)=>handleForm(e)} className="grid grid-cols-1 gap-8 w-[50%] mx-auto my-12">
                <input className="text-[#252525] p-4" type='text' name='username' placeholder="Username" onChange={(e)=>handleInput(e)} />
                <input className="text-[#252525] p-4" type='email' name='email' placeholder="Email" onChange={(e)=>handleInput(e)} />
                <input className="text-[#252525] p-4" type='password' name='password' placeholder="password" onChange={(e)=>handleInput(e)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Login;