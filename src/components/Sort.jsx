import React from 'react';

const Sort = ({ sortOptions, handleSortChange }) => {
  return (
    <div className="sort">
      <h2>Sort By</h2>
      <select onChange={(e) => handleSortChange(e.target.value)}>
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
