import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight:['400','500','600','700'], variable: '--font-poppins' });
import './globals.css'


export const metadata = {
  title: 'Buzz Trends',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}</body>
    </html>
  )
}
