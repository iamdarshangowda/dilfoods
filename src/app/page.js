'use client';
import Link from 'next/link';
import Filter from '../Components/Filter';
import ItemCard from '../Components/itemCard';
import { useEffect, useState } from 'react';
import { get } from '../config/axiosClient';
import ItemCardSkeleton from '../Components/skeleton/itemCardSkeleton';
import { useQueryContext } from '../context/queryContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { searchString, priceRange, categoryId } = useQueryContext();

  async function getAllProducts() {
    try {
      setLoading(true);
      const response = await get(
        `products?offset=${currentPage}&limit=${10}&price_min=${
          priceRange.min
        }&price_max=${priceRange.max}&title=${searchString}&categoryId=${categoryId}`
      );
      setProducts(response.data);
      // }
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [currentPage, searchString, priceRange, categoryId]);

  function handleNextPage() {
    setCurrentPage((prev) => prev + 10);
  }

  function handlePrevPage() {
    setCurrentPage((prev) => prev - 10);
  }

  return (
    <main className="min-h-screen p-6">
      <Filter />
      <div
        className="mt-10 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 
        justify-items-center justify-center gap-4 mb-20"
      >
        {loading
          ? new Array(10)
              .fill('')
              .map((products, index) => <ItemCardSkeleton key={index} />)
          : products.map((product, index) => (
              <Link href="/product/1" key={product.id}>
                <ItemCard product={product} />
              </Link>
            ))}
      </div>
      <div className="fixed left-1/2 bottom-5 bg-grey-9 p-4 rounded-lg -translate-x-1/2 flex justify-center gap-8 hover:px-10 transition-all">
        <button
          className="p-4 bg-primaryDark text-sm rounded-lg font-bold text-grey-1 disabled:bg-grey-3"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Prev
        </button>
        <button
          className="p-4 bg-primaryDark text-sm rounded-lg font-bold text-grey-1 disabled:bg-grey-3"
          disabled={products.length < 10}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </main>
  );
}
