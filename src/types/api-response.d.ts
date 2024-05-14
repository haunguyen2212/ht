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

interface IList<T>{
    message: string;
    data: T[];
}

interface IDetail<T>{
    message: string;
    data: T;
}
interface FeaturedPost{
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category_id: number;
    order: number;
    publish_date_from: string;
    publish_date_to: string;
    tags: Tag[];
}

interface Tag{
    id: number;
    name: string;
}