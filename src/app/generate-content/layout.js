"use client"
import { ContentContextProvider } from "@/context/contentContext";

export default function GenrateContentLayout({ children }) {
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
