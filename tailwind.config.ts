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
                },
                gray: {
                    200: "#C1C9E5"
                }
            },
        },
    },
    plugins: [],
};
export default config;
