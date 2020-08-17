import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Body from './components/Body2'
import Nav2 from './components/nav2'
import Carrousel from './components/carrousel'
import NavLateral from './components/navLateral'
import Styled from 'styled-components'

class Main extends React.Component{
  render(){
    return (
    <>


      
      <Nav2/>
      <NavLateral/>
      <Container>
      <CarrouselMain>
      <Carrousel/>
      <Body/>

      </CarrouselMain>
      
      </Container>
      </>
      
      

    )
     
  
    
    
  }

}
export default Main;


const Container = Styled.div `
align-items:center;
display:flex;
flex-direction:row;
padding-top:60px;
padding-left:60px;


`
const CarrouselMain = Styled.div `

`