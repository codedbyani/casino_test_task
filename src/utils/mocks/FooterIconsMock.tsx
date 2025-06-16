import { IIconProps } from '@/types/ui/iconsType';

import {
    Bitcoin,
    Etherium,
    Tether,
    BitcoinLeft,
    LiteCoin,
    Usdt,
    DCoin,
    XRP,
    Visa,
    Master,
    AmericanExpress,
    Dinners,
    Discover,
} from '@/assets/svg';
import { ReactNode } from 'react';

// It should be changed as it's only for mock purposes
export const FOOTER_ICONS_MOCK: React.ReactElement<IIconProps>[] = [
    <Bitcoin />,
    <Etherium />,
    <Tether />,
    <BitcoinLeft />,
    <LiteCoin />,
    <Usdt />,
    <DCoin />,
    <XRP />,
    <Visa />,
    <Master />,
    <AmericanExpress />,
    <Dinners />,
    <Discover />,
];

export const FOOTER_MENU_MOCK = [
    {
        title: 'Games',
        links: ['Slots', 'Live Dealers', 'Table Games', 'Video Poker', 'Crash'],
    },
    {
        title: 'Promotions',
        links: ['Welcome Bonus', 'Cash Back Deals', 'Weekly Cashback', 'Tournaments', 'VIP Club'],
    },
    {
        title: 'Banking',
        links: [
            'Deposit Options',
            'Withdraw Options',
            'Refund Policy',
            'Payment Security',
            'AML Policy',
        ],
    },
    {
        title: 'Casino',
        links: [
            'Terms & Conditions',
            'Privacy Policy',
            'Bonus Terms',
            'Affiliate Program',
            'About ********',
        ],
    },
    {
        title: 'Customer Care',
        links: ['Live Chat', 'Phone Support', 'Email Support', 'Help Desk', 'Responsible Gaming'],
    },
];

export const COPY_RIGHT_MOCK = {
    copyRight: '© 2025 ********. All Rights Reserved.',
    title: 'GAMBLING CAN BE ADDICTIVE: PLAY RESPONSIBLY!',
    desc: `******** Casino is operated by ********, providing a secure and fair gaming environment
            for all players. We strictly adhere to all regulatory requirements to maintain
            transparency and fairness. Our commitment to integrity and ethical practices is at the
            core of our business. We employ advanced security measures, including SSL encryption and
            robust firewall systems, to protect your personal and financial information. Our games
            are regularly audited by independent third-party organizations to ensure fairness and
            randomness. We utilize state-of-the-art technology and secure payment gateways to ensure
            seamless transactions. All payment processes are encrypted and compliant with industry
            standards. Our customer support team is available 24/7 to assist you with any questions
            or issues you may have. Contact us via Live Chat, Email, or Phone for prompt and
            professional assistance.`,
};
