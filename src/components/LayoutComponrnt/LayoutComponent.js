import styled from "styled-components"

const Wrap = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin-top: 130px;
`
const P = styled.p`
    color: #949494;
`

export const Footer = () =>{
    return(
        <Wrap>
            <P>제작 : 박설호 서용민</P>
            <P>관련 : 엠창산업</P>
            <P>연락처 : 010-3228-1332</P>
            <P>서비스 : untity2</P>
        </Wrap>
    )
}

