import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "./User.config";
import PropTypes from 'prop-types';



export const Context = createContext({})
const ContextApi = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading]= useState(true)

    const auth = getAuth(app)
    const createUser = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setloading(true)
        return signOut(auth)

    }

    const updateUser =(name,photo)=>{
     return  updateProfile(auth.currentUser,{
            displayName: `${name}` , photoURL: `${photo}`
        })
    }

    const userVerify =()=>{
return sendEmailVerification(auth.currentUser)
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(customer)=>{
            console.log(customer);
            if(customer){
                setUser(customer)
                setloading(false)
            }
            else{
                setUser(null)
            }
            // setUser(customer)
            
        })
    },[])
    console.log(user);

    const data = {user,createUser,signUser, logOut, updateUser,userVerify, loading}
    return (
       <Context.Provider value={data}>
        {children}
       </Context.Provider>
    );
};

export default ContextApi;

ContextApi.PropTypes={
    children : PropTypes.node
}
