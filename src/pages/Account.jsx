import React from 'react';
import background from '../assets/pexels-nathan-engel-436413.jpg'
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full object-cover h-[400px]' src={background} alt="cinema" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8 flex justify-center w-full'>
          <h1 className='text-3xl md:text-5xl font-bold  '>My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;



        
