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
        <div className="col-span-12 md:col-span-8 p-6 rounded-lg">
            <div className="text-center mb-8">
                <h1 className="text-gray-900 font-bold md:text-4xl text-3xl dark:text-white">{post?.title}</h1>
                <p className="text-gray-600 mt-2">Ngày đăng: {formatDateToString(post?.publish_date_from || '1970-01-01')} - Tác giả: {post?.author.username}</p>
                <Image width={0} 
                    height={0} 
                    sizes="100vw" 
                    src={`/${post?.image}`} 
                    className="w-full h-56 md:h-[28.5rem] my-3 md:my-7 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" 
                    alt="1646792144.jpg" 
                    priority 
                />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Giới thiệu</h2>
            <p className="text-gray-700 dark:text-white leading-relaxed">
                {post?.excerpt}
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">Nội dung chi tiết</h2>
            <p className="text-gray-700 dark:text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: post?.content || '' }}></p>
            <div className="mt-5">
                {
                    post?.tags.map((tag, index) => (
                        <span key={index}>
                            <Link href="#" className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition duration-500 ease-in-out dark:text-indigo-400">
                                #{tag.name}
                            </Link>
                            {index !== post.tags.length - 1 ? ', ' : ''}
                        </span>   
                    )
                )}
            </div>
        </div>
    );
}

export default MainPost;