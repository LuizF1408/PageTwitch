import React from 'react'
import Styled from 'styled-components'

function Main() {
    return (
        <div>
            <h1>
                Canais ao vivo que achamos que vai gostar
            </h1>
            <Section>
                <DivCard>
                    <iframe width="100%" height="90%" src="https://www.youtube.com/embed/Bau_Zhxn_y4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>testant</iframe>
                    <p>Tekken Mano!!!</p>
                </DivCard>
                <DivCard>
                    <iframe width="100%" height="80%" src="https://www.youtube.com/embed/nO0emuFDuEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Tekken Mano!!!</p>
                </DivCard>
                <DivCard>
                    <iframe width="100%" height="80%" src="https://www.youtube.com/embed/nO0emuFDuEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Tekken Mano!!!</p>
                </DivCard>
            </Section>
            <Section>
                <DivCard>
                    <iframe width="100%" height="80%" src="https://www.youtube.com/embed/Bau_Zhxn_y4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Tekken Mano!!!</p>
                </DivCard>
                <DivCard>
                    <iframe width="100%" height="80%" src="https://www.youtube.com/embed/nO0emuFDuEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Tekken Mano!!!</p>
                </DivCard>
                <DivCard>
                    <iframe width="100%" height="80%" src="https://www.youtube.com/embed/nO0emuFDuEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Tekken Mano!!!</p>
                </DivCard>
            </Section>
        </div>
    )
}
const Section = Styled.section`
    backgound-color:  rgb(228, 225, 225);
    display: flex;
    justify-content: row;
    align-items: center;
    padding-top: 0;
    margin-top:0;
`
const DivCard = Styled.div`
    margin: 0.3em;
    width:30%;
`
export default Main;