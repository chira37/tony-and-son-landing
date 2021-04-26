import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Head from "next/head";

export default function Commercial() {
    return (
        <div className="">
            <Head>
                <title>Commercial Plumbing</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Nav />
            <div className=" max-w-6xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-10">
                <div className="max-w-3xl mx-auto text-center pb-14 md:pb-16">
                    <h1 className="title-2">Commercial Plumbing</h1>
                </div>

                <div className="grid sm:grid-cols-12  gap-8">
                    <div className="sm:col-span-12 md:col-span-4 divide-y divide-gray-200 space-y-5">
                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">Commercial Water Heaters Replace/Service/Repair</h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Natural gas & LP</li>
                                <li className="text-gray-600 mb-1">Natural gas & LP</li>
                            </ul>
                        </div>

                        <div className="border p-5  hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">Sewer and Drain Cleaning</h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Color video camera and locator</li>
                                <li className="text-gray-600 mb-1">Color video camera and locator</li>
                                <li className="text-gray-600 mb-1">Drain maintenance agreements</li>
                            </ul>
                        </div>

                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">Commercial Faucet and Fixture Replacement/Repairs</h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Kitchens</li>
                                <li className="text-gray-600 mb-1">Lavatories</li>
                                <li className="text-gray-600 mb-1">Toilets</li>
                                <li className="text-gray-600 mb-1">Urinals</li>
                            </ul>
                        </div>

                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">Pumps</h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Loading docks</li>
                                <li className="text-gray-600 mb-1">Ejection</li>
                                <li className="text-gray-600 mb-1">Effluent</li>
                                <li className="text-gray-600 mb-1">Sumps</li>
                                <li className="text-gray-600 mb-1">Back-ups</li>
                                <li className="text-gray-600 mb-1">Alarms</li>
                                <li className="text-gray-600 mb-1">Grinder</li>
                                <li className="text-gray-600 mb-1">Floats</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sm:col-span-12 md:col-span-8 md:pl-5">
                        <p className="text-xl text-gray-600 text-justify mb-10">
                            It takes years of study and experience to become a skilled and accomplished master plumber
                            who is capable of handling heavy duty commercial work. It isn't easy. It takes time and
                            effort as well as a dedication to provide the kind of excellent commercial service that
                            leaves a smile on a customer’s face. Not everyone has this, but Tony & Son Plumbing Co does.
                            In fact, we are licensed, insured and bonded because we’re among the best in the business.
                            We have the right tools for the job and know how to get the job done right.
                            <br />
                            <br />
                            We serve many local schools, churches, universities as well as small and large corporations.
                            We also assist property managers with their residential and commercial property maintenance
                            needs.
                        </p>

                        <img src="/commercial-water-heaters.jpg" className="w-3/4 rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
