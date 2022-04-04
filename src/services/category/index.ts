import axios from "axios";

export const getAllCategoryService = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category`);
        return res
    } catch(err) {
        console.log(err);
        return {};
    }
}