import Image from "next/image";
import Link from "next/link";

const PostFeatured: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto my-8 px-2 xl:mt-20">
            <div className="flex justify-between font-bold dark:text-white">
                <span className="text-indigo-600 dark:text-indigo-400">Bài viết nổi bật</span>
                <Link href={'/'} className="flex items-center text-indigo-600 gap-1 inline-flex items-center dark:text-indigo-400">
                    <span>
                        Xem tất cả
                    </span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </Link>
            </div>
            <ul className="lg:gap-16 sm:gap-8 grid grid-cols-12 col-span-10 col-start-2 gap-6 mt-4">
                <li className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4">
                    <Image width={100} height={100} src="/featured1.jpg" className="w-full mb-4 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="laravel9-1646792144.jpg"/>
                    <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500" >
                            News
                        </span>
                        <p className="font-mono text-xs font-normal opacity-75 text-black dark:text-white">September 28th, 2022</p>
                    </div>
                    <p className="font-display max-w-sm text-2xl font-bold leading-tight mb-3">
                        <span className="link-underline link-underline-black text-black dark:text-white">
                            Sắp xếp nhanh - Quick Sort
                        </span>
                    </p>
                    <p className="text-gray-600 two-lines mb-3 dark:text-white">
                        Publer is a robust social media management platform offering a range of features including post
                        scheduling, collaboration tools, analytics, and AI assistance to supercharge your social media
                        strategy across multiple platforms.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">Programming</Link>
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">Algorithm</Link>
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">Sort</Link>
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">C/C++</Link>
                    </div>
                </li>
                <li className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4">
                    <Image width={100} height={100} src="/featured1.jpg" className="w-full mb-4 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="laravel9-1646792144.jpg"/>
                    <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500" >
                            News
                        </span>
                        <p className="font-mono text-xs font-normal opacity-75 text-black dark:text-white">September 28th, 2022</p>
                    </div>
                    <p className="font-display max-w-sm text-2xl font-bold leading-tight mb-3">
                        <span className="link-underline link-underline-black text-black dark:text-white">
                            Sắp xếp trộn - Merge Sort
                        </span>
                    </p>
                    <p className="text-gray-600 two-lines mb-3 dark:text-white">
                        Publer is a robust
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">Programming</Link>
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">Algorithm</Link>
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">Sort</Link>
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">C/C++</Link>
                    </div>
                </li>
                <li className="mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4">
                    <Image width={0} height={0} sizes="100vw" src="/featured1.jpg" className="w-full mb-4 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="featured" priority />
                    <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-500" >
                            News
                        </span>
                        <p className="font-mono text-xs font-normal opacity-75 text-black dark:text-white">September 28th, 2022</p>
                    </div>
                    <p className="font-display max-w-sm text-2xl font-bold leading-tight mb-3">
                        <span className="link-underline link-underline-black text-black dark:text-white">
                            Sắp xếp chọn - Selection Sort
                        </span>
                    </p>
                    <p className="text-gray-600 two-lines mb-3 dark:text-white">
                        Publer is a robust social media management platform offering a range of features including post
                        scheduling, collaboration tools, analytics, and AI assistance to supercharge your social media
                        strategy across multiple platforms.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">Programming</Link>
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">Algorithm</Link>
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">Sort</Link>
                        <Link href={'/'} className="bg-gray-300/30 hover:bg-gray-400/30 py-1 px-2 rounded-lg text-xs dark:bg-gray-700/90 hover:dark:bg-gray-600/90">C/C++</Link>
                    </div>
                </li>
            </ul>

        </div>
    );
}

export default PostFeatured;