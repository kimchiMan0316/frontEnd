import styled from "styled-components";

const Wrap = styled.div`
    z-index: 1000;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
`
const Conteiner = styled.div`
    z-index: 1001;
    width: 300px;
    height: 300px;
    background-color: aliceblue;
    
`

export default function OptionModal({closeModal, option}){
    return( 
        <Wrap>
            <Conteiner>

            </Conteiner>
        </Wrap>
    );
}