import { useState } from 'react';
import '../calculator/Emi.css';
import React from 'react';
import { useEffect } from 'react';



function Emi() {

    const [amount , changeAmount]=useState(0);
    const [tenure , changeTenure]=useState(0);
    const [rate , changeRate]=useState(0);
    const [monthly , changeMonthly]=useState(0);
    const [interest , changeInterest]=useState(0);




   useEffect(()=>{
        //(p*r*t)/100
        //interest+pinciple
        //math.floor
        let inte=(amount*rate*tenure)/100

        changeInterest(inte);
        let times=tenure*12;
        
        console.log((amount*rate*tenure));
        let month = Math.floor((1*amount+1*interest)/times);
        changeMonthly(month);
    },[amount,rate,tenure])



    return (
        <div className='box'>
            <h1>EMI Calculator</h1>
            
            <div className="emi-box">
                <div className="col1">
                    <div className="input-box">
                        <label for="">Loan Amount</label>
                        <input type="text" value={amount} onChange={(a)=>{ changeAmount(a.target.value)}}/>


                    </div>

                    <div className="input-box">
                        <label for="">Annual Interest Rate %</label>
                        <input type="text" value={rate} onChange={(a)=>{ changeRate(a.target.value)}} />


                    </div>
                    <div className="input-box">
                        <label for="">Loan Tenure(years)</label>
                        <input type="text"value={tenure} onChange={(a)=>{changeTenure(a.target.value)}}/>


                    </div>

                   
                    



                    <div className="input-box">
                        <label htmlFor="">Monthly EMI</label>
                        <input type="text" value={monthly} onChange={(a)=>{changeMonthly(a.target.value) }}/>



                    </div>

                </div>

            </div>
        </div>
    )
}
export default Emi