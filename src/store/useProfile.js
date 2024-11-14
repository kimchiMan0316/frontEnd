import { create } from "zustand"

const useProfileStore = create((set)=>(
    {
        userProfile : {},
        getUserProfile : ()=>{
            fetch('http://localhost:8080/api/user',{
                credentials:'include'
            })
            .then((response)=>{
                if(response.ok){
                    return response.json()
                }else{
                    return console.log(response)
                }
            })
            .then((response)=>{
                set(()=>({userProfile : {response}}))
                localStorage.setItem("username",response.username);
            })
        }
    }
))

export default useProfileStore;