import React, { useState, useEffect } from 'react'
import IonIcon from '@reacticons/ionicons';

//untuk mengambil gambarnya dan dapat mencegah gambar tidak dapat di ambil dari folder nya.
const images = import.meta.glob('/public/assets/Images/*.png', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.png`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const logo = getImageByName('logo_dummy');

//layout untuk websitenya.
function WebsiteLayout({children}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState('bg-transparent');
    const [navbarText, setNavbarText] = useState('text-white');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResizeAndScroll = () => {
            if (window.innerWidth < 1024) {
                setNavbarBackground('bg-white');
                setNavbarText('text-white');
            } else {
                if (window.scrollY > 50) {
                    setNavbarBackground('bg-white');
                    setNavbarText('text-black');
                } else {
                    setNavbarBackground('bg-transparent');
                    setNavbarText('text-white');
                }
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBackground('bg-white');
                setNavbarText('text-black');
            } else {
                setNavbarBackground('bg-transparent');
                setNavbarText('text-black');
            }
        };

        window.addEventListener('resize', handleResizeAndScroll);
        window.addEventListener('scroll', handleResizeAndScroll);

        handleResizeAndScroll();

        return () => {
            window.removeEventListener('resize', handleResizeAndScroll);
            window.removeEventListener('scroll', handleResizeAndScroll);
        };
    }, []);
    return (
        <>
            <div className='bg-[#292929] text-white'>
                {/* Navbar */}
                <nav className={`relative lg:flex-row overflow-x-hidden flex-col px-7  max-w-full py-6 z-30 w-screen flex justify-between items-center ${navbarBackground} transition-colors duration-300`}>
                    <div className="flex flex-row items-center lg:justify-normal justify-between lg:w-40 w-full">
                        <a className="" href="/">
                            <img src={logo} className="md:w-28 w-24 h-auto" alt="Logo" />
                        </a>
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className={`navbar-burger flex items-center ${navbarText} p-3`}>
                                <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex lg:flex-row flex-col lg:justify-between md:mt-0 mt-8 space-x-10">
                        <ul className={`${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            } lg:opacity-100 lg:max-h-full flex lg:mx-auto lg:flex-row flex-col items-center lg:w-auto lg:space-x-6 space-x-2 overflow-hidden transition-all duration-300 ease-in-out`}>
                            <div className='flex flex-row gap-3'>
                                <li><a className={`text-sm ${navbarText} hover:text-gray-500 whitespace-nowrap flex-shrink-0`} href={`/`}>Home</a></li>
                                <li className="text-gray-300 md:block hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </li>
                                <li><a className={`text-sm ${navbarText} hover:text-gray-500 whitespace-nowrap flex-shrink-0`} href={`/product`}>Products</a></li>
                                <li className="text-gray-300 md:block hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </li>
                                <li><a className={`text-sm ${navbarText} hover:text-gray-500 whitespace-nowrap flex-shrink-0`} href={`/aboutus`}>About Us</a></li>
                                <li className="text-gray-300 md:block hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </li>
                                <li><a className={`text-sm ${navbarText} hover:text-gray-500 whitespace-nowrap flex-shrink-0`} href={`/blog`}>Blog</a></li>
                                <li className="text-gray-300 md:block hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </li>
                                <li><a className={`text-sm ${navbarText} hover:text-gray-500 whitespace-nowrap flex-shrink-0`} href={`/contact`}>Contact us</a></li>
                            </div>
                        </ul>
                    </div>
                </nav>

                {/* content page */}
                <div className='md:px-6 px-3 bg-[#292929]'>
                    {children}
                </div>

                {/* footer */}
                <footer class="bg-[#292929]">
                    <div className="w-full p-5">
                        <span className="flex flex-row items-center gap-3">
                            <IonIcon className="text-2xl" name="mail" />
                            <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
                        </span>
                        <p className="mb-4">
                            Tetap Up to date dengan perkembangan mengenai perusahaan kami.
                        </p>
                        <form onSubmit={'/'}>
                            <div className="flex md:flex-row flex-col items-center gap-4 max-w-2xl">
                                <div className=" w-full">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                        required
                                    />
                                </div>
                                <div className=" w-full">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="px-4 py-2 mt-6 text-white rounded-md bg-blue-600"
                                >
                                    <span className="flex flex-row gap-4 items-center">
                                        <p>Subscribe</p>
                                        <IonIcon name="send" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='flex md:flex-row flex-col items-center justify-between'>
                        <div class="max-w-5xl mt- flex md:flex-row flex-col md:space-x-7 px-4 py-2 sm:px-6 lg:px-9">
                            <div class="flex text-teal-600 dark:text-teal-300">
                                <img className='w-[150px] h-auto' src={logo} alt="logo maung" />
                            </div>
                            <div className='flex flex-col w-1/2'>
                                <h1 className="mt-6 text-white text-[20px] max-w-md black leading-relaxed font-bold">
                                    RayyanTech
                                </h1>
                                <p className='text-white'>
                                    Inovasi Tanpa Batas, Masa Depan di Tangan Anda.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col mt-6 gap-6 items-center px-4 py-10 sm:px-6 lg:px-9'>
                            <h1>Find More About Us</h1>
                            <ul class=" flex justify-center gap-6 md:gap-8">
                                <li>
                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-200 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    >
                                        <span class="sr-only">Facebook</span>
                                        <IonIcon className='text-[30px]' name='logo-facebook' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-200 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    >
                                        <span class="sr-only">Instagram</span>
                                        <IonIcon className='text-[30px]' name='logo-instagram' />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-200 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    >
                                        <span class="sr-only">Twitter</span>
                                        <IonIcon className='text-[30px]' name='logo-twitter' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex md:flex-row items-center justify-center p-4 gap-2 flex-col my-2'>
                        <div className='border-b-2 border-gray-400'></div>
                        <h2 className='font-bold'>Made with ♡ by Muhammad Arrayyan Aprilyanto</h2>
                        <h2>© copyright 2025 Rayyan Digital. all rights reserved</h2>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default WebsiteLayout