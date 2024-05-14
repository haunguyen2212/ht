'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import FeaturedPost from "@/components/home/featured-post";
import axios from "axios";
import { API_URL } from "@/utils/config";
import FeaturedSkeleton from "./featured-skeleton";

const FeaturedList: React.FC = () => {

    const [featuredPost, setFeaturedPost] = useState<Array<FeaturedPost>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getData = async () => {
        try{
          const res = await axios.get<IList<FeaturedPost>>(`${API_URL}/featured-post/`);
          setFeaturedPost(res.data.data);
          setLoading(false);
        }
        catch(error: any){
          console.log(error);  
        }
    }

    useEffect(() => { 
        getData();
    }, []);

    return (
        <section className="sm:mt-6 lg:mt-8 mt-12 w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="flex justify-between font-bold dark:text-white">
                  <span className="text-indigo-600 dark:text-indigo-400">Bài viết nổi bật</span>
                  <Link href={'/'} className="flex items-center text-indigo-600 gap-1 inline-flex items-center dark:text-indigo-400">
                      <span>
                          Xem tất cả
                      </span>
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                  </Link>
              </div>
              <ul className="lg:gap-16 sm:gap-8 grid grid-cols-12 col-span-10 col-start-2 gap-6 mt-4">
                {
                    loading 
                    ? 
                    <><FeaturedSkeleton /><FeaturedSkeleton /><FeaturedSkeleton /></> 
                    : 
                    featuredPost?.map(item => (
                        <FeaturedPost key={item.id} data={item} />
                    ))
                }
              </ul>
          </div>
        </section>
    );
}

export default FeaturedList;