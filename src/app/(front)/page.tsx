'use client';
import Banner from "@/components/banner";
import FeaturedPost from "@/components/featured-post";
import { API_URL } from "@/utils/config";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [featuredPost, setFeaturedPost] = useState<Array<FeaturedPost>>([]);

  const getData = async () => {
    try{
      const res = await axios.get<IHome>(`${API_URL}/home/`);
      setFeaturedPost(res.data.data.featured_posts);
    }
    catch(error: any){
      console.log(error);  
    }
  }
  
  useEffect(() => { 
    getData();
  }, []);

  return (
    <>
        <Banner />
        <div className="max-w-7xl mx-auto my-8 px-2 xl:mt-20">
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
                    featuredPost.map(item => (
                        <FeaturedPost key={item.id} data={item} />
                    ))
                }
            </ul>
        </div>
    </>
  );
}
