import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Guarantee() {
    return (
        <section id="services" className="">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 flex flex-col ">
                    <div className="max-w-3xl mx-auto text-center ">
                        <h1 className="title-1 mb-6">Guarantee/Warranty</h1>
                        <Zoom>
                            <p className="text-xl text-gray-600">
                                As a successful, family-owned business with a record of more than 40 years in the
                                plumbing business, we want to make sure that you are confident in our level of service.
                                That’s why we’re proud to inform you that we are licensed, bonded and insured. With a
                                solid, professional background and the protection necessary to keep your plumbing
                                project safe, Tony & Son Plumbing Co is the best choice for your plumbing needs.
                            </p>
                        </Zoom>
                    </div>
                </div>
            </div>
        </section>
    );
}
