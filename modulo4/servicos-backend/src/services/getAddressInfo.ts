import axios from 'axios';
import { AddressInfo } from '../types/Address';

const getAddressInfo = async (
    zipcode: string
): Promise<AddressInfo | null> => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);

        const selectInfo: AddressInfo = {
            street: result.data.logradouro,
            neighbourhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        };

        return selectInfo;
    } catch {
        return null;
    };
};

export default getAddressInfo;