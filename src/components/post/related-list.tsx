'use client';
import { API_URL } from "@/utils/config";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RelatedPost from "./related-post";

const RelatedList: React.FC = () => {

  const [relatedPost, setRelatedPost] = useState<Array<Post>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
      try{
        const res = await axios.get<IList<Post>>(`${API_URL}/related-post/1`);
        setRelatedPost(res.data.data);
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
      <div className="mt-2 w-full mx-auto">
        <div className="mx-auto max-w-7xl">
            <div className="flex justify-between font-bold dark:text-white">
                <span className="text-indigo-600 dark:text-indigo-400">Bài viết liên quan</span>
            </div>
            <ul className="lg:gap-16 sm:gap-8 grid grid-cols-12 col-span-10 col-start-2 gap-6 mt-4">
              {
                relatedPost?.map(item => (
                  <RelatedPost key={item.id} data={item} />
                ))
              }
            </ul>
        </div>
      </div>
    )
}

export default RelatedList;