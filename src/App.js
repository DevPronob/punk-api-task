import logo from './logo.svg';
import './App.css';
import BeerList from './Components/BeerList';

function App() {
  return (
    <div className="app">
    <div className="container mt-5">
      <h1 className="text-center mb-4">Punk API Beers</h1>
      <BeerList></BeerList>
    </div>
    </div>
  );
}

export default App;
