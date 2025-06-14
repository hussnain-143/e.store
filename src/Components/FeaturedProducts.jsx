"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const FeaturedProducts = () => {
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=5&sort=desc");
                const data = await response.json();
                setFeatured(data);
            } catch (error) {
                console.error("Failed to fetch featured products:", error);
            }
        };

        fetchFeatured();
    }, []);

    return (
        <div >
            <section className="container mx-auto my-16 px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    <span className="italic text-cyan-600">Featured</span> Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            <Link href={`/product/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-contain p-4"
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
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FeaturedProducts;
``
