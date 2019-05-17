import React from 'react';

const Smurf = props => {
  const { smurf } = props;
  return (

    <div className='smurfDiv'>

      <button className='deleteBtn' type="submit" onClick={(event) => props.deleteSmurf(event, smurf.id)}>X</button>

      <p>Name: {smurf.name}</p>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      
    </div>
    
  );
}

export default Smurf;
