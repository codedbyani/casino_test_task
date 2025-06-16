import Link from 'next/link';
import { GameCare } from '@/assets/svg';
import {
    COPY_RIGHT_MOCK,
    FOOTER_ICONS_MOCK,
    FOOTER_MENU_MOCK,
} from '@/utils/mocks/FooterIconsMock';
import { Button, EButtonSize, EButtonVariant } from '../atoms/Button';

const Menu: React.FC = () => (
    <div className='flex gap-[15px] max-lg:flex-col max-md:px-[5px]'>
        <div className='sm:col-span-2 md:col-span-3 lg:col-span-2 w-full md:max-w-75'>
            <div className='w-[75px] h-10 bg-gray-100 rounded mb-3 max-md:w-15 max-md:h-8 md:mb-4' />
            <p className='text-gray-400 text-[14px] leading-relaxed'>
                Strike it rich at <span className='hidden md:inline'>*****</span>***! Experience
                heart-pounding action with massive jackpots, fast payouts, and VIP treatment that
                keeps champions coming back. Join thousands of winners today - your fortune awaits!
            </p>
        </div>
        <div className='flex flex-wrap gap-10 md:gap-[57px] mb-[30px] md:mb-[35px] max-md:border-t-[1.5px] max-md:border-blue-450 max-md:pt-[25px]'>
            {FOOTER_MENU_MOCK.map((elem, index) => (
                <div className='max-md:flex-1' key={index}>
                    <h3 className='text-white font-bold mb-[15px] md:mb-4 text-base text-nowrap leading-[18px]'>
                        {elem.title}
                    </h3>
                    <div className='space-y-1.5 md:space-y-2 flex flex-col gap-[10px] max-w-[145px] w-full'>
                        {elem.links.map((link, index) => (
                            <Link
                                href='#'
                                key={index}
                                className='leading-[18px] m-0 text-gray-400 hover:text-white text-[14px] transition-colors text-nowrap md:text-gray-200'
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
            <div
                className={`hidden  gap-[13px] flex-col justify-between mr-[10px] max-md:flex-1 max-md:flex`}
            >
                <img src={'/images/png/reffer.png'} alt='reffer' width='100%' />
                <img src={'/images/png/affiliate.png'} alt='affiliate' width='100%' />
            </div>
        </div>
    </div>
);

const CoinIcons: React.FC = () => (
    <div className='border-t-[1.5px] border-blue-450 py-[25px] max-md:px-[5px] max-md:py-5'>
        <div className='flex flex-wrap justify-center items-center gap-4 md:gap-4'>
            {FOOTER_ICONS_MOCK.map((elem, index) => (
                <div className='min-w-[45px]' key={index}>
                    {elem}
                </div>
            ))}
        </div>
    </div>
);

const CopyRight: React.FC = () => (
    <div className='border-t-[1.5px] border-blue-450 pt-5 max-md:pt-[25px] flex flex-col items-center justify-center'>
        <div className='flex flex-col justify-between items-center gap-4 w-full'>
            <div className='w-full flex flex-col justify-between items-center relative'>
                <div className='md:absolute md:right-0 md:top-[-10px] max-md:border-b-[1.5px] max-md:border-blue-450 pb-[25px] max-md:w-full max-md:flex max-md:items-center max-md:justify-center'>
                    <GameCare />
                </div>
                <p className='text-gray-300 text-[14px] mb-[25px] max-md:mb-5 text-center max-md:pt-[25px]'>
                    {COPY_RIGHT_MOCK.copyRight}
                </p>
                <p className='text-gray-300 text-[14px] mb-5 max-md:[15px] text-center '>
                    {COPY_RIGHT_MOCK.title}
                </p>
                <p className='text-gray-300 text-xs  text-center  max-w-none  w-full'>
                    {COPY_RIGHT_MOCK.desc}
                </p>
            </div>
        </div>
    </div>
);

export const Footer: React.FC = () => {
    return (
        <footer className='text-white w-full bg-blue-500 flex flex-col justify-center items-center'>
            <div className='container mx-auto max-md:px-[10px] max-md:pt-[15px] pt-[35px] pb-[25px] max-md:pb-[10px]'>
                <Menu />
                <CoinIcons />
                <CopyRight />
            </div>
            <div className='bg-blue-200 px-[10px] pt-[10px] pb-[70px] w-full max-sm:flex justify-between hidden gap-[5px]'>
                <Button
                    children='LOG IN'
                    size={EButtonSize.BIG}
                    className='w-full'
                    variant={EButtonVariant.GREEN}
                />
                <Button children='SIGN UP' size={EButtonSize.BIG} className='w-full' />
            </div>
        </footer>
    );
};
