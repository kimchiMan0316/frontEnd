import { Navigate, useNavigate } from "react-router-dom";

export default function Protect({children}){
    const navigate = useNavigate()
    const checkSession = async() =>{
        const response = await fetch("http://localhost:8080/api/checkSession",{
            credentials : "include",
        })
        if(response.status == 200){
            console.log(response)
            return true;
        }else{
            console.log(response)
            return false;
        }
    }
    const mySession = checkSession()
    if(!mySession){
        
        return <Navigate to="/login"/>
    }
    
    return children;
}