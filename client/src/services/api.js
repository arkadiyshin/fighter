import axios from "axios";

console.log(`env` , process.env.REACT_APP_API_URL)

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL ?? "http://localhost:4000",
});


export const getTiles = async () => {
    const result = await api.get('/tiles');
    return result.data;
}

export const getRandomEnemy = async (level_min, level_max) => {
    const result = await api.get(`/games/start?level_min=${level_min}&level_max=${level_max}`);
    return result.data;
}

export const finishGame = async( gameResult ) => {
    const result = await api.post(`/games/finish`, gameResult);
    return result.data;
}

export default api;
