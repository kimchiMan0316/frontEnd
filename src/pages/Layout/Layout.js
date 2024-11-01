import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import ButtonComponent from "../../components/button/button"
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuPlusSquare } from "react-icons/lu";
import { IoMdOptions } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import SearchModal from "../../components/modalComponent/searchModal";
import { useState } from "react";

const Wrap = styled.div`
    display: flex;

`
const TopLayout = styled.div`
    background-color: aqua;
    position: fixed;
    border-right: 1px solid gray;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 250px;
    background-color: white;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Conteiner = styled(Top)`
    border-top: 1px solid #d9d9d9;
    margin: 20px 0;
`
const P = styled.span`
    margin: 10px 0;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`
const Bottom = styled(Top)`
    margin-bottom: 10px;
`
const BottomLayout = styled.div`

`
const Box = styled.div`
    width: 300px;
    height: 500px;
    background-color: aliceblue;
`


export default function Layout(){
    const [modal, setModal] = useState()
    const navigate = useNavigate()
    const closeModal = () =>{
        setModal();
    }
    const searchModal = () =>{
        setModal(<SearchModal closeModal={closeModal}/>)
    }
    const onProfile = () =>{
        navigate("/profile")
    }
    const onMain = () =>{
        navigate("/")
    }
    const onChat = () =>{
        navigate("/chat")
    }
    return(
        <Wrap>
            <TopLayout>
                <Top>
                    <img src="./image/untityLogo.png" style={{width: "50%", margin:"20px 0", cursor:"pointer"}} onClick={onMain}/>
                    <ButtonComponent value="홈" icon={<AiFillHome size={24} onClick={onMain}/>}/>
                    <ButtonComponent value="검색" icon={<FiSearch size={24}/>} onClick={searchModal}/>
                    <ButtonComponent value="메세지" icon={<IoChatbubbleOutline size={24} onClick={onChat}/>}/>
                    <ButtonComponent value="알림" icon={<FaRegHeart size={24}/>}/>
                    <ButtonComponent value="게시글 작성" icon={<LuPlusSquare size={24}/>}/>
                    <Conteiner>
                        <P>개인설정</P>
                        <ButtonComponent value="프로필" icon={<Profile/>} onClick={onProfile}/>
                    </Conteiner>
                </Top>
                <Bottom>
                    <ButtonComponent value="설정" icon={<SlOptions />}/>
                    <ButtonComponent value="더보기" icon={<IoMdOptions />}/>
                </Bottom>
            </TopLayout>
            <Outlet/>
            <BottomLayout>
                <Box></Box>
            </BottomLayout>
            {modal != null ? modal:null}
        </Wrap>
    )
}

const Profile = ({Profile}) =>{
    return(
        <div style={{
            border:"1px solid black",
            borderRadius:"50%",
            width:"26px",
            height:"26px"
        }}>
            <img style={{width:"100%"}} src="./image/untityLogo.png"/>
        </div>
    )
}