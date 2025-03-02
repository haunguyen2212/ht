'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateToString } from "@/utils/date-utils";

const RelatedPost: React.FC<IPropSinglePost> = ({post}) => {
    return (
        <div className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-6">
          <Image width={0} height={0} sizes="100vw" src={`/${post?.image}`}  className="w-full h-44 md:h-52 mb-4 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="1646792144.jpg" priority />
          <div className="font-display max-w-sm text-1xl font-bold leading-tight mb-1">
            <Link href={`/post/${post?.slug}`} className="link-underline link-underline-black text-black dark:text-white line-clamp-2">
                {post?.title}
            </Link>
            <p className="text-sm mt-3 text-gray-600 line-clamp-3">
                Ngày đăng: {formatDateToString(post?.publish_date_from || '1970-01-01')} - Lượt xem: 0
            </p>
          </div>
        </div>
    );
}

export default RelatedPost;