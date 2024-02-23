import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../ContextApi/ContextApi";


const NavBar = () => {
    const {user,logOut}= useContext(Context)
    console.log(user);
    const handlelogout=()=>{
        logOut()

    }

    



    return (
        <div className="navbar ">
            <h1 className="navbar-start"></h1>
            <div className="navbar-center">

            <ul className="flex   gap-5">
                <li>
                    <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                    <NavLink>About</NavLink>
                </li>
                <li>
                    <NavLink>Career</NavLink>
                </li>
            </ul>
            </div>

            

            <div className="navbar-end">
            <div className="">
                {
                    user? <div className="flex bg-gray-300 mr-2 border-2 p-1 rounded-lg">
                        <img className="w-7" src={user.photoURL} alt="" />
                        <p className="my-auto">{user.displayName}</p>
                    </div>
                    :
                    <p className="hidden"></p>
                }
            </div>

            {
                user? <Link to={`/login`}><button onClick={handlelogout}  className="btn">LogOut</button></Link>
                :
                <Link to={`/login`}><button  className="btn">Login</button></Link>
            }

            </div>
        </div>
    );
};

export default NavBar;