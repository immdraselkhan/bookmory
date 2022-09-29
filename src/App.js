import { useEffect, useState } from 'react';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/immdraselkhan/books-api/main/books.json')
    .then(res => res.json())
    .then(data => setBooks(data.books))
    .catch(error => console.log(error));
  }, [])
  
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <Header />
      {/* Main */}
      <Home books={books} />
      {/* Faqs  */}
      <Faq />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
