import React from "react";
import Link from "next/link";
import FeaturedProducts from "@/Components/FeaturedProducts";
import BestSelling from "@/Components/BestSelling";
import { Suspense } from "react";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- Hero Section --- */}
      <section className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-left md:w-1/2 z-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Discover Quality Products <br className="hidden md:inline" /> at
              E.Store
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-md mx-auto md:mx-0">
              Your one-stop shop for the latest electronics, fashion, and home
              essentials.
            </p>
            {/* Corrected Link usage for Next.js 13+ */}
            <Link
              href="/products"
              className="bg-white text-cyan-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transform hover:scale-105 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-end z-10">
            {/* Using Next.js Image component for optimized images */}
            <img
              src="https://cdn.pixabay.com/photo/2024/05/28/08/19/ai-generated-8793193_1280.png" // Replace with your hero image path
              alt="E.Store Hero Banner"
              width={600} // Specify width
              height={400} // Specify height
              className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-64 h-64 bg-cyan-400 rounded-full opacity-20 -top-16 -left-16 blur-2xl"></div>
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-15 -bottom-32 -right-32 blur-2xl"></div>
        </div>
      </section>

      {/* --- Best Selling Products Section --- */}
      <Suspense
        fallback={
          <>
            <div className=" flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-600"></div>
            </div>
          </>
        }
      >
        <BestSelling />
      </Suspense>

      {/* --- Featured Products Section --- */}
      <Suspense
        fallback={
          <>
            <div className=" flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-600"></div>
            </div>
          </>
        }
      >

        <FeaturedProducts />
      </Suspense>
    </div>
  );
};

export default page;