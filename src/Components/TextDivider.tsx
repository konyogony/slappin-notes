import classNames from 'classnames';

interface Props {
    children: React.ReactNode;
    classNames?: string;
    orientation?: 'horizontal' | 'vertical';
}

const TextDivider = ({ children, classNames: AdditionalClassNames, orientation = 'horizontal' }: Props) => {
    return (
        <div
            className={classNames(
                'flex w-full items-center gap-1',
                AdditionalClassNames,
                orientation === 'horizontal' ? 'flex-row' : 'flex-col',
            )}
        >
            <div className='h-[1px] w-full bg-gray-500' />
            {children}
            <div className='h-[1px] w-full bg-gray-500' />
        </div>
    );
};

export default TextDivider;
