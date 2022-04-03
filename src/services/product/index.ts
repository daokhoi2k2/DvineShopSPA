import axios from "axios"

export const getAllProductsServices = async () => {
    try {
        const res = await axios.get("http://localhost:4000/api/product")
        return res;
    } catch (err) {
        console.error(err)
    }
} 