import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
    return (
        <section className="sm:mt-6 lg:mt-8 mt-12 w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                        <span className="block text-current xl:inline dark:text-white">Khám phá tiềm năng </span>
                        <span className="block text-indigo-600 xl:inline">công nghệ</span>
                    </h1>
                    <p
                        className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-white">
                        Cùng nhau khám phá những giới hạn mới với công nghệ, nơi sự sáng tạo không bao giờ ngừng. Khơi dậy niềm đam mê, mở ra cánh cửa dẫn đến tương lai, và không ngừng đổi mới để hiện thực hóa tiềm năng vô hạn.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link href={'/'}
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 dark:bg-gray-300 dark:hover:bg-gray-100 dark:text-black">
                                Khám phá
                            </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link href={'/'}
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white">
                                Liên hệ
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                    <Image width={100} height={100} className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/banner.avif" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Banner;