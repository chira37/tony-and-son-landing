import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Pricing() {
    return (
        <div className="bg-gray-700 text-white">
            <Zoom>
                <div className="flex flex-col items-center  max-w-screen-lg mx-auto py-16 md:py-20 px-5 md:px-10">
                    <p className=" font-bold text-3xl text-center  md:text-4xl mb-10">Pricing</p>
                    <p className="text-center text-xs md:text-base max-w-xl mx-auto mb-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters,
                    </p>

                    <p className=" font-semibold text-2xl text-center  md:text-3xl mb-6">199$/mo</p>
                    <button className="w-max py-2 px-8 rounded-full font-bold bg-green-400 text-gray-800">
                        Sign Up
                    </button>
                </div>
            </Zoom>
        </div>
    );
}
