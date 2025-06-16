import { type Config } from 'tailwindcss';

const config: Config = {
    content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    100: '#273344',
                    200: '#1C2E3D',
                    300: '#152535',
                    400: '#162231',
                    500: '#10202D',
                    600: '#10212E',
                    700: '#0F70DC',
                    800: '#192C40',
                },
                gray: {
                    200: '#C1C9E5',
                },
                green: {
                    400: '#34A853',
                },
            },
            screens: {
                xs: '480px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            fontSize: {
                sm: [
                    '10px',
                    {
                        lineHeight: '12px',
                        fontWeight: '400',
                    },
                ],
                md: [
                    '14px',
                    {
                        lineHeight: '16px',
                        fontWeight: '500',
                    },
                ],
            },
        },
    },
    plugins: [],
};
export default config;
