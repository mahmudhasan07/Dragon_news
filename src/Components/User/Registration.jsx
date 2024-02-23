import { NavLink } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../ContextApi/ContextApi";

const Registration = () => {
    const { createUser, userVerify, updateUser, logOut, user } = useContext(Context)
    const name = useRef()
    const photo = useRef()
    const email = useRef()
    const password = useRef()
    const handleregistration = () => {
        const Name = name.current.value
        const Photo = photo.current.value
        const Email = email.current.value
        const Password = password.current.value
        console.log(Name, Photo, Email, Password);

        createUser(Email, Password)
            .then(result => {
                console.log(result.user);



                updateUser(Name, Photo)
                    .then(result => {
                        console.log("Your Profile is Updated");
                        // console.log(result.user);
                        userVerify()
                            .then((res) => {
                                console.log("check your email");
                                logOut()
                            })
                            .catch(error => {
                                console.log(error.message);
                            })


                    })

                // .catch(error => {
                //     console.log(error.message);
                // })


            })
            .catch(error => {
                console.log(error.message);
            })

    }
    //     useEffect(()=>{
    // if(user){
    //     logOut()
    // }
    //     },[user,logOut])
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero  bg-base-200 ">
                <div className="hero-content  w-1/2">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input ref={name} type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo</span>
                                </label>
                                <input ref={photo} type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={email} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={password} type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <NavLink className={`flex justify-end text-blue-700 font-semibold`} to={`/login`}>Already User?</NavLink>
                            </div>
                            <div className="form-control mt-6">
                                <NavLink to={`/login`}><button onClick={handleregistration} className="btn btn-primary">Registration</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;