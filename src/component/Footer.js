import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () =>{
    return(
        <div className="bg-blue-50 mt-[100px] h-[600px]">
       <div className="flex justify-start items-start">
       <h1 className="text-2xl font-bold ml-80 mt-[120px]">Explore<br></br>

        <nav className="text-sm text-gray-500 mt-16">
<Link to='/About' className="mr-10 hover:active:text-green-600">About</Link><br></br><br></br>
<Link to='/Case' className=" hover:active:text-green-600">Case Studies</Link><br></br><br></br>
<Link to='/Blog' className="mr-10 hover:active:text-green-600">Blog</Link><br></br><br></br>
<Link to='/Careers' className="mr-10 hover:active:text-green-600">Careers</Link><br></br><br></br>
<Link to='/Brand' className="mr-10 hover:active:text-green-600">Brand kit</Link><br></br><br></br>
        </nav>
       </h1>
       <div className="ml-[200px] text-2xl font-bold  mt-[120px]">
        <h1 className="">Reach us</h1>
        </div>
        <h1 className="mt-[210px] text-xl flex justify-start items-start -ml-[100px] font-bold">Location  <p className="text-sm text-gray-500 mt-2 ml-10">KG 9 aVe,Kigali</p></h1>

        <h1 className="mt-[250px] text-xl flex justify-start items-start -ml-[220px] font-bold ">Email <p className="text-sm text-gray-500 mt-2 ml-10">info@irembo.com</p></h1>
       </div>
       <div className="p-4 -mt-3 -ml-[550px] -mt-32 ">
        <button className="bg-blue-100 rounded-xl w-[50px] h-[50px] ml-[240px]">
       <FontAwesomeIcon icon={faTwitter} size="1x" color='blue' />
       </button>
       <button className="bg-blue-100 rounded-xl w-[50px] h-[50px] ml-[10px]">
       <FontAwesomeIcon icon={faLinkedin} size="1x"  color='blue' />
       </button>
       <button className="bg-blue-100 rounded-xl w-[50px] h-[50px] ml-[10px]">
       <FontAwesomeIcon icon={faYoutube} size="1x" color='blue' />
       </button>
       
       <button className="bg-blue-100 rounded-xl w-[50px] h-[50px] ml-[10px]">
       <FontAwesomeIcon icon={faFacebook} size="1x" color='blue' />
       </button>
       
       <button className="bg-blue-100 rounded-xl w-[50px] h-[50px] ml-[10px]">
       <FontAwesomeIcon icon={faInstagram} size="1x" color='blue' />
       </button>
     
    </div>
     <div className="ml-[700px] text-2xl font-bold  -mt-[250px]">
        <h1 className="">Talk to our digital experts
            <form>
                <input type="text" name="name" placeholder="Full Name" className="mt-16 border border-blue-300 h-[60px] rounded-xl text-center ml-[300px]"></input>
                <input type="text" name="name" placeholder="Full Name" className="mt-16 border border-blue-300 h-[60px] rounded-xl text-center ml-[10px]"></input><br></br>

                <input type="text" name="name" placeholder="Full Name" className="mt-[20px] border border-blue-300 h-[120px] w-[600px] rounded-xl text-center ml-[300px]"></input><br></br>

<button type="submit" name="submit" className="bg-blue-700 text-white mt-[30px] ml-[780px] h-[50px] w-[120px] rounded-xl">Submit</button>
            </form>
        </h1>
        </div>
        <div className="">
        <hr class="border-t border-gray-300 mt-[100px] w-[1500px] ml-[150px]">
        </hr>
        <h1 className="bg-blue-50 p-10 ">Copyright © 2024 Irembo. All rights reserved.</h1>
        </div>
        </div>
    )

}
export default Footer