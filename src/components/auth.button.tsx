import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthButton: React.FC<IPropUserButton> = (props) => {

    const handleToggle = () => {
        document.getElementById('dropdownAvatarName')?.classList.toggle('hidden');
    }
    
    if(!props.user){
        return (
            <Link href={'/login'} className="py-3 px-5 rounded-xl flex items-center gap-2 text-base font-semibold text-indigo-700 shadow-sm shadow-transparent bg-indigo-100 hover:bg-indigo-200 focus-within:outline-0 focus-within:bg-indigo-200 dark:text-white dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus-within:bg-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 496 512" fill="none">
                <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"
                    fill="currentColor" />
                </svg>
                <span className="hidden md:inline">Đăng nhập</span>
            </Link>
        );
    }

    return (
        <div className="relative">
            <button onClick={handleToggle} data-dropdown-toggle="dropdownAvatarName" className="w-36 flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
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