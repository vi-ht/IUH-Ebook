import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <head>
        <title>IUH Ebook | Landing Page</title>
        <meta name='description' content='Description' />
      </head>
      
      {children}
    </html >

  )
}
