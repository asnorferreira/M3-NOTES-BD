import axios from 'axios'
import { apiKey } from './apiKey.js'

export const instanceAxios = axios.create({
    baseURL: 'https://api.stripe.com/v1',
    timeout: 1000,
    headers: {
        authorization: `Bearer ${apiKey}`,
        'Content-type': 'application/x-www-form-urlencoded',
    },
});