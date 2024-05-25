import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateToString } from "@/utils/date-utils";

const FeaturedPost: React.FC<IPropFeaturedPost> = ({data}) => {
    return (
        <li className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4">
            <Image width={0} height={0} sizes="100vw" src="/featured1.jpg" className="w-full h-60 mb-4 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="1646792144.jpg" priority />
            <div className="flex items-center mb-3">
                <Link href={'/'} className="inline-flex items-center bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs font-medium px-2.5 py-[3px] rounded-md dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-indigo-400 me-2">
                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                    </svg>
                    {data?.categories.name}
                </Link>
                <p className="font-mono text-xs font-normal opacity-75 text-black dark:text-white">
                    { formatDateToString(data?.publish_date_from) }
                </p>
            </div>
            <p className="font-display max-w-sm text-2xl font-bold leading-tight mb-1">
                <Link href={`/post/${data?.slug}`} className="link-underline link-underline-black text-black dark:text-white">
                    {data?.title}
                </Link>
            </p>
            <p className="text-gray-600 three-lines mb-3 dark:text-white">
                {data?.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
                {
                    data?.tags.map(tag => (
                        <Link key={tag.id} href={'/'} className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs font-medium px-2.5 py-[3px] rounded-md dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-indigo-400">{tag.name}</Link>
                    ))
                }
            </div>
        </li>
    );
}

export default FeaturedPost;