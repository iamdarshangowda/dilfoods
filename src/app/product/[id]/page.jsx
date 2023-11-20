'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const SingleProduct = () => {
  const router = useRouter();
  function handleBack() {
    router.back();
  }

  return (
    <div class="py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6" onClick={handleBack}>
          <button class="max-w-sm bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
            Back
          </button>
        </div>
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                class="w-full h-full object-cover rounded-lg"
                src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                alt="Product Image"
              />
            </div>
            <div class="flex -mx-2 mb-4">
              <div class="w-1/2 px-2">
                <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div class="w-1/2 px-2">
                <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4 text-grey-6">
            <h2 class="text-2xl font-boldmb-2">Product Name</h2>
            <p class="text-grey-7 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo.
              Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold">Price:</span>
                <span> $29.99</span>
              </div>
              <div>
                <span class="font-bold">Availability:</span>
                <span>In Stock</span>
              </div>
            </div>
            <div class="mb-4">
              <span class="font-bold">Select Color:</span>
              <div class="flex items-center mt-2">
                <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div>
            </div>
            <div class="mb-4">
              <span class="font-bold">Select Size:</span>
              <div class="flex items-center mt-2">
                <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>
            <div>
              <span class="font-bold">Product Description:</span>
              <p class="text-grey-7 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
                justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus
                commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum
                pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices
                placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis
                mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi
                consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
