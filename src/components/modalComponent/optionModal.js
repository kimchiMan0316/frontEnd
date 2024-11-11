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
const Conteiner = styled.div`
    z-index: 1002;
    border-radius: 16px;
    width: 400px;
    height: 400px;
    background-color: aliceblue;
`
const Title = styled.div`
    text-align: center;
    color: black;
    padding: 10px 0 ;
    border-bottom:1px solid black;
`

export default function OptionModal({title, closeModal, content}){

    return( 
        <Wrap>
            <CloseDiv onClick={closeModal}></CloseDiv>
            <Conteiner>
                <Title>{title}</Title>
                {content}
            </Conteiner>
        </Wrap>
    );
}