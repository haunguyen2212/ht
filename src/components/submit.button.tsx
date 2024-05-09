import React from "react";
import { useFormStatus } from "react-dom";
import Loading from "./loading";

const SubmitButton: React.FC<IPropSubmitButton> = (props) => {
    const { pending } = useFormStatus();
    const { color, children } = props;
    return (
        <button
            type="submit"
            disabled={pending}
            className={`flex w-full justify-center rounded-md bg-${color}-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-${color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600`}
        >
            {pending ? <Loading/> : children }
        </button>
    );
}

export default SubmitButton;