import { GameCare } from '@/assets/svg';
import { FOOTER_ICONS_MOCK, FOOTER_MENU } from '@/utils/mocks/FooterIconsMock';
import Image from 'next/image';
import Link from 'next/link';
import { Button, EButtonSize, EButtonVariant } from '../atoms/Button';

export const Footer = () => {
    return (
        <footer className=' text-white  w-full flex flex-col justify-center items-center mt-20'>
            <div className='bg-blue-500 boxContainer mx-auto px-[25px] max-md:pt-[15px] pt-[35px] pb-[25px] max-md:pb-[10px]'>
                <div className='flex gap-9 max-lg:flex-col'>
                    <div className='sm:col-span-2 md:col-span-3 lg:col-span-2 order-0 max-w-75'>
                        <div className='w-[75px] h-8  bg-gray-300 rounded mb-3 md:mb-4'></div>
                        <p className='text-[#8898B0] text-[14px] leading-relaxed '>
                            Strike it rich at ********! Experience heart-pounding action with
                            massive jackpots, fast payouts, and VIP treatment that keeps champions
                            coming back. Join thousands of winners today - your fortune awaits!
                        </p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-[57px] mb-[35px]'>
                        {FOOTER_MENU.map((elem, index) => (
                            <div className={`order-${index + 2}`} key={index} >
                                <h3 className='text-white font-bold mb-[15px] md:mb-4 text-base'>
                                    {elem.title}
                                </h3>
                                <ul className='space-y-1.5 md:space-y-2 max-w-[145px] w-full'>
                                    {elem.links.map((link, index) => (
                                        <li key={index} className='mb-1'>
                                            <Link
                                                href='#'
                                                className='text-gray-200 hover:text-white text-[14px] transition-colors'
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div
                            className={`order-7 hidden max-md:flex gap-[13px] flex-col justify-between`}
                        >
                            <Image
                                src={'/images/png/reffer.png'}
                                width={130}
                                height={75}
                                alt='reffer'
                            />
                            <Image
                                src={'/images/png/affiliate.png'}
                                width={130}
                                height={75}
                                alt='affiliate'
                            />
                        </div>
                    </div>
                </div>
                <div className='border-t-[1.5px] border-[#282F48] py-6 max-md:py-5'>
                    <div className='flex flex-wrap justify-center items-center gap-4 md:gap-4'>
                        {FOOTER_ICONS_MOCK.map((elem, index) => (
                            <div className='min-w-[45px]'>{elem}</div>
                        ))}
                    </div>
                </div>

                <div className='border-t-[1.5px] border-[#282F48] pt-5  flex flex-col items-center justify-center'>
                    <div className='flex flex-col  justify-between items-center gap-4 w-full'>
                        <div className='w-full flex flex-col  justify-between items-center relative '>
                            <div className='md:absolute md:right-0 md:top-0 max-md:border-b-[1.5px] max-md:border-[#282F48] max-md:pb-5 max-md:w-full max-md:flex max-md:items-center max-md:justify-center'>
                                <GameCare />
                            </div>
                            <p className='text-[#66788C] text-[14px]  mb-2 text-center max-md:pt-[25px]'>
                                © 2025 ********. All Rights Reserved.
                            </p>
                            <p className='text-[#66788C] text-[14px]  font-semibold mb-3 text-center '>
                                GAMBLING CAN BE ADDICTIVE: PLAY RESPONSIBLY!
                            </p>
                            <p className='text-[#66788C] text-xs  text-center  max-w-none  w-full'>
                                ******** Casino is operated by ********, providing a secure and fair
                                gaming environment for all players. We strictly adhere to all
                                regulatory requirements to maintain transparency and fairness. Our
                                commitment to integrity and ethical practices is at the core of our
                                business. We employ advanced security measures, including SSL
                                encryption and robust firewall systems, to protect your personal and
                                financial information. Our games are regularly audited by
                                independent third-party organizations to ensure fairness and
                                randomness. We utilize state-of-the-art technology and secure
                                payment gateways to ensure seamless transactions. All payment
                                processes are encrypted and compliant with industry standards. Our
                                customer support team is available 24/7 to assist you with any
                                questions or issues you may have. Contact us via Live Chat, Email,
                                or Phone for prompt and professional assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-blue-200 px-[10px] pt-[10px] pb-[70px] w-full max-sm:flex justify-between hidden '>
                <Button
                    children='LOG IN'
                    size={EButtonSize.BIG}
                    className='w-[175px]'
                    variant={EButtonVariant.GREEN}
                />
                <Button children='SIGN UP' size={EButtonSize.BIG} className='w-[175px]' />
            </div>
        </footer>
    );
};
