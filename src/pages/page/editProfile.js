import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../../components/LayoutComponrnt/LayoutComponent";

const Wrap = styled.div`
    padding-left: 250px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 1100px;
    height: auto;
    margin-top: 20px;
    background-color: white;
`
const Conteiner = styled.div`
    background-color: aliceblue;
    display: flex;
    width: 90%;
    height: 400px;
    align-items: center;
    justify-content: center;
`
const ImageArea = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;
`
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
    border: 1px solid black;
    border-radius: 50%;
`
const UserInf = styled(ImageArea)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const P = styled.p`

`
const Conteiner2 = styled(Conteiner)`
    border-top: 1px solid black;
`
export default function EditProfile(){
    const userinf = useLoaderData();
    return(
        <Wrap>
            <h1>프로필 설정</h1>
            <Conteiner>
                <ImageArea>
                    <Image>
                        <img src="./image/untityLogo.png" style={{width:'100%',}}/>
                    </Image>
                </ImageArea>
                <UserInf>
                    <P>{userinf.username}</P>
                    <P>{userinf.nickname}</P>
                    <P>{userinf.message}</P>
                </UserInf>
            </Conteiner>
            <Conteiner2>

            </Conteiner2>
            <Footer/>
        </Wrap>
    );
}