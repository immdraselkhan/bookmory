// Home component
import React, { useEffect, useState } from 'react';
import { handleLocalStorage, getStoredData } from '../../utilities/localStorage';
import Book from '../Book/Book';
import Sidebar from '../Sidebar/Sidebar';

const Home = ({books}) => {
  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTime = data => {
    const totalReadingTime = JSON.parse(data);
    setReadingTime(totalReadingTime + readingTime);
    handleLocalStorage('reading-time', totalReadingTime);
  }

  useEffect(() => {
    const storedData = getStoredData();
    for (const singleData in storedData) {
      if (singleData === 'reading-time') {
        setReadingTime(storedData[singleData]);
      }
    }
  }, []);

  return (
    <main className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-11 gap-5 relative text-accent-light">
      {/* Books Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-4 lg:col-span-8 gap-5">
        {books.map(book => <Book book={book} handleReadingTime={handleReadingTime} key={book.id} />)}
      </div>
      {/* Activity Tracker */}
      <div className="h-fit bg-white p-5 rounded-lg sticky top-5 shadow col-span-1 md:col-span-2 lg:col-span-3">
        <Sidebar readingTime={readingTime} />
      </div>
    </main>
  )
}

export default Home;