'use client';

import {useRef, useEffect} from 'react';
import { useScrollDirection } from "@/utils/useScrollDirection";
import ProfileAtom from '@/components/atoms/navbar/ProfileAtom';
import LinksAtom from '@/components/atoms/navbar/LinksAtom';

import SearchAtom from '@/components/atoms/navbar/SearchAtom';

export default function NavbarMolecule({type = "default"}) {

    const appName = process.env.NEXT_PUBLIC_APP_NAME;
    const ref = useRef(null);
    const scrollDirection = useScrollDirection();
    const isLogged = true;

    useEffect(() => {
        const element = ref.current;

        if (type != "dashboard") {

            if (scrollDirection === "up") {
                element.classList.remove("nav-hidden");
            } else {
                element.classList.add("nav-hidden");
            }  
        }
    });

    return (
        <nav ref={ref} id="nav" className={(type == "dashboard") ? "bg-white dark:bg-gray-900 fixed top-0 w-full z-50" : "bg-white border-b border-b-gray-100 dark:bg-gray-900 fixed top-0 w-full z-50"}>
            <div className={(type == "dashboard") ? "max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4" : "max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4"}>

                <a href="https://flowbite.com/" className={(type == "dashboard") ? "max-w-[18rem] nav-brand flex items-center md:w-[-webkit-fill-available]" : "nav-brand flex items-center"}>
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        {appName}
                    </span>
                </a>

                <div className={(type == "dashboard") ? "flex md:order-1 md:justify-between justify-end md:w-full items-center md:mx-auto" : "flex md:order-1 items-center justify-between"}>
                    
                    {/* <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button> */}

                    <div className="relative hidden md:block">
                        <SearchAtom />
                    </div>

                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false" >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {(isLogged == true ? <ProfileAtom /> : "")}

                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-search">

                    {(type == "default") ? <LinksAtom /> : "" }

                    <div className="relative mt-3 md:hidden">
                        <SearchAtom />
                    </div>

                </div>
            </div>
        </nav>

    )
}


