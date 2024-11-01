import { Navigate, useNavigate } from "react-router-dom";

export default function Protect({children}){
    const navigate = useNavigate()
    const checkSession = async() =>{
        const response = await fetch("http://localhost:8080/api/checkSession",{
            credentials : "include",
        })
        if(response === 200){
            return true;
        }else{
            return false;
        }
    }
    const mySession = checkSession()
    if(!mySession){
        navigate("/login")
        return;
    }
    
    return children;
}