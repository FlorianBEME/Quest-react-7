import React from 'react';
  
function DisplayEmployee({ image, character, quote }) {
  return (
    <div className="DisplayEmployee">
      <img
        src={image}
        alt={character}
      />
      <ul>
        <li>Name: {character}</li>
        <li>
          quote: {quote}
        </li>
      </ul>
    </div>
  );
};
  
export default DisplayEmployee;