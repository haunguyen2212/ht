interface ILogin{
    token?: string;
    status: boolean;
    message: string;
    errors?: {
      email?: string[];
      password?: string[];
    }
}

interface IApiResponse{
    status: boolean;
    message: string;
    data?: any;
    errors?: any;
}

interface User {
    username: string;
    email: string;
}