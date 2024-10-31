import styled from "styled-components"
import LoginInput from "../../components/InputComponent/Login/logininput"
import { Footer } from "../../components/LayoutComponrnt/LayoutComponent"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"




const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`
const Conteiner = styled(Wrap)`
    flex-direction: row;
    width: 800px;
    height: 500px;
`
const ImageArea = styled.div`
    width: 50%;
    height: 100%;
    border:none;
`
const LoginArea = styled(ImageArea)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
`
const Logo = styled.img`
    width: 200px;
    height: auto;
    margin-bottom: 30px;
`
const P = styled.span`
    font-size: 14px;
    text-decoration: none;
    margin: 20px 0 10px 0;
    &[name="forget"]{
        color:#4e5968;
        cursor: pointer;
        margin: 10px;
        font-size: 14px;
        &:hover{
            color: #212529
        }
    }
`
const AtherLogin = styled(Wrap)`
    border-top: 1px solid #d7d7d7;
    height: 60px;
    width: 80%;
`
export default function Login(){
    const [id, setId] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const linkStyle = {
        color:"#38b4ff",
        textDecoration: "none"
    }
    const onChangeId =(e)=>{
        const value = e.target.value;
        setId(value)
    }
    const onChangePassword =(e)=>{
        const value = e.target.value;
        setPassword(value)
    }
    const forgetAccount = () =>{
        navigate("/forget-account") 
    }
    const login = () =>{
        if(!id || !password){
            alert("로그인 정보를 입력해주세요.");
            return;
        }
        const loginInf = {
            username : id, 
            password : password
        }
        fetch("http://localhost:8080/api/login",{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(loginInf)
        })
        .then((response)=>{
            if(response.status === 200){
                return <Navigate to="/"/>
            }else{
                alert("로그인 정보를 다시 확인해주세요.")
                return;
            }
        })
    }
    return(
        <Wrap>
            <Conteiner>
                <ImageArea>
                    <img src="./image/untityLogo.png" style={{width:"100%"}}/>
                </ImageArea>
                <LoginArea>
                    <Logo src="./image/untityLogo.png" style={{cursor:"pointer"}}/>
                    <LoginInput type="text" width="310px" height="40px" fontSize="16px" value={id} onChange={onChangeId} placeholder={"아이디"} padding="0 8px" minLength={6}/>
                    <LoginInput type="password" width="310px" height="40px" fontSize="16px" value={password} onChange={onChangePassword} placeholder={"비밀번호"} padding="0 8px" minLength={6}/>
                    <LoginInput type="submit" width="310px" height="35px" fontSize="16px" value="로그인" onClick={login}/>
                    <P>아직 계정이 없으신가요 ? <Link to="/create-account" style={linkStyle}>계정 만들기</Link></P>
                    <AtherLogin>
                        <button style={{width:"328px",height:"35px", border:"none", fontSize:"16px"}}>카카오로 로그인하기</button>
                    </AtherLogin>
                    <div style={{display:"flex",marginTop:"10px" , alignItems:"bottom"}}>
                        <P name="forget" onClick={forgetAccount}>아이디/비밀번호를 잊어버리셨나요?</P>
                    </div>
                </LoginArea>
            </Conteiner>
            <Footer/>
        </Wrap>
    )
}