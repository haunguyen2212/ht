import React from "react";
import CircleInfoIcon from "./icon/circle-info";

const Alert: React.FC<IPropAlert> = (props) => {

    const { color, message } = props;

    return (
        <div className={`flex items-center p-4 mb-4 text-sm text-${color}-800 border border-${color}-300 rounded-lg bg-${color}-50 dark:bg-gray-800 dark:text-${color}-400 dark:border-${color}-800`} role="alert">
            <CircleInfoIcon classAdded="flex-shrink-0 inline w-4 h-4 me-3" />
            <span className="sr-only">Info</span>
            <div>{message}</div>
        </div>
    );
}

export default Alert;