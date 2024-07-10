import React from "react";

const UserIcon: React.FC<IPropIcon> = ({ classAdded }) => {
    return (
        <svg className={ classAdded } fill="currentColor" height="20px" aria-hidden="true" role="img"
            focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
            </path>
        </svg>
    );
}

export default UserIcon;