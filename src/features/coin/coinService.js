import axios from "axios"

export const fetchTrendingCoin = async () =>{
    const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
    return response.data.coins;  // pure deta ki jarurat nhi thi esliye sirf coins ko kiya
}


export const fetchCoin = async (id) =>{
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return response.data;  
};