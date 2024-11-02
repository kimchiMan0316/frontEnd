import styled from "styled-components"
import { FaRegHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import LoginInput from "../InputComponent/Login/logininput";

const Wrap = styled.div`
    width: 500px;
    height: 710px;
    border: 1px solid black;
    margin: 5px 0;
`
const ProfileLayer = styled.div`
    height: 60px;
    display: flex;
    justify-content: left;
    align-items: center;
`
const PhotoLayer = styled.div`
    width: 100%;
    height: 500px;
`
const ProfilePhoto = styled.div`
    width: 44px;
    height: 44px;
    border: 1px solid black;
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;
`
const Username = styled.div`
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
`
const Nickname = styled(Username)`
    font-size: 14px;
`
const ActicleLayer = styled.div``
const InfLayer = styled.div`
    height: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
`
const Button = styled(InfLayer)`
    justify-content: center;
    height: 36px;
    width: 36px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    margin: 0 2px 0 10px;
    &:hover{
        opacity: 0.8;
        background-color: #d9d9d9;
    }
`
const Acticle = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    height: auto;
    flex-direction: column;
    margin: 0 10px;
`
const P = styled.p`
    font-size: 16px;
    font-weight: 600;
`
const Div = styled.div`
    &[name="acticle"]{
        margin: 2px 0;
        font-size: 14px;
    }
`
export default function HomeContentsBox({}){
    return(
        <Wrap>
            <ProfileLayer>
                <ProfilePhoto></ProfilePhoto>
                <Div style={{display:"flex", flexDirection:"column",height:"100%",alignItems:"start", justifyContent:"center"}}>
                    <Username>seolja_boyy2</Username>
                    <Nickname>parkseolho</Nickname>
                </Div>
            </ProfileLayer>
            <PhotoLayer>
                <img src="./image/nerd.JPEG" style={{width:"100%", height:"100%"}}/>
            </PhotoLayer>
            <ActicleLayer>
                <InfLayer>
                    <div style={{display:"flex", height:"100%",alignItems:"center", justifyContent:"center"}}>
                        <Button>
                            <FaRegHeart size={20}/>
                        </Button>
                        <P>24</P>
                    </div>
                    <div style={{display:"flex", height:"100%",alignItems:"center", justifyContent:"center"}}>
                        <Button>
                            <RiChat3Line size={22}/>
                        </Button>
                        <P>30</P>
                    </div>
                </InfLayer>
                <Acticle>
                    <Div name="acticle" style={{fontSize:"14px",fontWeight:"600", cursor:"pointer"}}>좋아요 2개</Div>
                    <Div name="acticle" style={{fontSize:"16px"}}>
                        <span style={{fontWeight:"600", cursor:"pointer"}}>soelja_boy2</span><span style={{marginLeft:"6px"}}>goodgoodgodogooododosdadsaddad</span>
                    </Div>
                    <Div name="acticle" style={{cursor:"pointer"}}>
                        댓글 더 보기
                    </Div>
                    <Div style={{display:"flex", height:"100%" , alignItems:"center"}}>
                        <LoginInput width="410px" height="36px" placeholder="댓글달기..." border="none"/>
                        <LoginInput type="submit" height="30px" width="40px" value="확인" backgroundColor="white" color="black" fontWeight="600"/>
                    </Div>
                </Acticle>
            </ActicleLayer>
        </Wrap>
    )
}