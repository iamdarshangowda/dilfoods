'use client';
import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import CartItem from '../../Components/cartItem';
import { useRouter } from 'next/navigation';

const Checkout = () => {
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({ name: '', address: '', phone: '' });
  const {
    cartState: { cart },
    cartDispatch,
  } = useCartContext();

  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => acc + Number(item.price), 0);
    setTotal(totalPrice);
  }, [cart]);

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handlePlaceOrder(e) {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.phone) {
      alert('Please fill the details');
      return;
    }

    alert('Order Placed');
    cartDispatch({
      type: 'REMOVE-ALL-ITEMS',
    });
    router.push('/');
  }

  function handleRemoveItem(product) {
    cartDispatch({
      type: 'REMOVE-FROM-CART',
      payload: product,
    });
  }

  return (
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mt-10 gap-6 min-h-screen">
      <div className="pt-8">
        <p className="text-xl font-medium">Order Summary</p>
        <p className="text-grey-8">
          Check your items. And select a suitable shipping method.
        </p>
        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          {cart.length
            ? cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  callback={() => handleRemoveItem(item)}
                />
              ))
            : 'No Items Added'}
        </div>
      </div>
      <div className=" max-h-max bg-grey-1 flex justify-center items-center flex-col">
        <div className="flex gap-4">
          <h1 className="text-heading-1/h1">Total: </h1>
          <p className="text-heading-1/h1">&#8377;{total}</p>
        </div>
        <form
          className="pt-8 flex flex-col gap-6 justify-center items-center border-2 rounded-md p-4 "
          onSubmit={handlePlaceOrder}
          onChange={handleForm}
        >
          <div className="flex gap-4 items-center w-full  justify-between">
            <label className="text-xl font-medium">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="py-2 px-4 outline-none text-body-1/b3 placeholder:text-grey-2 rounded-sm w-full"
            />
          </div>
          <div className="flex gap-4 items-center w-full justify-between">
            <label className="text-xl font-medium">Address: </label>
            <input
              type="text"
              name="address"
              placeholder="enter your address"
              className="py-2 px-4 outline-none text-body-1/b3 placeholder:text-grey-2 rounded-sm w-full"
            />
          </div>
          <div className="flex gap-4 items-center w-full  justify-between">
            <label className="text-xl font-medium">Phone: </label>
            <input
              type="text"
              name="phone"
              placeholder="enter your phone"
              className="py-2 px-4 outline-none text-body-1/b3 placeholder:text-grey-2 rounded-sm w-full"
            />
          </div>
          <div class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <button className="flex gap-4 items-center" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
