'use client';
import React from 'react';
import CartIcon from './icons/cartIcon';
import Link from 'next/link';
import { useCartContext } from '../context/cartContext';

const Navbar = () => {
  const {
    cartState: { cart },
  } = useCartContext();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center gap-4 px-10 py-2
    border bg-white"
    >
      <Link className="flex items-center gap-4 " href="/">
        <img src="/dil.png" alt="logo" className="h-10 w-10" />
        <h1 className="text-heading-3/h1 text-primaryLight tracking-wide uppercase logo">
          Dil Foods
        </h1>
      </Link>
      <Link href="/checkout" className="relative">
        <p className="absolute -top-3 -right-6 border-2 bg-grey-1 text-grey-9 font-semibold rounded-full text-center px-2">
          {cart.length}
        </p>
        <CartIcon />
      </Link>
    </nav>
  );
};

export default Navbar;
