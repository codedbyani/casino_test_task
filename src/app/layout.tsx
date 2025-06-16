import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SideBar } from '@/components/organismes/SideBar';
import { Header } from '@/components/organismes/Header';
import { Footer } from '@/components/molecules/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
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
                <div className='mt-15 md:ml-15'>
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
