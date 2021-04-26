import React from "react";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";

export default function Services() {
    return (
        <section id="services" className="">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 flex flex-col ">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="title-1 mb-4">Explore the services</h1>
                        <p className="text-xl text-gray-600">
                            As a successful, family-owned business with a record of more than 40 years in the plumbing
                            business, we want to make sure that you are confident in our level of service.
                        </p>
                    </div>

                    <div className="grid grid-col-1 md:grid-cols-3 gap-8 ">
                        {/* Service 1 */}

                        <Zoom>
                            <div
                                className="flex flex-col justify-between text-black hover:bg-gray-100 text-lg p-8 rounded border shadow-md hover:shadow-none 
                                        border-gray-200 transition duration-150 ease-in-out"
                            >
                                <div>
                                    <div className="font-bold leading-snug tracking-tight mb-5">
                                        Commercial Plumbing
                                    </div>
                                    <p className="text-gray-600 mb-5">
                                        We serve many local schools, churches, universities as well as small and large
                                        corporations.
                                    </p>
                                </div>

                                <Link href="/commercial">
                                    <a className="text-blue-500 hover:text-blue-700 font-bold">Read more</a>
                                </Link>
                            </div>
                        </Zoom>

                        {/* Service 2*/}

                        <Zoom>
                            <div
                                className="flex flex-col justify-between text-black hover:bg-gray-100 text-lg p-8 rounded border shadow-md hover:shadow-none 
                                        border-gray-200 transition duration-150 ease-in-out"
                            >
                                <div>
                                    <div className="font-bold leading-snug tracking-tight mb-5">
                                        Residential Plumbing
                                    </div>
                                    <p className="text-gray-600 mb-5">
                                        we feel that service begins with a commitment to quality. For more than 40
                                        years, we’ve made customer satisfaction an essential part of our success.
                                    </p>

                                    <Link href="/residential">
                                        <a className="text-blue-500 hover:text-blue-700 font-bold">Read more</a>
                                    </Link>
                                </div>
                            </div>
                        </Zoom>

                        {/* Service 3*/}

                        <Zoom>
                            <div
                                className="flex flex-col justify-between text-black hover:bg-gray-100 text-lg p-8 rounded border shadow-md hover:shadow-none 
                                        border-gray-200 transition duration-150 ease-in-out"
                            >
                                <div>
                                    <div className="font-bold leading-snug tracking-tight mb-5">
                                        Kitchen and Bath Remodeling
                                    </div>
                                    <p className="text-gray-600 mb-5">
                                        Local families and businesses have trusted Tony & Son Plumbing Co. for more than
                                        40 years! Let us meet with you to discuss your remodeling needs.
                                    </p>

                                    <Link href="/remodeling">
                                        <a className="text-blue-500 hover:text-blue-700 font-bold">Read more</a>
                                    </Link>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </section>
    );
}
