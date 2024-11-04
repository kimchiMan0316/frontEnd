import { create } from "zustand"

const usePost = create((set)=>(
    {
        post: [],
        offset: 0,

        getPost : ()=>{
            fetch(`http://localhost:8080/api/home/0`,{
                credentials:'include'
            })
            .then((response)=>response.json())
            .then((data)=>{
                set((state)=>({post: [...state.post,...data]}))
                set((state)=>({offset : state.offset + 10}))
            })
        }
    }
))

export default usePost;