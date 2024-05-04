'use client';
import { register } from "@/actions/auth";
import Alert from "@/components/alert";
import Logo from "@/components/auth.logo"
import SubmitButton from "@/components/submit.button";
import Link from "next/link"
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

const initialState = {
    status: false, 
    message: '',
}

const Register: React.FC<IRegisterForm> = ({username, email, password, confirmPassword}) => {

    const [state, formAction] = useFormState<IApiResponse<User>, FormData>(register, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if(state.status){
            formRef.current?.reset();
        }
    }, [state]);

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Logo></Logo>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Đăng kí tài khoản
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" ref={formRef} action={formAction}>
                        {state?.status && state?.message && <Alert color="blue" message={state?.message} />}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Tên tài khoản
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="username"
                                value={username}
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {state?.errors?.username && <span className="text-sm font-bold text-red-500 mt-1">{state?.errors?.username[0]}</span>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="email"
                                value={email}
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {state?.errors?.email && <span className="text-sm font-bold text-red-500 mt-1">{state?.errors?.email[0]}</span>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Mật khẩu
                            </label>
                            <div className="mt-2">
                                <input
                                type="password"
                                name="password"
                                value={password}
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {state?.errors?.password && <span className="text-sm font-bold text-red-500 mt-1">{state?.errors?.password[0]}</span>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                            Nhập lại mật khẩu
                            </label>
                            <div className="mt-2">
                                <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {state?.errors?.confirmPassword && <span className="text-sm font-bold text-red-500 mt-1">{state?.errors?.confirmPassword[0]}</span>}
                            </div>
                        </div>
                        <div>
                            <SubmitButton color="indigo">Đăng ký</SubmitButton>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Bạn đã có tài khoản?{' '}
                        <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Đăng nhập ngay</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register