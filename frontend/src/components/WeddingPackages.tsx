import React from "react";

const WeddingPackages = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center border">
      {/* Featured Wedding Packages Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif">Featured Wedding Packages</h2>
      </div>

      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Standard Package */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border">
            <div className="mb-6">
            <div className="flex justify-center space-x-8">
              <img
                src="/images/Standard.png"
                alt="Floral Studio"
                className="max-w-xs"
              />
            </div>
              <h3 className="text-2xl font-semibold mb-2">Standard</h3>
              <p className="text-3xl text-gray-700 mb-4">₹5000</p>
            </div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Sed lectus ultricies</li>
              <li>Gravida ullamcorper lectus</li>
              <li>Aenean posuere urna</li>
              <li>Non ac iaculis lobortis</li>
              <li>In pulvinar vitae</li>
            </ul>
            <button className="border border-black text-black py-2 px-4 rounded">
              Details
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border">
            <div className="flex justify-center space-x-8">
              <img
                src="/images/Premium.png"
                alt="Floral Studio"
                className="max-w-xs"
              />
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Premium</h3>
              <p className="text-3xl text-gray-700 mb-4">₹20000</p>
            </div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Sed lectus ultricies</li>
              <li>Gravida ullamcorper lectus</li>
              <li>Aenean posuere urna</li>
              <li>Non ac iaculis lobortis</li>
              <li>In pulvinar vitae</li>
            </ul>
            <button className="bg-scolor text-white py-2 px-4 rounded">
              Details
            </button>
          </div>

          {/* Luxury Package */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border">
            <div className="mb-6">
            <div className="flex justify-center space-x-8">
              <img
                src="/images/Luxury.png"
                alt="Floral Studio"
                className="max-w-xs"
              />
            </div>


              <h3 className="text-2xl font-semibold mb-2">Luxury</h3>
              <p className="text-3xl text-gray-700 mb-4">₹50000</p>
            </div>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Sed lectus ultricies</li>
              <li>Gravida ullamcorper lectus</li>
              <li>Aenean posuere urna</li>
              <li>Non ac iaculis lobortis</li>
              <li>In pulvinar vitae</li>
            </ul>
            <button className="border border-black text-black py-2 px-4 rounded">
              Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPackages;
