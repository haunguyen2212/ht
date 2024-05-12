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

interface IHome{
    message: string;
    data: {
        featured_posts: FeaturedPost[];
    } 
}

interface FeaturedPost{
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category_id: number;
    order: number;
    tags: Tag[];
}

interface Tag{
    id: number;
    name: string;
}