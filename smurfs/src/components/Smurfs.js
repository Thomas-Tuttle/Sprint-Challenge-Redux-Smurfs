import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
  return (

    <div>
      {props.smurfs.map((smurf, event) => 
        <Smurf key={event} smurf={smurf}
         deleteSmurf={props.deleteSmurf} />)}
    </div>
    
  );
}

export default Smurfs;
