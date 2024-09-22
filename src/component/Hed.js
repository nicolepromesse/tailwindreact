import React from 'react';
import {Link} from 'react-router-dom';
function Hed() {
  return (
    <div className="bg-blue-700 text-white p-4">
      <div className='flex justify-start items-start'>
        <h1 className='text-3xl font-bold ml-32'>irembo
        
<Link to='/Home' className="mr-10 hover:active:text-blue-600 ml-[600px] text-sm">Home</Link>
<Link to='/About' className="mr-10 hover:active:text-blue-600 text-sm">About</Link>
<Link to='/Case' className="mr-10 hover:active:text-blue-600 text-sm">Case Studies</Link>
<Link to='/Careers' className="mr-10 hover:active:text-blue-600 text-sm">Careers</Link>
<Link to='/Blog' className="mr-10 hover:active:text-blue-600 text-sm">Blog</Link>
<Link to='/Hack' className="mr-10 hover:active:text-blue-600 text-sm">Hackathon</Link>
   
   <button className='bg-blue-800 text-sm w-[160px] h-[50px] ml-16 rounded-xl'>Visit iremboGov</button>
        </h1>
      </div>
    </div> 
  );
}

export default Hed
