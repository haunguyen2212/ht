import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <Image
            className="mx-auto"
            src="/logo.png"
            width={100}
            height={100}
            alt="Logo"
            priority
          />
    )
}

export default Logo