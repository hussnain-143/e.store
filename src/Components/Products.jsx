'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fetchProductsAndCategories = async () => {
            try {
                
                const productsResponse = await fetch('https://fakestoreapi.com/products');
                if (!productsResponse.ok) {
                    throw new Error(`HTTP error! status: ${productsResponse.status}`);
                }
                const productsData = await productsResponse.json();
                setProducts(productsData);

                // Fetch categories
                const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories');
                if (!categoriesResponse.ok) {
                    throw new Error(`HTTP error! status: ${categoriesResponse.status}`);
                }
                const categoriesData = await categoriesResponse.json();
                setCategories(['all', ...categoriesData]);
            } catch (err) {
                console.error("Failed to fetch data:", err);
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductsAndCategories();
    }, []); 

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    if (loading) {
        return (
            <div className=" flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-600"></div>
                <p className="ml-4 text-xl text-gray-700">Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-600 text-xl">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className=' grid grid-cols-1 gap-10 md:grid-cols-4 container mx-auto my-20 px-4'>
            {/* Categories Section */}
            <section className="col-span-1 p-4 md:p-0">
                <h2 className='text-3xl text-cyan-600 italic font-semibold mb-5'>Categories</h2>
                <div className="space-y-2">
                    {categories.map((categoryName) => (
                        <button
                            key={categoryName}
                            onClick={() => setSelectedCategory(categoryName)}
                            className={`block w-full text-left py-2 px-4 rounded-md transition-colors duration-200
                                ${selectedCategory === categoryName
                                    ? 'bg-cyan-600 text-white font-bold shadow-md'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-cyan-700'
                                }`}
                        >
                            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} {/* Capitalize first letter */}
                        </button>
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <section className="col-span-1 md:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                            >
                                {/* Using Link for Next.js navigation */}
                                <Link href={`/product/${product.id}`}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-48 object-contain p-4"
                                        // Fallback for broken images
                                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/CCCCCC/333333?text=Image+Not+Found"; }}
                                    />
                                </Link>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        <Link href={`/product/${product.id}`} className="hover:text-cyan-600 transition-colors duration-200">
                                            {product.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-900 font-bold text-lg">${product.price}</p>
                                    <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition-colors duration-200">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-600 text-xl">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Products;
