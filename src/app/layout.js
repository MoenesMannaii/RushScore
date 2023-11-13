import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './constants/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RushScore',
  description: 'RushScore by Moenes Mannai: Your go-to for live football excitement!',
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
