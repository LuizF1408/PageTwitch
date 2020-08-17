import React from 'react'
import Styled from 'styled-components'
import {FaTwitch} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'

function Nav2() {
    return (
        <DivNav>
            <DivMenu>
           <FaTwitch size={28} color='rgb(119, 44, 232)'/>
                <A href="">Procurar</A>
                <A href="">Esports</A>
                <A href="">Músicas</A>
            </DivMenu>
            <DivSearch>
                <Input placeholder="Buscar"></Input>
                <ButtonSearche ><i class="fas fa-search"></i></ButtonSearche>
            </DivSearch>
            <DivLogin>
                <BtnEntrar>Entrar</BtnEntrar>
                <BtnCadastrar>Cadastre-se</BtnCadastrar>
                <FiUser size={28}/>
            </DivLogin>
        </DivNav>
    )
}
const DivNav = Styled.div`
position:fixed;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    font-size:16px;  
    justify-content: space-between;
    align-items: center;
    color: black;
    padding-left:1em;
    padding-right:1em;
    border-bottom: 1px solid #ccc;
    background-color:#fff;
    z-index:1
`
const DivMenu = Styled.div`
    list-style: none;
    flex-direction:row;
`
const DivSearch = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    padding: 0.5em;
`
const ButtonSearche = Styled.button`
    padding: 0.7em;
    height:80%;
    border-radius: 0 6px 6px 0;
    border:0;
`
const Input = Styled.input`
    width:60%;
    heigth:80%;
    background: rgba(0,0,0,.05);
    border-radius: 6px 0 0 6px;
    border:0;
    padding: 0.7em;
`
const Button = Styled.button`
    background: grey;
`
const A = Styled.a`
    text-decoration: none;
    margin:0.5em;
    color: black;
`
const DivLogin = Styled.div`
display:flex;
`
const BtnEntrar = Styled.button`
    border-radius: 6px;
    border:0;
    padding: 0.7em;
    font-size: 0.8em;
`
const BtnCadastrar = Styled.button`
    border-radius: 6px;
    border:0;
    padding: 0.7em;
    background: rgb(119, 44, 232);
    font-size: 0.8em;
    margin: 0 9px;
    color: white;
`
export default Nav2;