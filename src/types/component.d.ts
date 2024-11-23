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

interface IPropSinglePost {
    data: Post;
}

interface IPropUserButton {
    user?: User;
}

interface IPropPost {
    slug: string;
}

interface IPropStatsCard {
    title: string;
    data: number;
    hasPlus: boolean;
}

interface IFAQProps {
    targetId: string;
    question: string;
    answer: string;
}