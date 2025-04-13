import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    { month: 'Ju', value: 4000 },
    { month: 'Au', value: 1500 },
    { month: 'Se', value: 3000 },
    { month: 'Oc', value: 2700 },
    { month: 'No', value: 1800 },
    { month: 'De', value: 800 },
];

function Income(){
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]

    return(
        <div className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>

            <div className="income-graph-container">
                <ResponsiveContainer width="100%" height={300} >
                    <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(tick) => `$${tick / 1000}k`} />
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Bar 
                        dataKey="value" 
                        radius={[5, 5, 0, 0]}
                        fill="#FDBA74" 
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Income ;