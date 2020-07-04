export function fetchWallet(username, password) {
    return {
        type: 'FETCH_WALLET',
        username, password

    }
}