'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CircleUserIcon from "./icon/circle-user";

const AuthButton: React.FC<IPropUserButton> = (props) => {

    const [loading, setLoading] = useState(true);

    const handleToggle = () => {
        document.getElementById('dropdownAvatarName')?.classList.toggle('hidden');
    }

    useEffect(() => {
        setLoading(false);
    }, []);

    if(loading){
        return (
            <div className="w-8 md:w-36 h-[32px] bg-gray-100 dark:bg-gray-700 ring-4 ring-gray-100 dark:ring-gray-700 rounded-full"></div>
        );
    }
    
    if(!props.user){
        return (
            <Link href={'/login'} className="py-3 px-5 rounded-xl flex items-center gap-2 text-base font-semibold text-indigo-700 shadow-sm shadow-transparent bg-indigo-100 hover:bg-indigo-200 focus-within:outline-0 focus-within:bg-indigo-200 dark:text-white dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus-within:bg-indigo-700">
                <CircleUserIcon />
                <span className="hidden md:inline">Đăng nhập</span>
            </Link>
        );
    }

    return (
        <div className="relative">
            <button onClick={handleToggle} data-dropdown-toggle="dropdownAvatarName" className="w-8 md:w-36 flex items-center text-sm pe-0 md:pe-1 font-medium text-gray-900 rounded-full dark:hover:text-blue-500 md:me-0 ring-gray-100 dark:ring-gray-700 ring-4 bg-gray-100 dark:bg-gray-700 dark:text-white" type="button">
                <span className="sr-only">Open user menu</span>
                <Image width={100} height={100} className="w-8 h-8 me-2 rounded-full" src="/profile-picture-3.jpg" alt="user photo" />
                <span className="hidden md:inline-block px-1">{props.user?.username}</span>
            </button>
            <div id="dropdownAvatarName" className="hidden absolute top-10 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium ">Pro User</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul>
                <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </div>
    )
}

export default AuthButton