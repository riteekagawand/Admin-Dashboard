import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-[#FFFFFF] w-64 fixed left-0 top-[70px] flex flex-col h-full">
      {/* Button Container */}
      <div className="flex flex-1 flex-col items-center">
        <button className='bg-slate-200 hover:bg-slate-400 hover:text-white rounded-lg shadow-sm shadow-gray-400 my-14 gap-3 w-[200px] h-[50px] flex items-center justify-center py-3 font-bold text-[25px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 62 63" fill="none">
            <path fill="#141414" d="M61.97 33.7c0 9.73-4.77 18.36-12.1 23.65a29.025 29.025 0 0 1-17.07 5.52c-6.37 0-12.27-2.04-17.07-5.52C8.4 52.06 3.63 43.43 3.63 33.7c0-16.11 13.06-29.17 29.17-29.17S61.97 17.59 61.97 33.7Z" />
            <path fill="#fff" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M59.97 30.69c0 9.73-4.77 18.36-12.1 23.65a29.025 29.025 0 0 1-17.07 5.52c-6.37 0-12.27-2.04-17.07-5.52-7.33-5.29-12.1-13.92-12.1-23.65 0-16.11 13.06-29.17 29.17-29.17s29.17 13.06 29.17 29.17Z" />
            <path stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M24.13 16.62h16.84c4.03 0 7.3 3.05 7.3 6.81v.76c0 3.76-3.27 6.81-7.3 6.81H20.56c-4.03 0-7.3 3.05-7.3 6.81s3.27 6.81 7.3 6.81h17.11" />
            <path fill="#141414" d="M17.27 20.62a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM44.34 48.77a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            <path fill="#141414" stroke="#fff" strokeMiterlimit="10" d="M23.46 34a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM30.55 47.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM37.04 19.48a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
          Roadmap
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
