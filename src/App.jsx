import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import './App.css';

// Function to generate a random image URL from Lorem Picsum
const getRandomImageUrl = () => {
  const imageId = Math.floor(Math.random() * 1000) + 1; // Random image ID
  return `https://picsum.photos/id/${imageId}/200/200`;
};

// Generate an array of 50 products with placeholder images
const generateProductsData = () => {
  const products = [];
  for (let i = 1; i <= 50; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 100) + 10,
      category: i % 2 === 0 ? 'Dresses' : 'Shoes',
      image: getRandomImageUrl(),
    });
  }
  return products;
};

const productsData = generateProductsData();

const sortOptions = [
  { value: 'priceLowToHigh', label: 'Price Low to High' },
  { value: 'priceHighToLow', label: 'Price High to Low' },
];

const App = () => {
  const [filters, setFilters] = useState({ category: '' });
  const [sort, setSort] = useState('priceLowToHigh');

  const filteredProducts = productsData
  .filter(product => filters.category === '' || product.category === filters.category)
  .sort((a, b) => {
    if (sort === 'priceLowToHigh') return a.price - b.price;
    if (sort === 'priceHighToLow') return b.price - a.price;
    return 0;
  });

const handleFilterChange = (filterType, value) => {
  setFilters({ ...filters, [filterType]: value });
};

const handleSortChange = (value) => {
  setSort(value);
};


  return (
    <div className="app">
      <Filter filters={filters} handleFilterChange={handleFilterChange} />
      <Sort sortOptions={sortOptions} handleSortChange={handleSortChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
