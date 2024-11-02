import styled from "styled-components"
import HomeContentsBox from "../../components/LayoutComponrnt/HomeContentsBox"

const Wrap = styled.div`
    padding-left: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: auto;
    background-color: white;
`

export default function Home(){
    return(
        <Wrap>
            <HomeContentsBox/>
            <HomeContentsBox/>
        </Wrap>
    )
}