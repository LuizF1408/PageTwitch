import React from 'react'
import Styled from 'styled-components'
import {FaTwitch} from 'react-icons/fa'




export default ()=>{
    return(
    <Nav>
        <FaTwitch/>

        <Ul>
            <Li><Link href="#">Seguindo</Link></Li>
            <Li><Link href="#">Procurar</Link></Li>
            <Li><Link href="#">Esporte</Link></Li>
            <Li><Link href="#">Música</Link></Li>
            
          
            
        </Ul>
        <Search>
        
        <Input placeholder="Buscar"></Input>
        <Icon className="fas fa-search"/> 
 

        </Search>
        <Div>
        <Button>Icon</Button>
        <Button>Entrar</Button>
        <Button>Cadastrar</Button>
        <Button>Icon</Button>
        </Div>

    </Nav>
    )
}



const Nav = Styled.nav`
flex-shrink:0;
width:100vw;
margin:4px;
display:flex;
flex-direction:row;
align-items:center;
background-color:#fff;

`
const Ul = Styled.ul`
justify-self:flex-start;
padding:5px;
display:flex;
flex-direction:row;
text-decoration:none;
list-style:none;

`
const Link = Styled.a`
text-decoration:none;
`

const Div = Styled.div`
flex-grow:1;

justify-content:flex-end;
flex-shrink:0;
display:flex;
flex-direction:row;
`

const Li = Styled.li`
padding:5px;
`
const Button = Styled.button`
margin:5px;
padding:5px;
`
const Input = Styled.input`
display:block;
width:100%;
height:100%;
background-color:#ccc;
border-radius:6px 0px 0px 6px;
border:none;
`
const Search = Styled.div`
heigth:100%;
width:100%;
justify-content:center;
flex-grow:1;
display:flex;
align-items:center;


`
const Icon = Styled.i`
padding:0 2px
width:40px;
margin-left:2px;
height:100%; 
font-size: 20px;
border-radius:0 6px 6px 0;
background-color:#888
`

