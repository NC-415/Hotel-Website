import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

// Navigation links
const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Accommodation', href: '#', current: false },
    { name: 'Weddings', href: '#', current: false },
    { name: 'Events', href: '#', current: false },
    { name: 'Gallery', href: '#', current: false },
    { name: 'Offers', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll events to toggle background color
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Disclosure as="nav" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-pcolor' : 'bg-transparent'} text-white`}>
            <div className="relative flex items-center justify-between h-16">

                {/* Mobile menu button and logo container */}
                <div className="flex items-center justify-between w-full sm:w-auto">

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                        </Disclosure.Button>
                    </div>
                    {/* Logo */}
                    <div className="flex flex-grow justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 lg:static lg:transform-none">
                        <img
                            alt="Suneragira Hotel"
                            src="/images/Logo.jpg"
                            className="h-10 w-auto"
                        />
                    </div>
                </div>
                {/* Navigation links */}
                <div className="hidden lg:space-x-20 lg:flex md:space-x-5 lg:items-center">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'text-scolor' : 'text-gray-300 hover:text-scolor',
                                'text-lg font-medium'
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Book Now button */}
                <div className="sm:text-sm sm:flex lg:flex">
                    <button className="bg-scolor hover:text-pcolor text-white font-semibold py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base">
                        Book Now
                    </button>
                </div>

            </div>

            {/* Mobile menu panel */}
            <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 bg-pcolor">
                    {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'text-scolor' : 'text-gray-300 hover:text-scolor',
                                'block px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}

                </div>

            </Disclosure.Panel>
        </Disclosure>
    )
}

export default Header;