import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <Header />
      {/* Main */}
      <Home />
    </div>
  );
}

export default App;
