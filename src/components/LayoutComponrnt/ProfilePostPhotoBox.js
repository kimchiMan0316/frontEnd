import styled from "styled-components";

const Wrap = styled.div`
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow: hidden;
    gap: 1px;
`
const PostImageBox = styled.div`
    max-width: 300px;
    max-height: 300px;
    min-height: 200px;
    min-width: 200px;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`

export default function ProfilePostPhotoBox({postImage}){
    console.log('props',postImage)
    return(
        <Wrap id={postImage.postId}>
            {postImage.map((item)=>(<PostImageBox key={item.postId}><img style={{width:'100%',height:'100%'}} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyXq8MX3zDsmye_ZqegMoe6sdhN64Ffc9WNrYk7NFEGMCVSScw" alt="error"/></PostImageBox>))}
        </Wrap>
    );
}