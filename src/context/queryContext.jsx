'use client';
const { createContext, useState, useContext } = require('react');

const QuerContext = createContext();

export const QueryContextWrapper = ({ children }) => {
  const [searchString, setSearchString] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 1, max: 10000 });
  const [categoryId, setCategoryId] = useState('');

  const value = {
    searchString,
    setSearchString,
    priceRange,
    setPriceRange,
    categoryId,
    setCategoryId,
  };
  return <QuerContext.Provider value={value}>{children}</QuerContext.Provider>;
};

export const useQueryContext = () => {
  return useContext(QuerContext);
};
