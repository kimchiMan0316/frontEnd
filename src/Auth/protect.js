import { useNavigate } from "react-router-dom";

export default function Protect({children}){
    const navigate = useNavigate()
    const checkSession = async() =>{
        const response = await fetch("http://localhost:8080/api/checkSession",{
            credentials : "include",
        })
        // .then((response)=>response.json())
        if(response.status == 200){
            console.log(response)
        }else if(response.status === 400){
            console.log(response)
            navigate("/login")
            return false
        }
    }
    const mySession = checkSession()
    if(!mySession){
        navigate("/login")
    }
    return children;
}