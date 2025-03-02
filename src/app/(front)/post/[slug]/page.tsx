import MainPost from "@/components/post/main-post";
import RelatedList from "@/components/post/related-list";
import React from "react";

const Post: React.FC< { params: { slug: string } }> = ({ params }) => {

    return (
        <div className="sm:mt-6 lg:mt-8 mt-12">
            <div className="max-w-7xl mx-auto my-10 md:my-16">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal dark:bg-gray-900">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-12 gap-0 md:gap-8">
                            <MainPost slug={params.slug} />
                            <RelatedList />
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}

export default Post;