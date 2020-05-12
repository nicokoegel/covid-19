import React, { useState, useEffect } from 'react'
import { fetchDailyData } from "../../api";
import { Line, Bar } from 'react-chartjs-2';

import './Chart.css'

export const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
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

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infiziert', 'Erholt', 'Tod'],
                    datasets: [
                        {
                            label: 'Menschen',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }
                }
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Status von ${country}` },
                }}
            />
        ) : null
    )

    return (
        <div className="chart">
            {country ? barChart : lineChart}
        </div>
    )
}
