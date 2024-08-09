import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';

const View = () => {
    return (
        <Layout>
            <span>view</span>
            <Link
                to='/'
                className='flex flex-row items-center gap-1 text-base font-normal text-gray-400 hover:text-gray-300'
            >
                back
            </Link>
        </Layout>
    );
};

export default View;
