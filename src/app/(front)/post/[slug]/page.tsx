import MainPost from "@/components/post/main-post";
import React from "react";

const Post: React.FC< { params: { slug: string } }> = ({ params }) => {

    return (
        <MainPost slug={params.slug}></MainPost>
    );
}

export default Post;