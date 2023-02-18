import axios from "axios";

const api_key = 'e79f8329ee89dc43dae90c1808a0e95c';

const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid=${api_key}`
})

export default api