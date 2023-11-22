import React, { useEffect, useState } from 'react';
import { useQueryContext } from '../context/queryContext';
import { get } from '../config/axiosClient';

const Filter = () => {
  const {
    searchString,
    setSearchString,
    setPriceRange,
    priceRange,
    setCategoryId,
    categoryId,
  } = useQueryContext();
  const [categoriesList, setCategoriesList] = useState([]);

  function handleSearch(e) {
    const { value } = e.target;
    setSearchString(value);
  }

  function handlePriceRange(e) {
    const { value } = e.target;
    if (value === 500) {
      setPriceRange({ min: value, max: 10000 });
    } else {
      setPriceRange({ min: value, max: value + 100 });
    }
  }

  function handleCategory(e) {
    const { value } = e.target;
    setCategoryId(value);
  }

  function handleClearFilters() {
    setSearchString('');
    setPriceRange({ min: 1, max: 1000 });
    setCategoryId('');
  }

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await get(`/categories`);
        setCategoriesList(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []);

  return (
    <div className="flex gap-4 items-center flex-wrap border-b-2 border-secondary pb-4">
      <input
        value={searchString}
        type="text"
        className="py-2 px-4 outline-none text-body-1/b3 text-grey-2 rounded-full max-w-sm w-full"
        placeholder="search your products..."
        onChange={handleSearch}
      />

      <select
        name="priceRange"
        id="priceRange"
        className="py-2 px-6 rounded-full "
        onChange={handlePriceRange}
      >
        <option value="0" disabled selected={priceRange.min === 1}>
          Price Range
        </option>
        <option value="100">100&#8377; - 200&#8377;</option>
        <option value="200">200&#8377; - 300&#8377;</option>
        <option value="300">300&#8377; - 400&#8377;</option>
        <option value="400">400&#8377; - 500&#8377;</option>
        <option value="500">&gt; 500&#8377;</option>
      </select>

      <select
        name="brand"
        id="brand"
        className="py-2 px-4 rounded-full "
        onChange={handleCategory}
      >
        <option value="0" disabled selected={!categoryId}>
          Category
        </option>
        {categoriesList.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <button
        className="py-2 px-4 bg-grey-0 rounded-full disabled:bg-grey-2"
        onClick={handleClearFilters}
        disabled={priceRange.min === 1 && !categoryId}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
