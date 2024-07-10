import React from "react";
import ImageIcon from "../icon/image";

const FeaturedSkeleton: React.FC = () => {
    return (
        <div className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="max-w-sm pe-0 animate-pulse">
                <div className="flex items-center justify-center h-60 w-full bg-gray-300 dark:bg-gray-700 mb-4 rounded-lg shadow-none">
                    <ImageIcon classAdded="h-12 w-12 text-gray-200" />
                </div>
                <div className="h-7 w-48 mb-3 mt-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-7 rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-5 rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-5 rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-5 max-w-[300px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-5 max-w-[200px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>
        </div>
    );
}

export default FeaturedSkeleton;