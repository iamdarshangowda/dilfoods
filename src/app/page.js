'use client';
import Link from 'next/link';
import Filter from '../Components/Filter';
import ItemCard from '../Components/itemCard';
import { useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState(new Array(10).fill(''));

  return (
    <main className="h-full items-center justify-between p-6">
      <Filter />
      <div
        className="mt-10 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 
        justify-items-center justify-center gap-4"
      >
        {products.map((product) => (
          <Link href="/product/1">
            <ItemCard />
          </Link>
        ))}
      </div>
    </main>
  );
}
