import { useEffect, useState } from "react";
import styled from "styled-components";
import LoginInput from "../InputComponent/Login/logininput";

const Wrap = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`
const CancleBox = styled.div`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`
const Conteiner = styled.div`
    z-index: 1001;
    width: 470px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-radius: 10px;
    background-color: aliceblue;
`
const Title = styled.h1`
    font-size: 17px;
    border-bottom: 1px solid black;
    width: 100%;
    text-align: center;
    padding: 10px 0;
`
const SearchingBar = styled.div`
    margin: 10px 0 ;
`

export default function FollowModal({closeModal, username, state, me}){
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        if(me){
            if(state){
                fetch(`http://localhost:8080/api/follower `,{
                    credentials:'include'
                })
                .then((response)=>response.json())
                .then((response)=>{
                    console.log(response);
                })
            }else if(!state){
                fetch(`http://localhost:8080/api/followed  `,{
                    credentials:'include'
                })
                .then((response)=>response.json())
                .then((response)=>{
                    console.log(response);
                })
            }
        }else if(!me){

        }
    },[])
    return(
        <Wrap>
            <CancleBox onClick={closeModal}></CancleBox>
            <Conteiner>
                <Title>팔로우</Title>
                <SearchingBar>
                    <LoginInput type='text' width='400px' height='35px' backgroundColor='gray'/>
                </SearchingBar>

            </Conteiner>
        </Wrap>
    );
}