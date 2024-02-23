import { NavLink } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import {  useContext, useRef, useState } from "react";
import { Context } from "../ContextApi/ContextApi";

const Login = () => {
    const {signUser,user} = useContext(Context)
    
    // console.log(user);
    const email = useRef()
    const password = useRef()
    const handlelogin=()=>{
        const Email = email.current.value
        const Password = password.current.value
        console.log(Email,Password);

        
        signUser(Email,Password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    // console.log(value);
    return (
        <div>
        
            <NavBar></NavBar>


            <div className="hero py-20 bg-base-200">
  <div className="hero-content w-1/2">
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={email} type="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input ref={password} type="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div>
          <NavLink className={`flex justify-end text-blue-600`} to={`/registration`}>New User?</NavLink>
        </div>
        <div className="form-control mt-6">
          <NavLink to={`/`}><button onClick={handlelogin} className="btn w-full btn-primary">Login</button></NavLink>
        </div>
      </div>
    </div>

  </div>
</div>



            {/* <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={email} type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input ref={password} type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div>
          <NavLink className={`flex justify-end text-blue-600`} to={`/registration`}>New User?</NavLink>
        </div>
        <div className="form-control mt-6">
          <button onClick={handlelogin} className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div> */}
        </div>
    );
};

export default Login;

// import { useContext, useRef } from "react";
// // import { Context } from "../ContextApi/ContextApi";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// const LogIn = () => {
// //   const navigate = useNavigate()
//     // const {signUser,user} = useContext(Context)
//     const email = useRef()
//     const password = useRef()
//     // console.log(user);

//     const handlesignUser =()=>{
//         const Email = email.current.value
//         const Password = password.current.value
//         // signUser(Email,Password)
//         // .then(result=>{
//         //     console.log(result.user);
//         //     navigate('/')
//         // })
//         // .catch(error=>{
//         //     console.log(error.message);
//         // })
//         console.log(Email,Password);

//     }

//     return (
//         <div>
//         <marquee>please Login </marquee>
          
            
//         </div>
//     );
// };

// export default LogIn;