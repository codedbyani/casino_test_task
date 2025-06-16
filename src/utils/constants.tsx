import {
    BlackJackV2Icon,
    BoltIcon,
    ChipIcon,
    CrashIcon,
    CronCircle,
    DiceIcon,
    FireIcon,
    FlatIcon,
    LayersIcon,
    LiveDealersIcon,
    MedalIcon,
    RouletteIcon,
    SlotsIcon,
} from '@/assets/svg';

export const HERO_SWIPER_SLIDES = [
    '/images/png/hero_slider_1.png',
    '/images/png/hero_slider_2.png',
    '/images/png/hero_slider_1.png',
    '/images/png/hero_slider_2.png',
    '/images/png/hero_slider_1.png',
    '/images/png/hero_slider_2.png',
];

export const FEATURED_GAMES_SLIDES = [
    '/images/featuredGames/single_game.png',
    '/images/featuredGames/2.png',
    '/images/featuredGames/3.png',
    '/images/featuredGames/4.png',
    '/images/featuredGames/5.png',
    '/images/featuredGames/6.png',
    '/images/featuredGames/7.png',
    '/images/featuredGames/single_game.png',
    '/images/featuredGames/2.png',
    '/images/featuredGames/3.png',
    '/images/featuredGames/4.png',
    '/images/featuredGames/5.png',
    '/images/featuredGames/6.png',
    '/images/featuredGames/7.png',
];

export const ADVERTISMENT_IMAGES = {
    BIG: ['/images/png/welcome_bonus.png', '/images/png/cash_back.png'],
    SMALL: [
        '/images/png/drops_wins.png',
        '/images/png/wager_race.png',
        '/images/png/octoplay.png',
        '/images/png/big_time_gaming.png',
    ],
};

export const FILTER_ITEMS = [
    { icon: <FlatIcon width={20} height={20} />, label: 'All Games' },
    { icon: <SlotsIcon width={20} height={20} />, label: 'Slots' },
    { icon: <BlackJackV2Icon width={20} height={20} />, label: 'Blackjack' },
    { icon: <RouletteIcon width={20} height={20} />, label: 'Roulette' },
    { icon: <LiveDealersIcon width={20} height={20} />, label: 'Live' },
    { icon: <CrashIcon width={20} height={20} />, label: 'Baccarat' },
    { icon: <CrashIcon width={20} height={20} />, label: 'Crash' },
    { icon: <DiceIcon width={20} height={20} />, label: 'Dice' },
];

export const FILTER_ITEMS_SELECT = [
    [{ icon: <DiceIcon width={20} height={20} />, label: 'Collections', value: 'collections' }],
    [{ icon: <DiceIcon width={20} height={20} />, label: 'Providers', value: 'providers' }],
];

export const BONUS_BUY_SLIDES = [
    '/images/bonusBuy/1.png',
    '/images/bonusBuy/2.png',
    '/images/bonusBuy/3.png',
    '/images/bonusBuy/4.png',
    '/images/bonusBuy/5.png',
    '/images/bonusBuy/6.png',
    '/images/bonusBuy/7.png',
    '/images/bonusBuy/1.png',
    '/images/bonusBuy/2.png',
    '/images/bonusBuy/3.png',
    '/images/bonusBuy/4.png',
    '/images/bonusBuy/5.png',
    '/images/bonusBuy/6.png',
    '/images/bonusBuy/7.png',
];

export const HOT_GAMES_SLIDES = [
    '/images/hotGames/1.png',
    '/images/hotGames/2.png',
    '/images/hotGames/3.png',
    '/images/hotGames/4.png',
    '/images/hotGames/5.png',
    '/images/hotGames/6.png',
    '/images/hotGames/7.png',
    '/images/hotGames/1.png',
    '/images/hotGames/2.png',
    '/images/hotGames/3.png',
    '/images/hotGames/4.png',
    '/images/hotGames/5.png',
    '/images/hotGames/6.png',
    '/images/hotGames/7.png',
];

export const LIVE_GAMES_SLIDES = [
    '/images/liveGames/1.png',
    '/images/liveGames/2.png',
    '/images/liveGames/3.png',
    '/images/liveGames/4.png',
    '/images/liveGames/5.png',
    '/images/liveGames/6.png',
    '/images/liveGames/7.png',
    '/images/liveGames/1.png',
    '/images/liveGames/2.png',
    '/images/liveGames/3.png',
    '/images/liveGames/4.png',
    '/images/liveGames/5.png',
    '/images/liveGames/6.png',
    '/images/liveGames/7.png',
];

export const NEW_RELEASE_SLIDES = [
    '/images/newReleases/1.png',
    '/images/newReleases/2.png',
    '/images/newReleases/3.png',
    '/images/newReleases/4.png',
    '/images/newReleases/5.png',
    '/images/newReleases/6.png',
    '/images/newReleases/7.png',
    '/images/newReleases/1.png',
    '/images/newReleases/2.png',
    '/images/newReleases/3.png',
    '/images/newReleases/4.png',
    '/images/newReleases/5.png',
    '/images/newReleases/6.png',
    '/images/newReleases/7.png',
];

export const PROVIDERS_SLIDES = [
    '/images/providers/1.png',
    '/images/providers/2.png',
    '/images/providers/3.png',
    '/images/providers/4.png',
    '/images/providers/5.png',
    '/images/providers/6.png',
    '/images/providers/7.png',
    '/images/providers/1.png',
    '/images/providers/2.png',
    '/images/providers/3.png',
    '/images/providers/4.png',
    '/images/providers/5.png',
    '/images/providers/6.png',
    '/images/providers/7.png',
];

export const SWIPER_SLIDES = [
    {
        label: 'Featured Games',
        slides: FEATURED_GAMES_SLIDES,
        icon: <CronCircle width={20} height={20} />,
    },
    {
        label: 'New Releases',
        slides: NEW_RELEASE_SLIDES,
        icon: <BoltIcon width={20} height={20} />,
    },
    { label: 'Hot Games', slides: HOT_GAMES_SLIDES, icon: <FireIcon width={20} height={20} /> },
    { label: 'Bonus Buy', slides: BONUS_BUY_SLIDES, icon: <MedalIcon width={20} height={20} /> },
    { label: 'Live Games', slides: LIVE_GAMES_SLIDES, icon: <ChipIcon width={20} height={20} /> },
    {
        label: 'Providers',
        slides: PROVIDERS_SLIDES,
        icon: <LayersIcon width={20} height={20} />,
        slideClasses: '!h-[50px] xs:!h-[60px]',
    },
];
