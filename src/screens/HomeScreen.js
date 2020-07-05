import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {fetchWallet} from "../redux/actions";
import {Screen} from "../styled-global";
import styled from "styled-components";
import Input from "../components/Input";
import Lottie from 'lottie-react-web'
import animationData from "../lotties/wallet-loading.json";
const Logo = styled.div`
height: 200px;
width: 400px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 1rem;
`
export const HomeScreen = (props) => {
    const dispatch = useDispatch()
    const [cpf, setCpf] = useState()
    const [senha, setSenha] = useState()

    return <Screen>
        <Logo>LOGO</Logo>
        <Input onChange={(e) => setCpf(e.target.value)} placeholder={'CPF'}/>
        <Input onChange={(e) => setSenha(e.target.value)} placeholder={'Senha'}/>
        <button onClick={() => {
            dispatch(fetchWallet(cpf, senha))
        }}>Buscar Dados</button>
    </Screen>
}