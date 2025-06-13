import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800 p-6">
     
      <h1 className="text-9xl font-bold text-cyan-600 mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-4xl font-semibold mb-6 text-gray-700 text-center">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Oops! It looks like the page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link href="/" className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-md shadow-lg hover:bg-cyan-700 transition-colors duration-300 transform hover:scale-105">
          Go to Homepage
        
      </Link>
    </div>
  );
};

export default NotFound;