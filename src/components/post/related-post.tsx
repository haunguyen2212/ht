import Image from "next/image";
import React from "react";

const RelatedPost: React.FC = () => {
    return (
        <div className="my-10 md:my-28">
            <div className="dark:bg-gray-800 w-full ml-10">
                <fieldset className="text-xl max-w-md border-2 border-indigo-400 rounded-lg px-4 py-2">
                    <legend className="px-1 font-semibold dark:text-gray-100">Related Topics</legend>
                    <div className="flex flex-col gap-2 text-base text-violet-800 dark:text-gray-200">
                        <a href="#">Administrative Law</a>
                        <a href="#">Company Law</a>
                        <a href="#">Judicial Process</a>
                        <a href="#">Legal Education and RM 2</a>
                        <a href="#">Civil Procedure Code (CPC)</a>
                        <a href="#">Human Rights and International Law</a>
                        <a href="#">Compative Criminal Procdeute (CCP)</a>
                        <a href="#">Land Laws</a>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default RelatedPost;