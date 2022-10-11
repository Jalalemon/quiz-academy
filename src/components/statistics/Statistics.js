import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../chart/Chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import'./Statistics.css'
const Statistics = () => {
    const charts = useLoaderData();
    console.log(charts.data);
    return (
        <div >
            
            <h3>ami statistics</h3>
            <ResponsiveContainer width={360} height = {400}> 
            <LineChart width={400} height ={400} data ={charts.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey='total' stroke="#82ca9d" />
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;