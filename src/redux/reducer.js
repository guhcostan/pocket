
import produce from 'immer'

// The initial state of the App
export const initialState = {
    wallet: null
}

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case 'FETCH_WALLET':
                draft.wallet = null
                draft.loading = true
                break
            case 'FETCH_WALLET_SUCCESS':
                draft.loading = false
                draft.wallet = action.wallet
                break
            case 'FETCH_WALLET_ERROR':
                draft.wallet = null
                draft.loading = false
                break
        }
    })

export default appReducer
