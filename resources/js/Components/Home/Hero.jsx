import IonIcon from '@reacticons/ionicons';
import React from 'react';

const svgImages = import.meta.glob('/public/assets/images/*.svg', { eager: true });
const pngImages = import.meta.glob('/public/assets/images/*.png', { eager: true });
const jpgImages = import.meta.glob('/public/assets/images/*.jpg', { eager: true });

const images = { ...svgImages, ...pngImages, ...jpgImages };

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const pattern = getImageByName('home_img');

function Hero() {
    return (
        <div>
            <section className="">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white motion motion-preset-shrink">
                            Selamat Datang <br /> Website Rayyan Digital.
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 motion motion-preset-shrink motion-delay-[200ms]">
                            website ini merupakan sebuah website perusahaan yang bertujuan untuk memperkenalkan produk kami serta tentang perusahaan kami.
                        </p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <a
                                href="https://github.com/arrayyan123"
                                target="_blank"
                                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center hover:text-gray-900 text-gray-200 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                <span className='flex flex-row space-x-3 items-center'>
                                    <IonIcon name='logo-github' />
                                    <p>View GitHub</p>
                                </span>
                            </a>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Mulai Sekarang
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src={pattern}
                            alt="Hero"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
