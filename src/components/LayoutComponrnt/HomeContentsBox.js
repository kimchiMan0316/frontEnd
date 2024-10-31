import styled from "styled-components"

const Wrap = styled.div`
    width: 500px;
    height: 750px;
    border: 1px solid black;
`
const ProfileLayer = styled.div`
    height: 50px;
`
const PhotoLayer = styled.div`
    width: 100%;
    height: 500px;
    border: 1px solid black;
`
const ActicleLayer = styled.div``
const InfLayer = styled.div`
    height: 50px;
    border: 1px solid black;
`
const Acticle = styled.div``

export default function HomeContentsBox(){
    return(
        <Wrap>
            <ProfileLayer>

            </ProfileLayer>
            <PhotoLayer>

            </PhotoLayer>
            <ActicleLayer>
                <InfLayer>

                </InfLayer>
                <Acticle>

                </Acticle>
            </ActicleLayer>
        </Wrap>
    )
}