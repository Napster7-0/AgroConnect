import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "AgroConnect - Révolutionnez votre agriculture",
  description:
    "La plateforme numérique qui connecte les agriculteurs, les experts et les entreprises agroalimentaires au Cameroun.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'