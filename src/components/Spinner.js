import React, { Fragment } from 'react';
import spinner from '../components/img/spinner.gif';

export default () => (
  <div  className="loader">
    <img
      src={spinner}
      style={{ width: '400px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
    {/* <h style={{ width: '400px', margin: 'auto', display: 'block' }}>Loading...</h> */}
  </div>
);
