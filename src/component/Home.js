import React from "react";
import employe from '../asset/image/employe.avif';
import sano from '../asset/image/sano.svg';
import setu from '../asset/image/setu.svg';
import savi from '../asset/image/savi.svg';
import police from '../asset/image/police.jpg';
import motor from '../asset/image/motor.png';
import laptop from '../asset/image/laptop.webp';
import {Link} from 'react-router-dom';

const Home = () => {
return(
<div>
<img 
        src={employe}
        alt="employe" 
        className="w-full  h-[880px] m-0" 
      />
       <div className="absolute inset-0 bg-black bg-opacity-70 mt-16"></div>
      
      {/* Centered Text */}
      <div className="absolute inset-0 p-80">
        <h1 className="text-white text-6xl font-bold mr-80">
        We Build Greate Product that
        <p className="mr-2 p-2 -mt-[5px] text-blue-700 -ml-[5px]">meaningfully implove people's Lives</p></h1>
        <div>
        <p className="text-white text-xl mt-8 -ml-[400px]">Irembo uses design and technology to build digital products that help organisations deliver
        <p className="-ml-[450px]">world-class online services and payments.</p> 
</p>
        </div>
        <button className='bg-blue-800 text-sm text-white w-[190px] h-[60px] -ml-[1000px] rounded-xl mt-16'>Partner with us</button>     
         <div className="bg-gray-100 h-[600px] w-[900px] ml-[250px] border-4 border-blue-100 p-4 rounded-3xl mt-32">
<div className="bg-blue-600 h-[300px] w-[890px] -mt-[15px] -ml-[15px] rounded-tl-3xl rounded-tr-3xl">
<div className="flex justify-start items-start">
<h1 className="ml-[200px] text-white text-xl mt-[30px]">iremboGov</h1>
<div class="flex items-center space-x-4">
        
    <i className="fas fa-user text-white text-sm mt-[40px] ml-[400px]"> </i>
    <h1 className="text-white mt-[40px] ">Mugisha Yves</h1>
</div>
</div> 
<div className="mt-[50px]">
        <h1 className="text-white text-3xl">Welcome</h1>
</div>
<button className="bg-white mt-[20px] text-gray-300 w-[400px]">Search for services</button>
</div>
      </div>

      </div>
      <div className="mt-[600px] flex justify-start items-start">
<h1 className="text-blue-700 text-3xl font-blod ml-[600px] ">IremboGov</h1>
<h1 className="text-black font-bold mt-[2px] ml-[10px] text-3xl">All the Public services You need in one Place</h1>

      </div>
      <p className="text-gray-400 text-xl mt-16 ml-[80px]">Millions of people use publicservices every year. Families apply for health care.<br></br> Travellers
 apply for visas. Too often, outdated tools and complex systems
  make these<br></br> interactions frustrating. To improve these services, in 2015, we introduced our
  first <br></br>product, IremboGov, a web and USSD platform that makes it easier for Rwandan <br></br>citizens and foreigners to
 access over 100 public services anytime, anywhere and on<br></br> any device.</p>
   <h1 className="text-3xl font-bold mt-[80px] flex justify-center items-center ">What  
   <h1 className="text-blue-600 ml-[10px]">IremboGov</h1>
   <h1 className="ml-[10px]">Offer</h1>
         </h1>
         <img 
        src={sano}
        alt="sano" 
        className="w-[540px]  h-[260px] m-0 rounded-xl  ml-[100px] mt-[30px]" 
      />
         <div className="-ml-[1100px] mt-[30px] text-gray-500">
        <h1 className="mt-[40px] text-2xl text-black font-bold">Business process management</h1>
        <p className="text-sm mt-6">On IremboGov, users have 24/7 access to apply for any of the 106 </p>
         <p className="text-sm -ml-[10px]">public services. Officers across the government can log in to process</p> 
         <p className="text-sm -ml-[10px]">applications and send services straight to applicants' emails.</p>
         </div>
         <div className="ml-[500px] -mt-[420px]">
         <img 
        src={setu}
        alt="setu" 
        className="w-[540px]  h-[260px] m-0 rounded-xl  ml-[100px]" 
      />
         <div className="-ml-[700px] text-gray-500">
        <h1 className="mt-[40px] text-2xl text-black font-bold">Simple, easy digital payments</h1>
        <p className="text-sm -font-bold mt-6">Collecting money for governments is hard. We know how to do it </p>
         <p className="text-sm -font-bold -ml-[10px]">through our payment platform that meets national accounting and</p> 
         <p className="text-sm -font-bold -ml-[50px]">reporting specificities and needs.</p> 
         </div>
         </div>

         <div className="ml-[1000px] -mt-[420px]">
         <img 
        src={setu}
        alt="setu" 
        className="w-[540px]  h-[260px] m-0 rounded-xl  ml-[100px]" 
      />
         <div className="-ml-[100px] text-gray-500">
        <h1 className="mt-[40px] text-2xl text-black font-bold">World class reporting and data analytics</h1>
        <p className="text-sm -font-bold mt-6">Predictive analytics can help you improve your business. IremboGov </p>
         <p className="text-sm -font-bold -ml-[50px]">provides business intelligence reports on usage and improvement</p> 
         <p className="text-sm -font-bold -ml-[50px]">potential.</p> 
         </div>
         </div>
        <button className="bg-blue-700 text-white text-xl p-2 font-bold w-[300px] h-[50px] mt-[100px] rounded-xl -ml-[200px]">VIsit IremboGov</button>
        <div className="text-white bg-blue-700 h-[700px] mt-32 flex justify-start items-start">
        <h1 className="text-white text-3xl font-bold ml-[140px] mt-[100px]">
        We have digitized over 100 public services, making Rwanda a
        <p className=" p-2 mt-[10px]  -ml-[500px]">GovTech leader in Africa.</p></h1>
        <p className="mt-[250px] -ml-[850px] text-xl ">Outcome
        <h1 className="mt-[100px] text-7xl font-bold">40m+</h1>
        <p className="text-sm -font-bold mt-6">Working hours saved for Rwandan citizens traveling </p>
         <p className="text-sm -font-bold -ml-[50px]">to and waiting in government offices across</p> 
          <p className="text-sm -font-bold -ml-[250px]"> the country.</p>
        </p>
        <div className="mt-[280px] ml-[100px]">
        <h1 className="mt-[100px] text-7xl font-bold">80%</h1>
        <p className="text-sm -font-bold mt-6">Reduction in service access time when introduced </p>
         <p className="text-sm -font-bold -ml-[20px]">to IremboGov. Services used to take 5 days, but  </p> 
          <p className="text-sm -font-bold -ml-[140px]"> now they only take 24 hours. </p>
        </div>
        <div className="mt-[280px] ml-[100px]">
        <h1 className="mt-[100px] text-7xl font-bold">45%</h1>
        <p className="text-sm -font-bold mt-6">Of users pay for our services online. Leading the </p>
         <p className="text-sm -font-bold -ml-[40px]">path to a cashless society and economy for</p> 
          <p className="text-sm -font-bold -ml-[250px]"> Rwanda.</p>
        </div>
        <div className="mt-[280px] ml-[100px]">
        <h1 className="mt-[100px] text-7xl font-bold">4000+</h1>
        <p className="text-sm -font-bold mt-6">Working hours saved for Rwandan citizens traveling </p>
         <p className="text-sm -font-bold -ml-[50px]">to and waiting in government offices across</p> 
        </div>
        </div>
        <div className="bg-blue-50 flex justify-start items-start h-[1000px]">
       <h1 className="ml-[500px] p-[100px] text-3xl font-bold">Irembo is the digital transformation
        <p className="-ml-[380px] text-blue-700">partner</p><p className="-mt-[40px] -mr-[120px]">of choice for over 20 public<br></br>agencies in Rwanda</p>
       </h1>
       <p className="mt-[220px] -ml-[570px] text-gray-500">Whether it is designing citizen-centered services or building</p>
       <p className="mt-[250px] -ml-[440px] text-gray-500">Whether it is designing citizen-centered services or building <br></br>solutions for our partners.</p>
       <div className="mt-[340px] -ml-[650px]">
       <img 
        src={police}
        alt="police" 
        className="w-[540px]  h-[260px] m-0 rounded-xl " 
      />
    <h1 className="mt-[15px] font-bold text-2xl">Digitising booking for motor vehicle inspection</h1>
    <p className="text-gray-500 mt-[10px] mr-[40px]">The Rwanda National Police needed a more efficient way to manage</p>
    <p className="text-gray-500 mt-[5px] mr-[20px]">booking appointments of over 10,000 annual motor vehicle inspections</p>
    <p className="text-gray-500 mt-[5px] mr-[230px]">across various country inspection centers.</p>
    <div className="mt-[30px]">
    <Link to='/Home' className="mr-10 hover:active:text-green-600 -ml-[400px] font-bold text-blue-600  ">Read More</Link>
    </div> 
       </div>
       <div className="ml-[300px mt-[338px] ml-[50px]">
    <img 
        src={motor}
        alt="motor" 
        className="w-[540px]  h-[260px] m-0 rounded-xl " 
      />
    <h1 className="mt-[15px] font-bold text-2xl">Digitising booking for motor vehicle inspection</h1>
    <p className="text-gray-500 mt-[10px] mr-[40px]">The Rwanda National Police needed a more efficient way to manage</p>
    <p className="text-gray-500 mt-[5px] mr-[20px]">booking appointments of over 10,000 annual motor vehicle inspections</p>
    <p className="text-gray-500 mt-[5px] mr-[230px]">across various country inspection centers.</p>
    <div className="mt-[30px]">
    <Link to='/Home' className="mr-10 hover:active:text-green-600 -ml-[400px] font-bold text-blue-600 ">Read More</Link>
    </div>
    <button className="bg-blue-700 -ml-[650px] mt-[80px] text-white  font-bold h-[50px] w-[200px] rounded-xl">See More</button>
    </div>
        </div>
        <div className="mt-[200px] -ml-[900px]">
          <h1 className="text-3xl font-bold">Coming soon!</h1>
          <p className="text-gray-600 mt-[10px] ml-[100px]">We're launching a new product soon and</p>
          <p className="text-gray-600 mt-[5px] ml-[100px]">would love for you to be one of the first</p>
          <p className="text-gray-600 mt-[5px] -ml-[50px]">people to try it out.</p>

          <button className="bg-blue-700 ml-[30px] mt-[80px] text-white  font-bold h-[70px] w-[200px] rounded-xl">Sign up</button>
        </div>
        <div className="ml-[900px] -mt-[300px]">
        <img 
        src={laptop}
        alt="laptop" 
        className="w-[540px]  h-[300px] m-0 rounded-xl " 
      />
        </div>
</div>
)
}
export default Home