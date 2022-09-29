// Sidebar component
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { getStoredData, handleLocalStorage } from '../../utilities/localStorage';

const Sidebar = ({readingTime}) => {
  const [breakTime, setBreakTime] = useState(0);
  
  const handleBreakTime = data => {
    const totalBreakTime = data;
    setBreakTime(totalBreakTime);
    handleLocalStorage('break-time', totalBreakTime);
    toast.success('Successfully added!');
  };

  useEffect(() => {
    const storedData = getStoredData();
    for (const singleData in storedData) {
      if (singleData === 'break-time') {
        setBreakTime(storedData[singleData]);
      }
    }
  }, []);
  
  const readingComplete = () => {
    Swal.fire({
      title: 'Successful!',
      text: 'You did a great job!',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#4981A7'
    })
  };

  const button = 'text-white bg-primary hover:bg-primary-dark h-12 w-12 rounded-full';
  const buttonSelected = 'text-black hover:text-white bg-white hover:bg-primary-dark h-12 w-12 rounded-full';

  return (
    <aside className="space-y-12">
      <div className="flex items-center gap-3">
        <img className="h-16 rounded-xl" src="https://xsgames.co/randomusers/avatar.php?g=male" />
        <div>
          <h2 className="text-2xl text-black">Md Rasel</h2>
          <p className="opacity-50">Barishal, Bangladesh</p>
        </div>
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl text-black">History</h2>
        <div className="p-4 flex items-center justify-between text-center rounded-lg bg-secondary">
          <div>
            <p className="text-3xl font-semibold">15</p>
            <p>Books</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">980</p>
            <p>Pages</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">23</p>
            <p>Days</p>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl text-black">Add a break</h2>
        <div className="p-4 flex items-center justify-between rounded-lg bg-secondary">
          <button onClick={() => handleBreakTime(1)} className={breakTime == 1 ? button : buttonSelected}>1d</button>
          <button onClick={() => handleBreakTime(2)} className={breakTime == 2 ? button : buttonSelected}>2d</button>
          <button onClick={() => handleBreakTime(3)} className={breakTime == 3 ? button : buttonSelected}>3d</button>
          <button onClick={() => handleBreakTime(4)} className={breakTime == 4 ? button : buttonSelected}>4d</button>
        </div>
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl text-black">Reading details</h2>
        <div className="p-4 flex items-center justify-between rounded-lg bg-secondary">
          <p>Reading Time</p>
          <p className="opacity-40">{readingTime} {readingTime <= 1 ? 'Day' : 'Days'}</p>
        </div>
        <div className="p-4 flex items-center justify-between rounded-lg bg-secondary">
          <p>Break Time</p>
          <p className="opacity-40">{breakTime} {breakTime <= 1 ? 'Day' : 'Days'}</p>
        </div>
        <div>
          <button onClick={readingComplete} className="text-white py-3 bg-primary hover:bg-primary-dark rounded-lg w-full">Reading Complete</button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;