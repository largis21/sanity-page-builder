import "../styles/global.css"
import { ReactNode } from "react"

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    // todo Language
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
