import { API_URL } from "@/services/contants";
import axios from "axios";

const getUserOrders = async (user_id: string) => {
    const url = `${API_URL}/api/ordersRoute/user/${user_id}`;
    return await axios.get(url);
};

export { getUserOrders };