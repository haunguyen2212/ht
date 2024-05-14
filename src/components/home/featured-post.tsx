import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateToString } from "@/utils/date-utils";

const FeaturedPost: React.FC<IPropFeaturedPost> = ({data}) => {
    return (
        <li className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4">
            <Image width={0} height={0} sizes="100vw" src="/featured1.jpg" className="w-full h-60 mb-4 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="laravel9-1646792144.jpg" priority />
            <div className="flex items-center mb-3">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500" >
                    Hot
                </span>
                <p className="font-mono text-xs font-normal opacity-75 text-black dark:text-white">
                    { formatDateToString(data?.publish_date_from) }
                </p>
            </div>
            <p className="font-display max-w-sm text-2xl font-bold leading-tight mb-1">
                <span className="link-underline link-underline-black text-black dark:text-white">
                    {data?.title}
                </span>
            </p>
            <p className="text-gray-600 three-lines mb-3 dark:text-white">
                {data?.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
                {
                    data?.tags.map(tag => (
                        <Link key={tag.id} href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">{tag.name}</Link>
                    ))
                }
            </div>
        </li>
    );
}

export default FeaturedPost;