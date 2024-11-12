import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoMdPhotos } from "react-icons/io";

const Maruta = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Wrap = styled.div`
    /* width: 100%;
    height: 100%; */
    position: relative;
    width: 500px;
    height: 500px;
    border: 1px solid black;
    overflow: hidden;
`
const ControllerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    height: 100%;
`
const Label = styled.div`
    transition: all 0.4s ease-in-out;
    z-index: 100;
    position: absolute;
    top: 10px;
    right: 10px;
    color: black;
    opacity: ${(props)=>(props.move == 0 ? "0.8":"0")};
`

const LiftButton = styled.div`
    z-index: 100;
    left: 10px;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #c9c9c9;
    opacity: ${(props)=>(props.move == 0 ? "0":"0.6")};
    &:hover{
        opacity: ${(props)=>(props.move == 0 ? "0":"0.8")};
        background-color: #c9c9c9;
    }
`
const RightButton = styled.div`
    z-index: 100;
    right: 10px;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #c9c9c9;
    opacity: ${(props)=>(props.move == props.maxMove ? "0":"0.6")};
    &:hover{
        opacity: 0.8;
        background-color: #c9c9c9;
    }
` 
const ImageBox = styled.div`
    transition: all 0.5s ease-in-out;
    z-index: 99;
    position:relative;
    left: ${(props)=>`${props.move}px`};
    display: flex;
    width: auto;
    height: 100%;
`
const ImageArray = styled.img`
    width: 500px;
    height: 500px;
`
const Counter = styled.div`
    z-index: 100;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%); /* 요소 중심을 기준으로 중앙 배치 */
    background-color: antiquewhite;
    width: 100px;
    height: 10px;
    display: flex;
`

const postImage = ["./image/untityLogo.png","./image/nerd.JPEG",'./image/profile.jpeg']

export default function HomePhotoBox(){
    const [ move , setMove] = useState(0)

    const moveLeft = () =>{
        if(move == -(500*(postImage.length-1))){
            return;
        }
        setMove((prev)=>prev-500)
        console.log(move)
    }
    const moveRight = () =>{
        if(move == 0){
            return;
        }
        setMove((prev)=>prev+500)
        console.log(move)
    }
    
    return(
        <Maruta>
        <Wrap>
            <ControllerBox>
                {postImage.length > 1 ? <Label move={move}><IoMdPhotos size={26}/></Label>:"null"}
                <LiftButton onClick={moveRight} move={move}><IoIosArrowBack size={20}/></LiftButton>
                <ImageBox move={move}>
                    {postImage.map((item)=>(<ImageArray id={item.id} src={item}/>))}
                </ImageBox>
                <RightButton onClick={moveLeft} move={move} maxMove={500*postImage.length}><IoIosArrowForward size={20}/></RightButton>
                <Counter>
                    {}
                </Counter>
            </ControllerBox>
        </Wrap>
        </Maruta>
    );
}

