import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <Image
            className="mx-auto w-[100px] h-auto"
            src="/logo.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo"
            priority
          />
    )
}

export default Logo