import React from 'react';
import Card from '../Card/Card';
//import PropTypes from 'prop-types'

function List({ search }) {
  return (
    <div className="List">
      <Card entry={search} />
    </div>
  );
}

// List.propTypes = {

// }

export default List;
