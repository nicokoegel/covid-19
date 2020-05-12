import React from 'react'
import { Card, CardContent } from "@material-ui/core";
import CountUp from "react-countup";
import './Cards.css';

export const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) return 'Loading...';
    return (
        <div className="grid">
            <Card>
                <CardContent className="card infected">
                    <h2>Infiziert: <CountUp start={0} end={confirmed.value} duration="1" separator="." /></h2>
                    <p>Stand {new Date(lastUpdate).toLocaleDateString('de-DE')}</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="card recovered">
                    <h2>Erholt: <CountUp start={0} end={recovered.value} duration="1" separator="." /></h2>
                    <p>Stand {new Date(lastUpdate).toLocaleDateString('de-DE')}</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="card deaths">
                    <h2>Verstorben: <CountUp start={0} end={deaths.value} duration="1" separator="." /></h2>
                    <p>Stand {new Date(lastUpdate).toLocaleDateString('de-DE')}</p>
                </CardContent>
            </Card>
        </div>
    )
}
