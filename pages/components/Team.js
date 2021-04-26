import React from "react";

export default function Team() {
    return (
        <div className="bg-gray-800 text-white">
            <div className="flex flex-col  max-w-screen-xl mx-auto py-16 md:py-20 px-5 md:px-10">
                <p className=" font-bold text-3xl text-center  md:text-4xl mb-16">Our Team</p>
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div className="mb-10 md:mb-0  px-0 md:px-5  mx-auto">
                        <img src="/team-1.jpg" alt="team" className="object-contain w-60 rounded mb-6 " />
                        <p className="font-semibold  text-center text-md ">Christopher Clark</p>
                        <p className="text-center text-sm ">Lead developer</p>
                    </div>

                    <div className="mb-10 md:mb-0  px-0 md:px-5  mx-auto">
                        <img src="/team-2.jpg" alt="team" className="object-contain w-60 rounded mb-6 " />
                        <p className="font-semibold  text-center text-md ">Christopher Clark</p>
                        <p className="text-center text-sm ">Lead developer</p>
                    </div>

                    <div className="px-0 md:px-5  mx-auto">
                        <img src="/team-3.jpg" alt="team" className="object-contain w-60 rounded mb-6 " />
                        <p className="font-semibold  text-center text-md ">Christopher Clark</p>
                        <p className="text-center text-sm ">Lead developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
