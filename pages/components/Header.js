import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Header() {
    const handleArrowButton = (event) => {
        var element = document.getElementById("services");
        var headerOffset = 40;
        var elementPosition = element.offsetTop;
        var offsetPosition = elementPosition - headerOffset;

        if (window != undefined) {
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="header" className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <Zoom>
                    <div className="pt-32 pb-10 md:pt-48 md:pb-20">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-8">
                                Tony & Son <br />
                                <span className="bg-clip-text  text-blue-500">Plumbing Co</span>
                            </h1>
                            <div className="max-w-3xl mx-auto mb-16">
                                <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">
                                    Are you tired of the bathtub faucets constantly dripping, slowly bleeding your
                                    wallet with an unkind water bill?
                                </p>
                            </div>
                           

                            <button onClick={handleArrowButton} className="w-15 h-15 focus:outline-none animate-bounce">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-14 w-14 text-gray-500 hover:text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Zoom>
            </div>
        </section>
    );
}
