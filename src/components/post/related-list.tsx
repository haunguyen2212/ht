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
      <div className="col-span-12 md:col-span-4 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Thông tin khác</h3>
        <div className="space-y-4">
            {relatedPost?.map((post) => (
              <RelatedPost key={post.id} post={post} />
            ))}
          </div>
      </div>
    )
}

export default RelatedList;