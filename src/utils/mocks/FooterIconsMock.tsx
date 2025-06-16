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


export const FOOTER_MENU=[
    {
        title:"Games",
        links:[
            "Slots",
            "Live Dealers",
            "Table Games",
            "Video Poker",
            "Crash",
        ]
    },
    {
        title:"Promotions",
        links:[
            "Welcome Bonus",
            "Cash Back Deals",
            "Weekly Cashback",
            "Tournaments",
            "VIP Club",
        ]
    },
    {
        title:"Banking",
        links:[
            "Deposit Options",
            "Withdraw Options",
            "Refund Policy",
            "Payment Security",
            "AML Policy",
        ]
    },
    {
        title:"Casino",
        links:[
            "Terms & Conditions",
            "Privacy Policy",
            "Bonus Terms",
            "Affiliate Program",
            "About ********",
        ]
    },
    {
        title:"Customer Care",
        links:[
            "Live Chat",
            "Phone Support",
            "Email Support",
            "Help Desk",
            "Responsible Gaming",
        ]
    }
]