import React from 'react'
import Styled from 'styled-components'

export default ()=>{
    return(
        <container>
            <h1>Canais Ao  Vivo que achamos que vai gostar!</h1>
            <Videos><iframe width="250" height="200" src="https://www.youtube.com/embed/EmuXRD7lghQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="250" height="200" src="https://www.youtube.com/embed/Bau_Zhxn_y4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="250" height="200" src="https://www.youtube.com/embed/R_cpOLP3ToU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Videos>

        </container>
    )
}

const Videos = Styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;

`