import React from 'react';
import './card1.css'; // Assuming you have a CSS file for styling

function Card() {
  return (
    <>
      <h1 className="text-center my-4">Our Soft Toys</h1>
      {/* This is the new flex container */}
      <div className="cards-container"> 
        <div className="card"> {/* Consider adding width to CSS for consistency */}
          <img src="images/teddy.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Teddy Bear</h5>
            <p className="card-text">The classic, beloved stuffed animal, typically made from soft, plush fabric.</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src="images/unicorn.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Plush Unicorn</h5>
            <p className="card-text">A mythical creature brought to life in soft toy form. Plush unicorns typically feature a soft, often brightly colored body white, pink, purple, or rainbow are common. </p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src="images/lama.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Stuffed Animal Llama</h5>
            <p className="card-text">These soft toys are inspired by the charming South American camelids.</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src="images/miccy.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Disney's Mickey Mouse</h5>
            <p className="card-text">These are soft toy versions of popular characters from movies, TV shows, video games, or books.</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div> {/* End of flex container */}
    </>
  );
}

export default Card;