interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
    <div className='flex h-full w-full flex-row'>
        <div className='h-full w-1/6'>sidebar</div>
        <div className='h-full w-5/6'>{children}</div>
    </div>
);

export default Layout;
