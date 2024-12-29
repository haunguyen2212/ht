'use client';
import React from "react";
import Link from "next/link";
import FeaturedPost from "@/components/home/featured-post";
import { API_URL } from "@/utils/config";
import FeaturedSkeleton from "./featured-skeleton";
import ArrowRightIcon from "../icon/arrow-right";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

const FeaturedList: React.FC = () => {

    const {data: featuredPost} = useSWR(`${API_URL}/featured-post/`, fetcher)

    return (
        <section className="mt-2 md:mt-8 mt-12 w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-2 md:my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="flex justify-between font-bold dark:text-white">
                  <span className="text-indigo-600 dark:text-indigo-400">Bài viết nổi bật</span>
                  <Link href={'/'} className="flex items-center text-indigo-600 gap-1 inline-flex items-center dark:text-indigo-400">
                      <span>
                          Xem tất cả
                      </span>
                      <ArrowRightIcon classAdded="w-6 h-6 ml-2" />
                  </Link>
              </div>
              <ul className="lg:gap-16 sm:gap-8 grid grid-cols-12 col-span-10 col-start-2 gap-6 mt-4">
                {
                    !featuredPost 
                    ? 
                    <><FeaturedSkeleton /><FeaturedSkeleton /><FeaturedSkeleton /></> 
                    : 
                    featuredPost.data.map((item: any, index: string) => (
                        <FeaturedPost key={index} data={item} />
                    ))
                }
              </ul>
          </div>
        </section>
    );
}

export default FeaturedList;