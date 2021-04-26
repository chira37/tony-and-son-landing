import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Zoom from "react-reveal/Zoom";
import Head from "next/head";

export default function Residential() {
    return (
        <div className="">
            <Head>
                <title>Residential Plumbing</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Nav />
            <div className=" max-w-6xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-10">
                <div className="max-w-3xl mx-auto text-center pb-14 md:pb-16">
                    <h1 className="title-2">Residential Plumbing</h1>
                </div>

                <div className="grid sm:grid-cols-12  gap-8">
                    <div className="sm:col-span-12 md:col-span-4 divide-y divide-gray-200 space-y-5  ">
                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">Preventative Maintenance Sewer and Drain Cleaning</h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Color video camera and location equipment</li>
                                <li className="text-gray-600">Jetting</li>
                            </ul>
                        </div>

                        <div className="border p-5  hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2 overflow-ellipsis overflow-hidden ...">
                                Water Heater Replacement/Service/Repair
                            </h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Natural and LP gas</li>
                                <li className="text-gray-600">Electric</li>
                                <li className="text-gray-600">Tankless (Rinnai)</li>
                                <li className="text-gray-600">Powervent Heater</li>
                            </ul>
                        </div>

                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">Sump Pump and Sewage Pump</h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600">1/4 hp, 1/2 hp, 1 hp</li>
                                <li className="text-gray-600">Septic and sewage pump specialist</li>
                                <li className="text-gray-600">Battery back-ups</li>
                                <li className="text-gray-600">Alarms</li>
                                <li className="text-gray-600">Floats</li>
                            </ul>
                        </div>

                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">
                                Faucet Repair and Replacement (All Brands) Toilet and Urinal Replacement Water Pipe
                                Repair and Replacement
                            </h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Frozen water line</li>
                                <li className="text-gray-600 mb-1">Winterization and de-winterization</li>
                                <li className="text-gray-600 mb-1">Major and minor repairs</li>
                            </ul>
                        </div>

                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">Sewer Drain Repairs and Replacement</h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Cast iron pipe repair or replacement</li>
                            </ul>
                        </div>

                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">Gas Line Install and Repairs</h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Gas fireplace hook-up</li>
                                <li className="text-gray-600 mb-1">Gas logs hook-up</li>
                                <li className="text-gray-600 mb-1">Gas grill hook-up</li>
                                <li className="text-gray-600 mb-1">Gas pool heater hook-up</li>
                                <li className="text-gray-600 mb-1">Gas generator hook-up</li>
                                <li className="text-gray-600 mb-1">Gas stove hook-up</li>
                            </ul>
                        </div>

                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <h6 className="font-bold mb-2">Kitchen Sink Repair and Replacement</h6>
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Garbage disposers (insinkerator)</li>
                                <li className="text-gray-600 mb-1">Dishwasher hook-ups</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sm:col-span-12 md:col-span-8 md:pl-5">
                        <p className="text-xl text-gray-600 text-justify mb-10">
                            At Tony & Son Plumbing Co, we feel that service begins with a commitment to quality. For
                            more than 40 years, we’ve made customer satisfaction an essential part of our success. From
                            simple cleaning work to remodels and repairs, we do it all with the attention to detail and
                            deep understanding that allows us to do a great job at a reasonable price.
                        </p>

                        <img src="/residential-plumbing-1.jpg" className="w-3/4 rounded-lg mb-10 shadow-lg " />
                        <img src="/residential-plumbing-2.jpg" className="w-3/4 rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
