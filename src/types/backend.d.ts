interface ILogin {
    email: string;
    password: string;
}

interface ILoginResponse {
    token: string;
    type_token: string;
    message: string;
}