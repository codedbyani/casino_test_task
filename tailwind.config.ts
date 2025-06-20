import { type Config } from 'tailwindcss';

const config: Config = {
    content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                blue: {
                    100: '#273344',
                    200: '#1C2E3D',
                    300: '#152535',
                    400: '#162231',
                    450: '#282F48',
                    500: '#10202D',
                    600: '#10212E',
                    700: '#0F70DC',
                    800: '#192C40',
                    900: '#253241',
                    950: '#1E2B38',
                },
                gray: {
                    100: '#C4C4C4',
                    200: '#C1C9E5',
                    300: '#66788C',
                    400: '#8898B0',
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
                        fontWeight: 400,
                    },
                ],
                md: [
                    '14px',
                    {
                        lineHeight: '16px',
                        fontWeight: 500,
                    },
                ],
                lg: [
                    '18px',
                    {
                        lineHeight: '20px',
                        fontWeight: 700,
                    },
                ],
            },
        },
    },
    plugins: [],
};
export default config;
