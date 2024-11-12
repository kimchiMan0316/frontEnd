import styled from "styled-components"
import LoginInput from "../InputComponent/Login/logininput"
import { useState } from "react"

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
const Conteiner = styled.div`
    z-index: 1002;
    border-radius: 16px;
    width: 700px;
    height: 800px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
`
const Close = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    padding: 10px;
`
const CloseButton = styled.div`
    font-size: 26px;
    font-weight: 600;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
        background-color: #c9c9c9;
    }
`
const PostArea = styled.div`
    width: 90%;
    height: 250px;
    background-color: aliceblue;
    display: flex;
`
const PhotoUploadArea = styled.div`
    background-color: aliceblue;
    width: 40%;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
`
const ArticleArea = styled.div`
    background-color: antiquewhite;
    width: 60%;
`
const Photo = styled.input`
    display: none;
`
const Label = styled.label`
    color: black;
`
export default function CreatePostModal({closeModal}){
    const [photo, setPhoto] = useState([])
    return(
        <Wrap>
            <CloseDiv onClick={closeModal}></CloseDiv>
            <Conteiner>
                <Close>
                    <CloseButton onClick={closeModal}>x</CloseButton>
                </Close>
                <h1>게시글 작성하기</h1>
                <PostArea>
                    <PhotoUploadArea>
                        <Photo type="file" id="photo"/>
                        <Label htmlFor="photo" >파일</Label>
                    </PhotoUploadArea>
                    <ArticleArea>
                        
                    </ArticleArea>
                </PostArea>
            </Conteiner>
        </Wrap>
    )
}