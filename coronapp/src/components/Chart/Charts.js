// {useState, useEffect Hook}
import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import Styles from "./Charts.module.css";
 
const Charts = ({ data: {confirmed, deaths, recovered}, country }) => {
    // Once the data in the brackets is fetched we will set the data to the state utilizing hooks (below)
    const [dailyData, setDailyData] = useState([]); // useState = empty array 

    useEffect(() => {

        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();

    //  empty loop below stops the infinite looping of the charts   
    }, []);

    // ****************************************LINE & BAR CHARTS ***************************************************

    // Line Chart
    const lineChart = (
        // dailyData is an array - all data comes from components/index.js
        // dailyData[0]
        
        dailyData.length
        ? (
        <Line 
            data={{
                //Both Loops: get dates from the dailyData & display them as  on bar chart
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    //1. Daily number of confirmed cases
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'INFECTED',
                    borderColor: 'gold',
                    fill: true,
                }, {
                    //2. Daily number of deaths
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'DEATHS',
                    borderColor: 'red',
                    // backgroundColor: 'rgba(255, 0, 0, ,0.5)',
                    fill: true,
                }],
                
        }}
        />) : null
        );


    // Bar Chart
        const barChart = (
            confirmed
            ? (
                <Bar 
                    data={{
                        labels: ['DEATHS', 'CONFIRMED INFECTIONS', 'FULLY RECOVERED'],
                        datasets: [{
                            label: 'Statistics',
                            backgroundColor: [
                                'rgba(200, 6, 10, 2)',
                                'orange',
                                'green',
                            ],
                            data:[deaths.value, confirmed.value, recovered.value]
                         }]
                    }}
                    options={{
                        legend: { disply: false },
                        title: { display: true, text: `Current state in ${country}`},
                    }}
                        
                />
                
            ) : null
      
         );


    return (
        <div className={Styles.charts}>
            {country ? barChart : lineChart}
        </div>
    )
}
export default Charts;