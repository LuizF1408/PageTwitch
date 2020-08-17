import React from 'react'
import Styled from 'styled-components'



  export default () => {

    return (
       
            <Carrousel>
                <SwiperContainer>
                    <SwiperSlide>

                        <iframe width="300" height="168" src="https://www.youtube.com/embed/NXEmC5zk2bA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </SwiperSlide>



                    <SwiperSlide>
                        <iframe width="300" height="168" src="https://www.youtube.com/embed/BoohYJlRXa8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </SwiperSlide>
                    <SwiperSlide>

                        <iframe width="300" height="168" src="https://www.youtube.com/embed/RthZDEp-JjE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                        </iframe>

                    </SwiperSlide>
                </SwiperContainer>
            </Carrousel>
       


    )

}




const Carrousel = Styled.div`
justify-content:center;
display:flex;
flex-direction:row;
max-width:600;

    background: #fff;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
    `

const SwiperContainer = Styled.div`
justify-content:center;
alig-items:center;
display:flex;
flex-direction:row;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
   
    `

const SwiperSlide = Styled.div`

    background-position: center;
    background-size: cover;
    width: 300px;
    height: 168px;

    `
