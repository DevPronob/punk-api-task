import React from 'react'

const BeerCard = ({ beer }) => {
  return (
<div className="">
  <div className="card">
    <img
      src={beer.image_url}
      className="card-img-top img-fluid mx-auto mt-5"
      alt={beer.name}
      style={{ maxWidth: '200px', maxHeight: '300px' }}
    />
    <div className="card-body text-center">
      <h5 className="card-title">{beer.name}</h5>
      <p className="card-text">{beer.tagline}</p>
      <p className="card-text">
        <strong>ABV:</strong> {beer.abv}%
      </p>
      <p className="card-text">
        <strong>IBU:</strong> {beer.ibu}
      </p>
    </div>
  </div>
</div>
  )
}

export default BeerCard
