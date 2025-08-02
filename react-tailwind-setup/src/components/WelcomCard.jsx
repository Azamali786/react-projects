import React from "react";


const WelcomeCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img 
              className="h-84 w-full object-cover md:w-48" 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Property</div>
            <a 
              href="#" 
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Modern apartment in downtown  
            </a>
            <p className="mt-2 text-gray-500">
              Beautiful modern apartment located in the heart of the city with amazing views and amenities.
            </p>
            <div className="mt-4">
              <span className="text-gray-600">$1,200</span>
              <span className="ml-2 text-gray-500">/month</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
