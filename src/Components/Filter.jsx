import React from 'react';

const Filter = () => {
  return (
    <div className="flex gap-4 items-center flex-wrap">
      <input
        type="text"
        className="py-2 px-4 outline-none text-body-1/b3 text-grey-2 rounded-full max-w-sm w-full"
        placeholder="search your products..."
      />

      <select name="category" id="category" className="py-2 px-6 rounded-full ">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <select name="brand" id="brand" className="py-2 px-4 rounded-full ">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default Filter;
