import React, { useEffect, useState } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="logo">
            <img src="/images/Logo.jpg" alt="Hotel Logo" className="w-24 h-10 object-cover"/>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-green-400">Home</a>
            <a href="#" className="hover:text-green-400">Weddings</a>
            <a href="#" className="hover:text-green-400">Accommodation</a>
            <a href="#" className="hover:text-green-400">Events</a>
            <a href="#" className="hover:text-green-400">Offers</a>
            <a href="#" className="hover:text-green-400">Contact Us</a>
          </nav>
          <div>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Book Now</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img src="/images/bg.jpg" alt="Hotel Exterior" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Your lavish home away from home</h2>
            <p className="text-lg">Experience the best of comfort and luxury in the heart of the city.</p>
          </div>
        </div>
      </section>

      {/* Featured Room Section */}
      <section className="container py-20 mx-auto p-4">
        <div className="flex flex-col md:flex-row backdrop-blur-sm shadow-lg overflow-hidden">
          <div className="md:w-2/3">
            <img src="/images/bride.jpg" alt="Luxurious hotel room" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/3 p-6 flex flex-col justify-center">
            <h2 className="text-3xl font-serif mb-4 text-gray-800">Movement of elegance!</h2>
            <p className="text-gray-600 mb-6">At Hotel Somewhere, we offer a variety of accommodation options to cater to both leisure travelers and business professionals alike.</p>
            <button className="bg-blue-900 text-white py-2 px-4 hover:bg-blue-900 transition duration-300">BOOK NOW</button>
          </div>
        </div>
      </section>

      {/* Wedding Package Section */}
      <section className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Featured Wedding Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/all.jpg" alt="Golden Package" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Golden Package</h3>
              <a href="#" className="text-blue-900 mt-4 block">Find out more...</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/all.jpg" alt="Premium Package" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
              <a href="#" className="text-blue-900 mt-4 block">Find out more...</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/all.jpg" alt="Silver Package" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Silver Package</h3>
              <a href="#" className="text-blue-900 mt-4 block">Find out more...</a>
            </div>
          </div>
        </div>
      </section>

{/* Carousel */}
<section className="container mx-auto py-12">
        <div className="relative">
          <div className="h-128 overflow-hidden rounded-lg">
            <img src={`/images/${currentSlide === 0 ? 'bride.jpg' : currentSlide === 1 ? 'all.jpg' : 'bg.jpg'}`} alt="Hotel" className="w-full h-full object-cover" />
          </div>

          {/* Carousel Navigation */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>



      {/* Room Types Section */}

      <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

    
    <div class="w-full h-64 lg:w-2/3 lg:h-auto">
        <img class="h-full w-full object-cover" src="/images/hotel-room.jpg" alt="our rooms"/>
    </div>
    <div
        class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        
        <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-blue-800 lg:text-4xl">our room & Suite choices</h2>
            <p class="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            
            <div class="mt-8">
                <a href="#"
                    class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-blue-900 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                    More</a>
            </div>
        </div>
        
    </div>
    

</div>
      <section className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">A Slice of Heaven</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Nestled in the vibrant city of Kandy, enjoy our luxurious and tranquil accommodations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/hotel-room.jpg" alt="Single Room" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Single Room</h3>
              <p className="text-gray-600">Comfort and convenience for solo travelers.</p>
              <a href="#" className="text-green-500 mt-4 block">Learn More</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/room1.jpeg" alt="Double Room" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Double Room</h3>
              <p className="text-gray-600">Ideal for couples.</p>
              <a href="#" className="text-green-500 mt-4 block">Learn More</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/room2.jpeg" alt="Suite" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Suite</h3>
              <p className="text-gray-600">The ultimate in luxury and space.</p>
              <a href="#" className="text-green-500 mt-4 block">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/*Menu */}
      <div class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
    <div data-theme="teal" class="mx-auto max-w-6xl">
      <h2 class="sr-only">Featured case study</h2>
      <section class="font-sans text-black">
        <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
          <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
          <div class="h-full">
            <article class="h-full">
              <div class="h-full">
                <img class="h-full object-cover" src="/images/OIP.jpg" width="733" height="412" alt='""' typeof="foaf:Image" />
              </div>
            </article>
          </div>
        </div>
        <div class="p-6 bg-grey">
          <div class="leading-relaxed">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cream-500 to-brown-200 mb-4 ">Menu</h1>
            <h2 class="leading-tight text-4xl font">Satisfy your cravings</h2>
            <p cclassName="text-base text-gray-500 leading-relaxed">Embark on a culinary journey and discover a world of delectable dishes from Sri Lanka and beyond. 
              Immerse yourself in the exquisite flavours and let your taste buds explode with every bite. 
              Head to our cosy restaurants and indulge in a wide range of freshly prepared dishes or beverages of your choice.</p>
            <p><a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Find out more</a></p>
          </div>
        </div>
      </div>

      <section className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font">Featued Foods</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/chiken.jpg" alt="Single Room" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">CHIKEN FLAVOURS</h3>
              <a href="#" class="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-800 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800">$2 P/PORTION</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/images/chiken.jpg" alt="Single Room" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">CHIKEN FLAVOURS</h3>
              <a href="#" class="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-800 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800">$2 P/PORTION</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="/images/chiken.jpg" alt="Single Room" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">CHIKEN FLAVOURS</h3>
              <a href="#" class="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-800 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800">$2 P/PORTION</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</div>

      

      {/* Places to Visit Section */}
      <section className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Places You Can Visit Near Our Hotel</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/kandy.jpg" alt="Kandy Lake" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Kandy Lake</h3>
              
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/kandy.jpg" alt="Temple of the Tooth" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Temple of the Tooth</h3>
              
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/kandy.jpg" alt="Botanical Garden" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Botanical Garden</h3>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    
  );
};

export default Home;
