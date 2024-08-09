import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='flex h-full w-full flex-col items-center gap-2'>
            <span className='text-3xl font-bold'>Welcome to Notes App</span>
            <Link to='/view' className='flex flex-row items-center gap-1 text-lg text-gray-400 hover:text-gray-300'>
                Continue <FiArrowRight size={16} />
            </Link>
        </div>
    );
};

export default Welcome;
