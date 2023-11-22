'use client';
import React from 'react';
import CartIcon from './icons/cartIcon';
import Link from 'next/link';
import { useCartContext } from '../context/cartContext';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const {
    cartState: { cart },
  } = useCartContext();

  function handleCart() {
    if (!cart.length) {
      alert('Cart is empty.');
      return;
    }
    router.push('/checkout');
  }

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
      <button onClick={handleCart} className="relative">
        <p className="absolute -top-3 -right-6 border-2 bg-grey-1 text-grey-9 font-semibold rounded-full text-center px-2">
          {cart.length}
        </p>
        <CartIcon />
      </button>
    </nav>
  );
};

export default Navbar;
