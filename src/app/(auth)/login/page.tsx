'use client';
import { login } from "@/actions/auth";
import Alert from "@/components/alert";
import Logo from "@/components/auth.logo";
import SubmitButton from "@/components/submit.button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = {
  status: false, 
  message: '',
}

const Login: React.FC<ILoginForm> = ({email, password}) => {

  const [state, formAction] = useFormState<ILogin, FormData>(login, initialState);
  const router = useRouter();

  useEffect (() => {
    if(state.status){
      localStorage.setItem('token', state.token as string);
      localStorage.setItem('user', JSON.stringify(state.user));
      router.push('/');
    }
  }, [state, router])

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo></Logo>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Đăng nhập hệ thống
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={formAction}>
            {state?.message && !state?.errors && <Alert color="red" message={state?.message} />}
            <div>
              <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900 dark:text-white">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  value={email}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:ring-white dark:bg-gray-800 dark:text-white"
                />
                {state?.errors?.email && <span className="text-sm font-bold text-red-500 mt-1">{state?.errors?.email[0]}</span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900 dark:text-white">
                  Mật khẩu
                </label>
                <div className="text-sm">
                  <Link href="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Quên mật khẩu?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:ring-white dark:bg-gray-800 dark:text-white"
                />
                {state?.errors?.password && <span className="text-sm font-bold text-red-500 mt-1">{state?.errors?.password[0]}</span>}
              </div>
            </div>

            <div>
              <SubmitButton color="indigo">Đăng nhập</SubmitButton>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Bạn chưa có tài khoản?{' '}
            <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Tạo tài khoản ngay</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;