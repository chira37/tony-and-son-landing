import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Head from "next/head";

export default function Remodeling() {
    return (
        <div className="">
            <Head>
                <title>Kitchen and Bath Remodeling</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Nav />
            <div className=" max-w-6xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-10">
                <div className=" mx-auto text-center pb-14 md:pb-16">
                    <h1 className="title-2">Kitchen and Bath Remodeling</h1>
                </div>

                <div className="grid sm:grid-cols-12  gap-8">
                    <div className="sm:col-span-12 md:col-span-4 divide-y divide-gray-200 space-y-5  ">
                        <div className="border p-5 hover:bg-gray-100 hover:shadow-none transition duration-150 ease-in-out">
                            <ul className="list-disc list-inside">
                                <li className="text-gray-600 mb-1">Basement remodel</li>
                                <li className="text-gray-600 mb-1">Bathroom remodel</li>
                                <li className="text-gray-600 mb-1">Tub replacement</li>
                                <li className="text-gray-600 mb-1">Residential remodel</li>
                                <li className="text-gray-600 mb-1">Commercial remodel</li>
                                <li className="text-gray-600 mb-1">Kitchen remodel</li>
                                <li className="text-gray-600 mb-1">New homes</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sm:col-span-12 md:col-span-8 md:pl-5">
                        <p className="text-xl text-gray-600 text-justify mb-10 ">
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
