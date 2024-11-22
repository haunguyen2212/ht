import React from "react";
import StatsCard from "./stats-card";

const Stats: React.FC = () => {
    return (
        <section className="mt-2 md:mt-8 mt-12 w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="my-2 md:my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
            <div className="bg-indigo-50 dark:bg-indigo-500 pt-12 sm:pt-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Số Liệu Thống Kê Tháng</h2>
                    </div>
                </div>
                <div className="mt-10 bg-white dark:bg-gray-900 pb-12 sm:pb-16">
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2 bg-indigo-50 dark:bg-indigo-500"></div>
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-4xl">
                                <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
                                    <StatsCard title="Bài Viết Xuất Bản" data={30} hasPlus={false} />
                                    <StatsCard title="Lượt Truy Cập Website" data={100} hasPlus={true} />
                                    <StatsCard title="Lượt Xem Bài Viết" data={100} hasPlus={true} />
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Stats