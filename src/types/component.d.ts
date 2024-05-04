interface IPropAlert {
    color: 'red' | 'green' | 'blue' | 'yellow' | 'gray';
    message: string;
}

interface IPropSubmitButton{
    color: 'indigo',
    children: ReactNode,
}