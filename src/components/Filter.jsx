import React from 'react';

const Filter = ({ filters, handleFilterChange }) => {
  return (
    <div className="filter">
      <h2>Filters</h2>
      <label>
        <input
          type="checkbox"
          checked={filters.category === 'Dresses'}
          onChange={() => handleFilterChange('category', 'Dresses')}
        />
        Dresses
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.category === 'Shoes'}
          onChange={() => handleFilterChange('category', 'Shoes')}
        />
        Shoes
      </label>
      {/* Add more filters based on your requirements */}
    </div>
  );
};

export default Filter;

