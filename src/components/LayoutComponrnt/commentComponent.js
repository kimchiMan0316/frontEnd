import styled from "styled-components"
import { FaHeart } from "react-icons/fa";
import { formatTime } from "../../utills/formatTime";
import { useState } from "react";
import ReCommentComponent from "./ReCommentCoponent";

const Conteiner = styled.div`
    height: auto;

`
const Wrap = styled.div`
    height: auto;
    min-height: 60px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 10px;
`
const ProfileImage = styled.div`
    width: 45px;
    height: 45px;
    border: 1px solid gray;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin: 0 10px;
`
const ProfileArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`
const UserInf = styled.div`
    display: flex;
`
const CommentInf = styled.div`
    display: flex;
    justify-content: space-between;
`
const Username = styled.div`
    margin-right: 10px;
    font-weight: 600;
    font-size: 17px;
    cursor: pointer;
`
const Date = styled.div``
const Comment = styled.div``
const Recomment = styled.div`
    margin: 0 6px;
    cursor: pointer;
`
const CreateReComment = styled(Comment)`
    cursor: pointer;
`
const ReReComment = styled.h1`
    text-align: left;
    font-size: 13px;
    color:gray;
    cursor: pointer;
`
const ReReCommentBox = styled.div`
    height: auto;
    margin-left: 80px;
`
export default function CommentBox({comment, postId}){
    const [ReCommentState, setReCommentState] = useState(false)
    const [ReComments, setReComments] = useState([])
    console.log(comment)
    const fetchRecomment = () =>{
        fetch(`http://localhost:8080/api/recomment/${postId}/${comment.commentId}/0`,{
            credentials:'include'
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setReComments(data)
            setReCommentState(true)
        })
    }
    console.log(comment)
    return(
        <Conteiner>
            <Wrap>
                <ProfileImage>
                    <img src="./image/profile.jpeg" style={{width:"100%",}}/>
                </ProfileImage>
                <ProfileArea>
                    <UserInf>
                        <Username>{comment.username}</Username>
                        <Comment>{comment.article}</Comment>
                    </UserInf>
                    <CommentInf>
                        <div style={{display:'flex', width:'100%',fontSize:"14px", color:"rgb(120 118 118)"}}>
                            <Date>{formatTime(comment.date)}</Date>
                            <Recomment>{comment.reCommentCount > 0 ? `좋아요 ${comment.reCommentCount}개`:""}</Recomment>
                            <CreateReComment>답글 달기</CreateReComment>
                        </div>
                    </CommentInf>
                </ProfileArea>
                <div style={{width:'30px',height:'30px',display:'flex',alignItems:'center',cursor:'pointer'}}>
                    <FaHeart size={14} color="gray"/>
                </div>
            </Wrap>
            <ReReCommentBox>
                {ReCommentState ? (ReComments.map((item)=>(<ReCommentComponent key={item.commentId} item={item}/>))): comment.reCommentCount > 0 ? <ReReComment onClick={fetchRecomment}>- 답글 보기({comment.reCommentCount})</ReReComment>:null}
            </ReReCommentBox>
        </Conteiner>
    )
}