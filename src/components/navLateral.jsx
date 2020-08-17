import React from 'react'
import Styled from 'styled-components'
import {BsCameraVideo} from 'react-icons/bs'
import {BsArrowBarRight} from 'react-icons/bs'
export default () => {
    const NavStyle = {
    }
    return (
        <Nav>
            <div>
                <Div> <a href="#" title="Testando essa bagaça"><BsArrowBarRight size={28}/ ></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><BsCameraVideo size={28}/></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/4eb4d92286599b77-profile_image-70x70.png" /></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/979e9e07-675a-473d-b580-e756f0239adf-profile_image-70x70.png" /></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/b039747b-ee3f-4a81-8699-0ba7a1de7f25-profile_image-70x70.png" /></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png" /></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/6613fa99-00fd-44d0-9503-a51bf75a9fce-profile_image-70x70.png" /></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/d1d45041-e9eb-44af-a2dd-c2106e9d11d7-profile_image-70x70.png" /></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/b1893ed3-f47f-4df9-9a2f-d3f795d02145-profile_image-70x70.png" /></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/80b23966-84dd-42fc-9f7f-705f07e0af4d-profile_image-70x70.png" /></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/dogdog-profile_image-5550ade194780dfc-70x70.jpeg" /></a> </Div>
                <Div> <a href="#" title="Testando essa bagaça"><Img src = "https://static-cdn.jtvnw.net/jtv_user_pictures/kolento-profile_image-b750c756ada12684-70x70.jpeg" /></a> </Div>
            </div>
        </Nav>
    )
}
const Div = Styled.div`

width: 30px;
`
const Img = Styled.img`
height: 30px;
width: 30px;
border-radius: 100%
`
const Nav = Styled.nav`
padding: 7px;
padding-top:60px;
position:fixed;
height: 100vh;

width: 30px;
background: #ccc;
`