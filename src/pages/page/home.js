import styled from "styled-components"
import HomeContentsBox from "../../components/LayoutComponrnt/HomeContentsBox"
import usePost from "../../store/usePost"
import { useState } from "react";

const Wrap = styled.div`
    padding-left: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: auto;
    background-color: white;
`

export default function Home(){
    const {post, getPost} = usePost();
    console.log(post)
    return(
        <Wrap>
            <button onClick={getPost}>버튼</button>
            { post.map((item)=>(<HomeContentsBox key={item.id} item={item}/>))}
        </Wrap>
    )
}