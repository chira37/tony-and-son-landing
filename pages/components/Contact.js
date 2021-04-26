import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Contact() {
    return (
        <section id="contact" className="">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 flex flex-col items-center">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
                        <h2 className="title-1">Contact Us</h2>
                    </div>

                    <Zoom>
                        <div className="text-xl text-gray-600 font-medium text-center mb-10">
                            <p>5308 Cortland Reserve Drive</p>
                            <p>North Royalton, OH 44133</p>
                            <p className="font-semibold mt-5">Phone: 440-582-1111</p>
                        </div>

                        <div>
                            <button className="btn">Submit Form</button>
                        </div>
                    </Zoom>
                </div>
            </div>
        </section>
    );
}
