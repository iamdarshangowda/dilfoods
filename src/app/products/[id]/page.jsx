'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { get } from '../../../config/axiosClient';
import Loader from '../../../Components/icons/loader';

const SingleProduct = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  function handleBack() {
    router.back();
  }

  useEffect(() => {
    async function getSingleProduct() {
      try {
        setLoading(true);
        const response = await get(pathname);
        setSingleProduct(response.data);
      } catch (error) {
        console.log(error);
        alert('Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    getSingleProduct();
  }, [pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-20 h-20">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6" onClick={handleBack}>
          <button className="max-w-sm bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
            Back
          </button>
        </div>
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              {singleProduct.images?.length ? (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={singleProduct.images[0]}
                  alt="Product Image"
                />
              ) : (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/dil.png"
                  alt="Product Image"
                />
              )}
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-full px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4 text-grey-6">
            <h2 className="text-2xl font-boldmb-2">{singleProduct.title}</h2>
            <p className="text-grey-7 text-sm mb-4">
              {singleProduct.description?.substring(0, 100) + '...'}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold">Price:</span>
                <span> &#8377;{singleProduct.price}</span>
              </div>
              <div>
                <span className="font-bold">Availability:</span>
                <span>In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold">Select Color:</span>
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold">Select Size:</span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <span className="font-bold">Product Description:</span>
              <p className="text-grey-7 text-sm mt-2">{singleProduct.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
