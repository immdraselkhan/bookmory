// Book component
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Book = ({book, handleReadingTime} ) => {
  const [buttonText, setButtonText] = useState('Select');

  const handleButtonText = () => {
    setButtonText('Select Again');
    buttonText === 'Select' ? toast.success('Successfully added!') : toast.success('Again successfully added!');
  }

  const {title, author, pages, image, time} = book;

  return (
    <div className="p-5 bg-white rounded-lg space-y-3 inline-grid shadow">
      <img className=" h-96 md:h-60 w-full mx-auto mb-5 rounded-lg" src={image} alt={title} />
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-accent-light">Author: {author}</p>
      <p>Pages: <span className="font-semibold">{pages}</span></p>
      <p className="">Time required: <span className="font-semibold">{time} {time == 1 ? 'Day' : 'Days'}</span></p>
      <button onClick={() => { handleReadingTime(time); handleButtonText() }} className="py-2 !mt-5 w-full text-white bg-primary hover:bg-primary-dark rounded-lg">{buttonText}</button>
      <Toaster />
    </div>
  )
}

export default Book;