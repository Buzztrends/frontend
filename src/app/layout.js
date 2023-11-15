"use client";
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight:['400','500','600','700'], variable: '--font-poppins' });
import './globals.css';
import { SidebarContextProvider } from "@/context/sidebarContext";
import { ContentContextProvider } from "@/context/contentContext";



// export const metadata = {
//   title: 'Buzz Trends',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <ContentContextProvider>
      <SidebarContextProvider>
        <html lang="en">
          <body className={poppins.className}>
            {children}</body>
        </html>
      </SidebarContextProvider>
    </ContentContextProvider>
  )
}
