import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.scss';
import 'swiper/css/pagination';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'framer-motion-carousel'
import { homeScreenStats, offerImages, slideImages } from '../../test';
import { NavLink } from 'react-router-dom';

function Home() {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])

    return (
        <div className='home-screen'>
            <Carousel interval={30000} className="carousel_wrapper">
                {slideImages?.map((ele, i) => (
                    <div key={i} className="carousel-container">
                        <div className='cards'>
                            <img alt="coffee-img" className="carousel-img" src={ele?.path} />
                        </div>
                    </div>
                ))}
            </Carousel>
            <div style={{ fontSize: "40px", fontWeight: "600", letterSpacing: '3px', margin: '80px 0px 0px 40px' }}>MEDAL WORTHY BRANDS TO BAG</div>
            <div className='offers-main-div'>
                {offerImages.map((ele, index) => {
                    return (
                        <NavLink to="/products" className='each-card' key={index}>
                            <div className='image-wrapper'><img src={ele.path} /></div>
                            <div className='offer-tag'>
                                <div className='off'>10%</div>
                                <div>{ele.value}</div>
                            </div>
                        </NavLink>
                    )
                })}
            </div>

            <div style={{ fontSize: "40px", fontWeight: "600", letterSpacing: '3px', margin: '80px 0px 0px 40px' }}>MEDAL WORTHY BRANDS TO BAG</div>

            <div className='offers-main-div2'>
                {offerImages.map((ele,index) => {
                    return (
                        <NavLink to="/products" className='each-card' key={index}>
                            <div className='image-wrapper'><img src={ele.path} /></div>
                            <div className='offer-tag'>
                                <div className='off'>10</div>
                                <div>{ele.value}</div>
                            </div>
                        </NavLink>
                    )
                })}
            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {homeScreenStats.map((stat,index) => (
                            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <div className="bg-white py-24 sm:py-32" style={{ paddingTop: '0px' }}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                        Trusted by the world’s most innovative teams
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </div>


            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                                dolore.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">No spam</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Home