import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import ButtonComponent from "../../components/button/button"
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuPlusSquare } from "react-icons/lu";
import { IoMdOptions } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import SearchModal from "../../components/modalComponent/searchModal";
import { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import useScrollStore from "../../store/useScrollStore";
import useProfileStore from "../../store/useProfile";
import CreatePostModal from "../../components/modalComponent/createPostModal";



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
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`

export default function Layout(){
    const [modal, setModal] = useState()
    const navigate = useNavigate()
    const { userProfile , getUserProfile} = useProfileStore();
    const [createPostModal, setCreatePostModal] = useState(false)
    
    useEffect(()=>{
        getUserProfile()
    },[])
    console.log(userProfile)

    const closeModal = () =>{
        setModal();
    }
    const closeCreatePostModal = () =>{
        setCreatePostModal(false)
    }
    const openCreatePostModal = () =>{
        setCreatePostModal(true)
    }
    const searchModal = () =>{
        setModal(<SearchModal closeModal={closeModal}/>)
    }
    
    
    return(
        <Wrap>
            <TopLayout>
                <Top>
                    <img src="./image/untityLogo.png" style={{width: "50%", margin:"20px 0", cursor:"pointer"}} />
                    <ButtonComponent value="홈" icon={<AiFillHome size={24}/>} onClick={()=>{navigate("/")}}/>
                    <ButtonComponent value="검색" icon={<FiSearch size={24}/>} onClick={searchModal} />
                    <ButtonComponent value="채팅" icon={<IoChatbubbleOutline size={24}/>}  onClick={()=>{navigate("/chat")}}/>
                    <ButtonComponent value="알림" icon={<IoIosHeartEmpty size={24}/>}/>
                    <ButtonComponent value="게시글 작성" icon={<LuPlusSquare size={24} />} onClick={openCreatePostModal}/>
                    <Conteiner>
                        <P>개인설정</P>
                        <ButtonComponent value="프로필" icon={<Profile/>}  onClick={()=>{navigate("/profile")}}/>
                    </Conteiner>
                </Top>
                <Bottom>
                    <ButtonComponent value="설정" icon={<SlOptions />}/>
                    <ButtonComponent value="더보기" icon={<IoMdOptions />}/>
                </Bottom>
            </TopLayout>
            <Outlet/>
            <BottomLayout >
                <Box>
                    <P style={{marginTop:'16px'}}>추천 사이트</P>
                    <BottomLayout>
                        <div style={{display:'flex', height:'auto',alignItems:'center'}}>
                            <BottomLayout style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid black',display:'flex',alignItems:"center"}}>
                                <img src="./image/untityLogo.png" style={{width:'100%'}}/>
                            </BottomLayout>
                            <ButtonComponent value='untity 채용'/>
                        </div>
                        <div style={{display:'flex', height:'auto',alignItems:'center'}}>
                            <BottomLayout style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid black',display:'flex',alignItems:"center"}}>
                                <img src="./image/untityLogo.png" style={{width:'100%'}}/>
                            </BottomLayout>
                            <ButtonComponent value='박설호와 함께 일하기'/>
                        </div>
                        <div style={{display:'flex', height:'auto',alignItems:'center'}}>
                            <BottomLayout style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid black',display:'flex',alignItems:"center"}}>
                                <img src="./image/untityLogo.png" style={{width:'100%'}}/>
                            </BottomLayout>
                            <ButtonComponent value='좌파틱하게 웹 디자인'/>
                        </div>
                    </BottomLayout>
                </Box>
            </BottomLayout>
            {modal != null ? modal :null}
            { createPostModal ? <CreatePostModal closeModal={closeCreatePostModal}/>:null}
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