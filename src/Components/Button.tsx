import classNames from 'classnames';

interface Props {
    color: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick: () => void;
    classNames?: string;
}

const Button = ({ color, children, onClick, classNames: AdditionalClassNames }: Props) => {
    return (
        <button
            className={classNames(
                'flex h-fit w-fit items-center rounded-lg border border-white/5 px-8 py-2 text-base font-normal',
                color === 'primary' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-700 hover:bg-gray-700/60',
                AdditionalClassNames,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
