 import React, { useState } from 'react';
import Button from './subComp/Button';
import Swal from 'sweetalert2';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Reservation Successful!',
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Date:</strong> ${date}<br/>
        <strong>Time:</strong> ${time}<br/>
        <strong>Guests:</strong> ${guests}
      `,
      icon: 'success',
      confirmButtonText: 'OK'
    });

    setDate('');
    setName('');
    setTime('');
    setGuests('');
  };

  return (
    <>
      <div className='text-white w-full px-4'>
        <form
          onSubmit={handlesubmit}
          className='flex flex-col md:flex-row md:flex-wrap gap-6 items-center justify-center'
        >
          {/* Name */}
          <div className='flex flex-col w-full sm:w-60'>
            <label className='font-bold text-xl'>Your Name</label>
            <input
              className='p-2 text-center outline-0 bg-white text-black h-10 mt-2 rounded-md'
              type='text'
              value={name}
              placeholder='Enter Your Name'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Date */}
          <div className='flex flex-col w-full sm:w-60'>
            <label className='font-bold text-xl'>Date</label>
            <input
              className='p-2 text-center outline-0 bg-white text-black h-10 mt-2 rounded-md'
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Time */}
          <div className='flex flex-col w-full sm:w-60'>
            <label className='font-bold text-xl'>Time</label>
            <input
              className='p-2 text-center outline-0 bg-white text-black h-10 mt-2 rounded-md'
              type='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          {/* Guests */}
          <div className='flex flex-col w-full sm:w-60'>
            <label className='font-bold text-xl'>Guests</label>
            <input
              className='p-2 text-center outline-0 bg-white text-black h-10 mt-2 rounded-md'
              type='number'
              value={guests}
              placeholder='2'
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className='mt-4 md:mt-8'>
            <Button text={<button type='submit'>Reservation</button>} />
           
          </div>
        </form>
      </div>
    </>
  );
};

export default ReservationForm;
