import axios from "axios"

export const getAllProductsServices = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product`)
        return res;
    } catch (err) {
        console.error(err)
    }
} 