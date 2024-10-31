import styled from "styled-components"
import LoginInput from "../InputComponent/Login/logininput"

const Wrap = styled.div`
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Conteiner = styled.div`
    z-index: 1001;
    width: 30%;
    min-width: 600px;
    min-height: 700px;
    height: 60%;
    background-color: aliceblue;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`
const CancleButton = styled.span`
    text-align: right;
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
    cursor: pointer;
`
const Layer = styled.div`
    
`
const InfLayer = styled.div``
const P = styled.h1`
`

export default function SearchModal({closeModal}){
    return(
        <Wrap>
            <Conteiner>
                <div style={{width:"100%", display:"flex", justifyContent:"right"}}>
                    <CancleButton onClick={closeModal}>X</CancleButton>
                </div>
                <P>검색</P>
                <Layer>
                    <LoginInput width="400px" height="40px" fontSize="18" padding="8px" placeholder="검색"/>
                </Layer>
                <InfLayer>
                    
                </InfLayer>
            </Conteiner>
        </Wrap>
    )
}