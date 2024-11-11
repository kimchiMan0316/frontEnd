import { IoPersonAdd } from "react-icons/io5";
import styled from "styled-components";
import OptionModal from "../modalComponent/optionModal";

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

export default function ProfileEditButton({closeModal, optionModal, onClick}){
    return(
        <ProfileEdit onClick={onClick}>
            <IoPersonAdd color="black" fill="black"/>
            { optionModal ? <OptionModal title={'프로필 수정'} closeModal={closeModal}/>:null}
        </ProfileEdit>
    )
}

const A = () =>{
    return(
        <Wrap>
            <CloseDiv></CloseDiv>
        </Wrap>
    )
}