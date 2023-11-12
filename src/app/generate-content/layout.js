"use client"
import { ContentContextProvider } from "@/context/contentContext";

export default function GenerateContentLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ContentContextProvider>
                    {children}
                </ContentContextProvider>
            </body>
        </html>
    )
}
