'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

const RelatedPost: React.FC<IPropSinglePost> = ({data}) => {
    return (
        <li className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-6">
            <Image width={0} height={0} sizes="100vw" src={`/${data?.image}`} className="w-full h-44 md:h-60 mb-4 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="1646792144.jpg" priority />
            <p className="font-display max-w-sm text-2xl font-bold leading-tight mb-1">
                <Link href={`/post/${data?.slug}`} className="link-underline link-underline-black text-black dark:text-white">
                    {data?.title}
                </Link>
            </p>
        </li>
    );
}

export default RelatedPost;