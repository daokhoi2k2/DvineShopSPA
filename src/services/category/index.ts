import axios from "axios";

export const getAllCategoryService = async () => {
    try {
        const res = await axios.get("http://localhost:4000/api/category");
        return res
    } catch(err) {
        console.log(err);
    }
}