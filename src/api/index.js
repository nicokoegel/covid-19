import axios from "axios";

export const fetchData = async () => {
    try {
        let { data: { confirmed, recovered, deaths, lastUpdate  } } = await axios.get('https://covid19.mathdro.id/api')
        let fetchedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return fetchedData;
    } catch{

    }
}