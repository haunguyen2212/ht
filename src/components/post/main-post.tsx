'use client';
import PostSkeleton from "@/components/post/post-skeleton";
import { API_URL } from "@/utils/config";
import { formatDateToString } from "@/utils/date-utils";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserIcon from "../icon/user";
import ClockIcon from "../icon/clock";

const MainPost: React.FC<IPropPost> = ({ slug }) => {

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getData = async () => {
        try{
            const res = await axios.get<IDetail<Post>>(`${API_URL}/post/${slug}`);  
            setPost(res.data.data);
            setLoading(false);
        }
        catch(error: any){
          console.log(error);  
        }
    }

    useEffect(() => { 
        getData();
    }, []);

    if(loading){
        return <PostSkeleton/>;
    }

    return (
        // <div className="sm:mt-6 lg:mt-8 mt-12">
        //     <div className="max-w-3xl mx-auto my-10 md:my-16">
        //         <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal dark:bg-gray-900">
                    <div className="mx-5 md:mx-0">
                        <h1 className="text-gray-900 font-bold text-3xl md:text-4xl dark:text-white">{post?.title}</h1>
                        <Image width={0} height={0} sizes="100vw" src={`/${post?.image}`} className="w-full h-56 md:h-[27.5rem] my-3 md:my-7 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="1646792144.jpg" priority />
                        <div className="pb-5 pt-1 text-sm font-regular text-gray-900 flex">
                            <a href="#" className="flex flex-row items-center hover:text-indigo-600  mr-3">
                                <UserIcon classAdded="text-indigo-600 dark:text-indigo-400" />
                                <span className="ml-2 text-gray-900 font-bold dark:text-white">{post?.author.username}</span>
                            </a>
                            <span className="mr-3 flex flex-row items-center">
                                <ClockIcon classAdded="text-indigo-600 dark:text-indigo-400" />
                                <span className="ml-2 text-gray-900 font-bold dark:text-white">{formatDateToString(post?.publish_date_from || '1970-01-01')}</span>
                            </span>
                        </div>
                        <hr/>
                        <blockquote className="text-md italic leading-8 my-1 p-3 text-indigo-600 font-semibold dark:text-indigo-400">
                            {post?.excerpt}
                        </blockquote>

                        <div className="my-5" id="post-content">
                            <div dangerouslySetInnerHTML={{ __html: post?.content || '' }}></div>
                            <div className="mt-5">
                                {
                                    post?.tags.map((tag, index) => (
                                        <span key={index}>
                                            <Link href="#" className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition duration-500 ease-in-out dark:text-indigo-400">
                                                #{tag.name}
                                            </Link>
                                            {index !== post.tags.length - 1 ? ', ' : '.'}
                                        </span>   
                                    )
                                )}
                            </div>
                        </div>       
                    </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default MainPost;