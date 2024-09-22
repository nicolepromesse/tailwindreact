import React from "react";
import police from '../asset/image/police.jpg';
import motor from '../asset/image/motor.png';
import { Link } from "react-router-dom";
const Case = () => {
    return(
        <div>
            <div className="bg-blue-50 h-[400px]">
                <h1 className="text-xl uppercase -ml-[1000px] p-[30px]">Case Studies</h1>
                <h1 className="font-bold text-4xl -ml-[900px]">Shipping code, </h1>
                <p className="text-blue-500 text-4xl font-bold -ml-[310px] -mt-[40px]">delivering services</p> 
                <p className="text-lg text-gray-600 mt-[15px] -ml-[400px]">Our teams use their expertise to develop people-centred solutions to meet our partners' most</p>
                <p className="text-lg text-gray-600 mt-[10px] -ml-[1000px]">pressing challenges.</p>
            </div>
            <div className="">
       <img 
        src={police}
        alt="police" 
        className="w-[540px]  h-[300px] m-0 rounded-xl -mt-[100px] ml-[450px] " 
      />
      <div className="-ml-[400px]">
       <h1 className="mt-[15px] font-bold text-2xl">Digitising booking for motor vehicle inspection</h1>
    <p className="text-gray-500 mt-[10px] mr-[40px]">The Rwanda National Police needed a more efficient way to manage</p>
    <p className="text-gray-500 mt-[5px] mr-[20px]">booking appointments of over 10,000 annual motor vehicle inspections</p>
    <p className="text-gray-500 mt-[5px] mr-[230px]">across various country inspection centers.</p>
    </div>
    <div className="mt-[30px]">
    <button className="mr-10 hover:active:bg-blue-600 hover:active:text-white -ml-[750px] font-bold text-blue-600  border border-blue-600 h-[50px] w-[120px] rounded-lg">Read More</button>
    </div> 
            </div>
            <div className="ml-[1010px]">
            <img 
        src={motor}
        alt="motor" 
        className="w-[540px]  h-[300px] m-0 rounded-xl -mt-[520px] " 
      />
      <div className="-ml-[300px]">
      <h1 className="mt-[15px] font-bold text-2xl">Digitising booking for motor vehicle inspection</h1>
    <p className="text-gray-500 mt-[10px] mr-[40px]">The Rwanda National Police needed a more efficient way to manage</p>
    <p className="text-gray-500 mt-[5px] mr-[20px]">booking appointments of over 10,000 annual motor vehicle inspections</p>
    <p className="text-gray-500 mt-[5px] mr-[230px]">across various country inspection centers.</p>
      </div>
      <div className="mt-[30px]">
    <button className="mr-10 hover:active:bg-blue-600 hover:active:text-white -ml-[670px] font-bold text-blue-600  border border-blue-600 h-[50px] w-[120px] rounded-lg">Read More</button>
    </div> 
            </div>
        </div>
    )
}
export default Case