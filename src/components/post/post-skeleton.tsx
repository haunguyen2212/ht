import React from "react";

const PostSkeleton: React.FC = () => {
    return (
        <div className="sm:mt-6 lg:mt-8 mt-12">
            <div className="max-w-3xl mx-auto my-10 md:my-24">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal dark:bg-gray-900">
                    <div className="mx-5 md:mx-0 animate-pulse">
                        <div className="h-10 mb-5 max-w-[90%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="flex items-center justify-center w-full h-56 md:h-[27.5rem] my-3 md:my-7 rounded-lg bg-gray-300 dark:bg-gray-700 shadow-none">
                            <svg className="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" aria-hidden="true"
                            fill="currentColor" aria-label="Loading Icon">
                            <path
                                d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                            </svg>
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

                </div>
            </div>
        </div>
    );
}

export default PostSkeleton;