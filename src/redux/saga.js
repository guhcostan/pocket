import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from "./api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchWalletSaga({username, password}) {
    try {
        const wallet = yield call(api.getWallet, {username, password});
        console.log("SAGA", formatWallet(wallet))
        yield put({type: "FETCH_WALLET_SUCCESS", wallet: formatWallet(wallet)});
    } catch (e) {
        console.log(e)
        yield put({type: "FETCH_WALLET_ERROR", message: e.message});
    }
}

const formatWallet = (wallet) => {
    const acoes = []
    const fundosImobiliarios = []
    wallet.forEach(corretora => corretora.stockWallet.forEach(acao => {
        console.log(acao)
        if(!acao.company.includes("FII")){
            acoes.push(acao)
        }else{
            fundosImobiliarios.push(acao)
        }
    }))
    return {
        acoes: acoes,
        fundosImobiliarios: fundosImobiliarios
    }
}
function* mySaga() {
    yield takeLatest("FETCH_WALLET", fetchWalletSaga);
}

export default mySaga;