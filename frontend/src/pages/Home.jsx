import Header from "../components/Header";


const Home = () => {
    return (
        <div className="bg-gray-100">
            <Header />

            <section className="relative">
                <img src="/images/bg.jpg" alt="Hotel Exterior" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Your lavish home away from home</h2>
                        <p className="text-lg">Experience the best of comfort and luxury in the heart of the city.</p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">A Slice of Heaven!</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Nestled in the vibrant city of Kandy, Ranvali offers a luxurious and tranquil retreat. Enjoy our state-of-the-art accommodations, world-class amenities, and impeccable service. Whether you’re here for business or leisure, you’ll find everything you need for a perfect stay.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/images/room2.jpeg" alt="Single Room" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Single Room</h3>
                            <p className="text-gray-600">Perfect for solo travelers, our single rooms offer comfort and convenience.</p>
                            <a href="#" className="text-blue-500 mt-4 block">Learn More</a>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/images/room1.jpeg" alt="Double Room" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Double Room</h3>
                            <p className="text-gray-600">Ideal for couples, our double rooms provide a cozy and intimate setting.</p>
                            <a href="#" className="text-blue-500 mt-4 block">Learn More</a>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/images/room3.jpeg" alt="Twin Room" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Twin Room</h3>
                            <p className="text-gray-600">Perfect for friends or family, our twin rooms offer space and comfort.</p>
                            <a href="#" className="text-blue-500 mt-4 block">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Home;