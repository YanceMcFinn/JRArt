import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'],
className: 'text-main-color' })

export const metadata = {
  title: 'Jan Roppo Art',
  description: 'The art of Jan Roppo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}