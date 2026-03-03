import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = import.meta.env.VITE_OWM_KEY

const getCurrentByCapital = (capital, maaCode) => {
    const q = maaCode ? `${capital},${maaCode}` : capital
    return axios
    .get(baseUrl, {
        params: {
            q,
            appid: apiKey,
            units: 'metric',
        },
    })
    .then(res => res.data)
}
export default {getCurrentByCapital}