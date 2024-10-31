import { Navigate } from "react-router-dom";

export default function Protect({children}){
    const checkSession = async() =>{
        const response = await fetch("http://localhost:8080/api/checkSession",{
            credentials : "include",
        })
        if(response === 200){
            return true;
        }else{
            alert("세션이 만료되었습니다.")
            return false;
        }
    }
    const mySession = checkSession()
    if(!mySession){
        return <Navigate to="/login"/>
    }
    
    return children;
}