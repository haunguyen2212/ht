import React from "react";
import ImageIcon from "../icon/image";

const PostSkeleton: React.FC = () => {
    return (
        // <div className="sm:mt-6 lg:mt-8 mt-12">
        //     <div className="max-w-3xl mx-auto my-10 md:my-24">
        //         <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal dark:bg-gray-900">
                    <div className="mx-5 md:mx-0 animate-pulse">
                        <div className="h-10 mb-5 max-w-[90%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="flex items-center justify-center w-full h-56 md:h-[27.5rem] my-3 md:my-7 rounded-lg bg-gray-300 dark:bg-gray-700 shadow-none">
                            <ImageIcon classAdded="h-12 w-12 text-gray-200" />
                        </div>
                        <div className="h-6 max-w-[250px] my-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <hr/>
                        <div className="h-6 mx-3 mb-3 mt-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-6 mx-3 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-6 mx-3 mb-3 max-w-none md:max-w-[55%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-6 mx-3 mb-3 max-w-[55%] md:hidden rounded-full bg-gray-200 dark:bg-gray-700"></div>

                        <div className="mt-7 mb-5">
                            <div className="h-7 mb-7 max-w-[250px] md:max-w-[400px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 max-w-[80%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-7 my-7 max-w-[250px] md:max-w-[400px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 max-w-[66%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-7 my-7 max-w-[250px] md:max-w-[400px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-6 mb-3 max-w-[45%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            <div className="h-5 mb-3 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                    </div>

        //         </div>
        //     </div>
        // </div>
    );
}

export default PostSkeleton;