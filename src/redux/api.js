import axios from "axios";

const url = 'https://pocket-dee64.rj.r.appspot.com/'

const GET = (path, params) => axios.get(url+path, params)
const POST = (path, params) => axios.post(url + path, params).then(response => response.data)
    .catch(err => {
        throw err;
    });
// Make a request for a user with a given ID
const api = {
    getWallet: (params) => POST('wallet', params)
}
export default api