interface ILogin{
    token?: string;
    status: boolean;
    message: string;
    errors?: {
      email?: string[];
      password?: string[];
    }
}

interface IApiResponse<T>{
    status: boolean;
    message: string;
    data?: T;
    errors?: any;
}

interface User {
    username: string;
    email: string;
}