import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {fetchWallet} from "../redux/actions";
import {Screen} from "../styled-global";

export const DashboardScreen = (props) => {
    const wallet = useSelector(state => state.wallet)

    return <Screen>
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
    </Screen>
}