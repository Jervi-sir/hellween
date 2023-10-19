import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/public/catalog/view/javascript/bootstrap/css/bootstrap.min.css'
import '@/public/catalog/view/javascript/font-awesome/css/font-awesome.min.css'

import '@/public/catalog/view/javascript/bootstrap/css/bootstrap.min.css'
import '@/public/catalog/view/javascript/font-awesome/css/font-awesome.min.css'
import '@/public/catalog/view/theme/mahardhi/stylesheet/mahardhi/mahardhi-font.css'
import '@/public/catalog/view/theme/mahardhi/stylesheet/mahardhi/animate.min.css'
//import '@/public/catalog/view/theme/mahardhi/stylesheet/mahardhi/owl.carousel.min.css'
//import '@/public/catalog/view/theme/mahardhi/stylesheet/mahardhi/owl.theme.default.min.css'
import '@/public/catalog/view/javascript/jquery/magnific/magnific-popup.css'
import './globals.css'

import '@/public/catalog/view/theme/mahardhi/stylesheet/stylesheet.css'
import '@/public/catalog/view/javascript/jquery/swiper/css/swiper.min.css'
import '@/public/catalog/view/javascript/jquery/swiper/css/opencart.css'
//import '@/public/catalog/view/theme/mahardhi/stylesheet/mahardhi/jquery-ui.min.css'
import Header from './header'
import Loader from './components/loader';
import Footer from './footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hell Ween',
  description: 'Better shop for Halloween 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Creepster&amp;family=Outfit:wght@300;400;500;600;700&amp;display=swap"
        rel="stylesheet" />
      </head>
      <body className="common-home">
        {/*<Loader />*/}
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
