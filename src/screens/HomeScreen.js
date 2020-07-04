import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {fetchWallet} from "../redux/actions";

export const HomeScreen = (props) => {
    const dispatch = useDispatch()
    const wallet = useSelector(state => state.wallet)
    const loading = useSelector(state => state.loading)
    const [cpf, setCpf] = useState()
    const [senha, setSenha] = useState()
    console.log(wallet)

    return <div>
        <input onChange={(e) => setCpf(e.target.value)} placeholder={'CPF'}/>
        <input onChange={(e) => setSenha(e.target.value)} placeholder={'Senha'}/>
        <button onClick={() => {
            dispatch(fetchWallet(cpf, senha))
        }}>Buscar Dados</button>

        {loading && <div>BUSCANDO</div>}
        {wallet &&
            <div>
                {wallet.acoes.map(acao =>
                    <div>{acao.company}</div>
                )}
                {wallet.fundosImobiliarios.map(fundo =>
                    <div>{fundo.company}</div>
                )}
            </div>
        }
    </div>
}