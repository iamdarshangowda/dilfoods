import React from 'react';

const CartItem = ({ item, callback }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <img
        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={item.images[0]}
        alt=""
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{item.title}</span>
        <span className="float-right text-gray-400">Size: {item.size}</span>
        <p className="text-lg font-bold">&#8377;{item.price}</p>
      </div>
      <button
        className="text-grey-8 font-semibold h-8 p-2 border-2 flex items-center rounded-md"
        onClick={callback}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
