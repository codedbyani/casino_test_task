import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/pagination';
import { SideBar } from '@/components/organismes/SideBar';
import { Header } from '@/components/organismes/Header';
import '../styles/globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Casino App',
    description: 'Created for casino test task',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
                    rel='stylesheet'
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header />
                <SideBar />
                <div className='ml-15 pt-[75px] container'>
                    {children}
                </div>
            </body>
        </html>
    );
}
