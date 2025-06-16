import { IIconProps } from '@/types/ui/iconsType';
import { MobileMenuItem } from '@/components/atoms/MobileMenuItem';
import {
    BlackjackIcon,
    ChatIcon,
    CollectionIcon,
    CrashIcon,
    DepositIcon,
    DiceIcon,
    FavoritesIcon,
    LanguageIcon,
    LiveDealersIcon,
    MobileHomeIcon,
    MobileMenuIcon,
    PromotionsIcon,
    ProvidersIcon,
    RecentIcon,
    RouletteIcon,
    SearchIcon,
    SlotsIcon,
    SupportIcon,
    TableGamesIcon,
    TournamentsIcon,
    VideoPokerIcon,
    VipClubIcon,
} from '@/assets/svg';

// It should be changed as it's only for mock purposes
export const SIDEBAR_ITEMS_MOCK: React.ReactElement<IIconProps>[] = [
    <PromotionsIcon />,
    <VipClubIcon />,
    <TournamentsIcon className='mb-[10px]' />,
    <SlotsIcon />,
    <BlackjackIcon />,
    <RouletteIcon />,
    <TableGamesIcon />,
    <LiveDealersIcon />,
    <CrashIcon />,
    <DiceIcon />,
    <VideoPokerIcon className='mb-[10px]' />,
    <FavoritesIcon />,
    <RecentIcon className='mb-[10px]' />,
    <CollectionIcon />,
    <ProvidersIcon className='mb-[10px]' />,
    <SupportIcon />,
    <LanguageIcon />,
];

export const SIDEBAR_MOBILE_ITEMS_MOCK: React.ReactElement<IIconProps>[] = [
    <MobileMenuItem icon={<MobileHomeIcon />} title='Home' />,
    <MobileMenuItem icon={<SearchIcon />} title='Search' />,
    <MobileMenuItem
        icon={<DepositIcon />}
        className='!white bg-blue-700 rounded-full h-[50px] w-[50px]'
    />,
    <MobileMenuItem icon={<ChatIcon />} title='Chat' />,
    <MobileMenuItem icon={<MobileMenuIcon />} title='Menu' />,
];
