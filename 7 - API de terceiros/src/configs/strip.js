import { instanceAxios } from "./axios.js";
import qs from 'qs';

export const createToken = async card => {
    const dataCard = qs.stringify(card)
    const { data: tokenCard } = await instanceAxios.post(
        '/tokens',
        dataCard
    )
    return tokenCard;
}

export const getcharge = async (amount, tokenCard) => {
    const dataCharge = qs.stringify({
        amount,
        currency: 'brl',
        source: tokenCard,
    })

    const { data: charge } = await instanceAxios.post(
        '/charges',
        dataCharge
    )
    return charge;
}