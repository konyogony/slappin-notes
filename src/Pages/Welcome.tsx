import { BsGithub } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import TextDivider from '../Components/TextDivider';

const Welcome = () => {
    const redirect = useNavigate();
    return (
        <div className='relative flex h-screen w-full flex-col'>
            <div className='grid h-full w-full grid-cols-3'>
                <div className='col-span-2 flex h-full w-full bg-gray-700'>a</div>
                <div className='flex h-full w-full flex-col items-center gap-1 bg-gray-600 px-8 py-14'>
                    <span className='text-3xl font-bold'>Slappin Notes</span>
                    <img
                        src={'https://cdn.discordapp.com/emojis/1085699608988094514.gif?size=96&quality=lossless'}
                        alt='logo'
                        className='size-12'
                    />
                    <Button color={'primary'} onClick={() => {}} classNames='mt-auto flex flex-row gap-2'>
                        Login using Github <BsGithub />
                    </Button>
                    <TextDivider>or</TextDivider>
                    <Button color={'secondary'} onClick={() => redirect('/view')} classNames='flex flex-row gap-2'>
                        Continue as guest <FiArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
