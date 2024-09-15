import MainPost from "@/components/post/main-post";
import RelatedList from "@/components/post/related-list";
import React from "react";

const Post: React.FC< { params: { slug: string } }> = ({ params }) => {

    return (
        <div className="sm:mt-6 lg:mt-8 mt-12">
            <div className="max-w-3xl mx-auto my-10 md:my-16">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal dark:bg-gray-900">
                    <MainPost slug={params.slug} />
                    <RelatedList />
                </div>
            </div>
        </div>        
    );
}

export default Post;