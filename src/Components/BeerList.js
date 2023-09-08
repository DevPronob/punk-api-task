import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BeerCard from './BeerCard';

const BeerList = () => {
    const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('https://api.punkapi.com/v2/beers');
        const newData = await res.json();
        setBeers(newData);
      };
    
      fetchData();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search for a beer..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="col-md-4 mb-4">
            <BeerCard beer={beer} />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default BeerList
