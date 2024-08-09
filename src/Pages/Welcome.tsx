import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Welcome = () => {
    // Rework everything
    return (
        <div className='relative flex h-screen w-full flex-col'>
            <div className='absolute left-1/4 top-1/4 size-52 rounded-full bg-purple-800 blur-[120px]' />
            <div className='absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-800 blur-[100px]' />
            <div className='absolute left-1/2 top-1/2 size-64 rounded-full bg-cyan-700 blur-[90px]' />
            <div className='relative h-full w-1/2 flex-col items-center'>
                <span className='text-3xl font-bold'>Welcome to Slappin Notes</span>
                <span className='mb-2 text-lg'>Write down your thoughts, manage tasks and never forget anything</span>
                <Link
                    to='/view'
                    className='flex flex-row items-center gap-1 text-base font-normal text-gray-400 hover:text-gray-300'
                >
                    Continue <FiArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
