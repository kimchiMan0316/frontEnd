import { useEffect, useRef, useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import styled from "styled-components";


const Wrap = styled.div`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
`
const CloseDiv = styled.div`
    z-index: 1001;
    width: 100%;
    height: 100vh;
    position: fixed;
`

const ProfileEdit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    font-size: 16px;
    color: white;
    background-color: #efefef;
    border: none;
    border-radius: 2px;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px;
    &:hover{
        background-color: #c9c9c9;
    }
`
const Conteiner = styled.div`
    z-index: 1002;
    border-radius: 16px;
    width: 300px;
    height: 200px;
    background-color: aliceblue;
`
const Title = styled.div`
    text-align: center;
    color: black;
    padding: 10px 0 ;
    border-bottom:1px solid black;
`
const Box = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: auto;
    border-bottom: 1px solid black;
`
const OptionBox = styled.div`
    text-align: center;
    width: 100%;
    height: 40px;
    color: black;
    padding: 10px 0;
    &:hover{
        opacity: 0.8;
        background-color: antiquewhite;
    }
`

export default function ProfileEditButton(){
    const [optionModal, setOptionModal] = useState(false)
    
    const openModal = () =>{
        setOptionModal(true)
    }
    const closeModal=()=>{
        setOptionModal(false)
    }
   

    return(
        <ProfileEdit onClick={openModal}>
            <IoPersonAdd color="black" fill="black"/>
            { optionModal ? 
            <Wrap>
                <CloseDiv onClick={closeModal}></CloseDiv>
                <Conteiner>
                    <button onClick={()=>setOptionModal(false)}>s</button>
                    <Title>프로필</Title>
                    <Box>
                        <OptionBox>프로필 편집</OptionBox>
                        <OptionBox>취소</OptionBox> 
                    </Box>
                    <Title>untity2</Title>
                </Conteiner>
            </Wrap>
            :null}
        </ProfileEdit>
    )
}

