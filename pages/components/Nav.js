import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Nav() {
    const router = useRouter();

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const [top, setTop] = useState(true);

    const handleScroll = (position) => {
        if (router.pathname != "/") {
            router.push("/");
            return;
        }

        var element = document.getElementById(position);
        var headerOffset = 40;
        var elementPosition = element.offsetTop;
        var offsetPosition = elementPosition - headerOffset;

        if (window != undefined && element != undefined) {
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    return (
        <header
            className={`fixed w-full z-30  transition duration-150 ease-in-out ${!top && "bg-white blur shadow-md"}`}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-5">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex-shrink-0 mr-4">
                        <Link href="/">
                            <img src="/logo.png" className="h-10 cursor-pointer" />
                        </Link>
                    </div>

                    <nav className="flex flex-grow ">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <li>
                                <a
                                    onClick={() => handleScroll("header")}
                                    className="font-medium focus:outline-none text-gray hover:text-blue-600 transition cursor-pointer ;"
                                >
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <button onClick={() => handleScroll("contact")} className="btn ml-8">
                                    <span>Contact Us</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
