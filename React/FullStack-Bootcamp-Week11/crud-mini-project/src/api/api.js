import axios from 'axios';

const BASE_URL = 'https://6374a54248dfab73a4e48625.mockapi.io';

export default axios.create({
    baseURL: BASE_URL,
});
