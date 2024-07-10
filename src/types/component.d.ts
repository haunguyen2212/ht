interface IPropAlert {
    color: 'red' | 'green' | 'blue' | 'yellow' | 'gray';
    message: string;
}

interface IPropIcon {
    classAdded?: string;
}

interface IPropSubmitButton{
    color: 'indigo';
    children: ReactNode;
}

interface IPropFeaturedPost {
    data: Post;
}

interface IPropUserButton {
    user?: User;
}

interface IPropPost {
    slug: string;
}