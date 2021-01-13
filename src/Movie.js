import React from 'react';
import ProrpTypes from 'prop-types';

function Movie({id, year, title, summary, poster }) {
  return <h5>{title}</h5>
}

Movie.prorpTypes = {
  id: ProrpTypes.number.isRequired,
  year: ProrpTypes.number.isRequired,
  title: ProrpTypes.string.isRequired,
  summary: ProrpTypes.string.isRequired,
  poster: ProrpTypes.string.isRequired
};



export default Movie;