import React from 'react';
import './card1.css'; 
import teddy from '../teddy.png';
import unicorn from '../unicorn.jpg';
import lama from '../lama.jpg';
import miccy from '../miccy.png';
import stem from '../stem.jpg';
import puzzles from '../puzzles.jpg';
import math from '../math.jpg';
import counting from '../counting.jpg';

function Card() {
  return (
    <>
      <h1 className="text-center my-4">Our Soft Toys</h1>
      {/* This is the new flex container */}
      <div className="cards-container"> 
        <div className="card"> {/* Consider adding width to CSS for consistency */}
          <img src={teddy} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Teddy Bear</h5>
            <p className="card-text">The classic, beloved stuffed animal, typically made from soft, plush fabric.</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={unicorn} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Plush Unicorn</h5>
            <p className="card-text">A mythical creature brought to life in soft toy form. Plush unicorns typically feature a soft, often brightly colored body white, pink, purple, or rainbow are common. </p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={lama} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Stuffed Animal Llama</h5>
            <p className="card-text">These soft toys are inspired by the charming South American camelids.</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={miccy} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Disney's Mickey Mouse</h5>
            <p className="card-text">These are soft toy versions of popular characters from movies, TV shows, video games, or books.</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div> {/* End of flex container */}


      <h1 className="text-center my-4">Our Educational Toys</h1>
      {/* This is the new flex container */}
      <div className="cards-container"> 
        <div className="card"> {/* Consider adding width to CSS for consistency */}
          <img src={stem} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">STEM</h5>
            <p className="card-text"> Focus on Science, Technology, Engineering, and Mathematics (e.g., robotics kits, circuit builders, chemistry sets, coding games).</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={puzzles} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Puzzles</h5>
            <p className="card-text">Develop problem-solving, logic, hand-eye coordination, and spatial awareness (e.g., jigsaw puzzles, shape sorters, brain teasers). </p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={math}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Building/Construction Toys</h5>
            <p className="card-text">Encourage creativity, problem-solving, fine motor skills, and spatial reasoning (e.g., LEGO, building blocks, Magna-Tiles, K'Nex).</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={counting} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Math & Counting Toys</h5>
            <p className="card-text"> Help with number recognition, basic arithmetic, and logical thinking (e.g., abacus, counting bears, math games).</p>
            <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div> {/* End of flex container */}
    </>
  );
}

export default Card;