import React from 'react';

import Location from './Location';

export default (props) => {

  return (
      <div className="recipient">
        <h1>{props.name}</h1>
        <Location place={props.location} />
      </div>
  );

};