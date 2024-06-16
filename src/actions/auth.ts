'use server';

import { API_URL } from "@/utils/config";
import axios from "axios";

export async function login(prevState: ILogin, formData: FormData): Promise<ILogin>{
  try{
    const response = await axios.post<ILogin>(`${API_URL}/login`, formData);
    return {
      token: response.data.token,
      user: response.data.user,
      status: true,
      message: 'Đăng nhập thành công',
    }
  }
  catch(error: any){
    if(axios.isAxiosError(error) && error.response){
      const errorData : ILogin = error.response.data;
      if(error.response.status == 422 && errorData){
        return {
          errors: errorData.errors,
          status: false,
          message: errorData.message,
        }
      }
      else{
        return {
          status: false,
          message: error.response.data.message,
        }
      }
    }
  }
  return {
    status: false,
    message: 'Có lỗi xảy ra, thử lại sau',
  }
}

export async function register(prevState: IApiResponse<User>, formData: FormData): Promise<IApiResponse<User>> {
  try{
    const response = await axios.post<IApiResponse<User>>(`${API_URL}/register`, formData);
    return {
      message: response.data.message,
      status: true,
      data : response.data.data,
    }
  }
  catch(error: any){
    if(axios.isAxiosError(error) && error.response){
      const errorData : IApiResponse<User> = error.response.data;
      if(error.response.status == 422 && errorData){
        return {
          message: errorData.message,
          status: false,
          errors: errorData.errors,
        }
      }
      else{
        return {
          message: errorData.message,
          status: false,
        }
      }
    }
  }
  return {
    status: false,
    message: 'Có lỗi xảy ra, thử lại sau',
  }
}
    
