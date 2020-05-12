import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        let { data: { confirmed, recovered, deaths, lastUpdate  } } = await axios.get(url)
        let fetchedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return fetchedData;
    } catch (err) {
        console.error(err);
    }
}

export const fetchDailyData = async () => {
    try{
        let { data } = await axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    }catch (err){
        console.error(err);
    }
}