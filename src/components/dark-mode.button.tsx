'use client';
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import LightModeIcon from "./icon/light-mode";
import DarkModeIcon from "./icon/dark-icon";

const DarkModeButton: React.FC = () => {

    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);

    if(!mounted){
        return (
            <button className="h-12 w-12 rounded-lg p-2 mx-1 md:mx-2 hover:bg-gray-100 dark:hover:bg-gray-700"> 
            </button>
        );
    }

    if(resolvedTheme === 'dark'){
        return (
            <button onClick={() => setTheme('light')} className="h-12 w-12 rounded-lg p-2 mx-1 md:mx-2 hover:bg-gray-100 dark:hover:bg-gray-700">  
                <DarkModeIcon classAdded="fill-white block" />
            </button>
        );
    }else{
        return (
            <button onClick={() => setTheme('dark')} className="h-12 w-12 rounded-lg p-2 mx-1 md:mx-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <LightModeIcon classAdded="fill-indigo-700 block" /> 
            </button>
        );
    }
}

export default DarkModeButton;