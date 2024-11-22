import React from "react";

const StatsCard: React.FC<IPropStatsCard> = ({title, data, hasPlus}) => {
    return (
        <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0">
            <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">{title}</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400"><span>{data}</span>{hasPlus ? '+' : ''}</dd>
        </div>
    )
}

export default StatsCard
