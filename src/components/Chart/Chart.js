import React, { useState, useEffect } from 'react'
import { fetchDailyData } from "../../api";
import { Line } from 'react-chartjs-2';

import './Chart.css'

export const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);
    
    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map((data) => data.confirmed),
                            label: 'Infiziert',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map((data) => data.deaths),
                            label: 'Tode',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        },
                        ],
                    }}
                />
            ) : null
    );
    
    return (
        <div className="chart">
            {lineChart}
        </div>
    )
}
