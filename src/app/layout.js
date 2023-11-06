"use client"
import './globals.css'

import './../assets/app/dist/animate.css'
import './../assets/app/dist/aos.css'
import './../assets/app/dist/app.css'

import './../assets/swiper/swiper-bundle.min.css'

import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';

import { metadata } from '@/function';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginRoute = pathname === '/login' || pathname === '/signup';

  const renderHeader = !isLoginRoute && <Header />;
  const renderFooter = !isLoginRoute && <Footer />;

  return (
    <html lang="en">
      <head>

    
      </head>
      {/* className={inter.className} */}
      <body className={inter.className}>
    
      <div class="wrapper">
        {renderHeader}
          {children}
        {renderFooter}

      </div>

    </body>
    </html>
  )
}
