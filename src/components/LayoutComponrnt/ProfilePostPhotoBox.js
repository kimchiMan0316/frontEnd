import styled from "styled-components";

const Wrap = styled.div`
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow: hidden;
    gap: 1px;
`
const PostImageBox = styled.div`
    width: 250px;
    height: 250px;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`

// 사진을 클릭하면 해당페이지로 이동하기
export default function ProfilePostPhotoBox({postImage}){
    console.log('props',postImage)
    return(
        <Wrap id={postImage.postId}>
            {postImage.map((item)=>
                (<PostImageBox key={item.postId}>
                    {/* 사진이 두장 이상일 때 보여주기 */}
                    <img style={{width:'100%',height:'100%'}} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyXq8MX3zDsmye_ZqegMoe6sdhN64Ffc9WNrYk7NFEGMCVSScw" alt="error"/>
                </PostImageBox>))}
        </Wrap>
    );
}