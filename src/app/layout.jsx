import localFont from 'next/font/local'
import './styles/globals.css'
import Navbar from '@/components/navbar'
import { ClerkProvider } from '@clerk/nextjs'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata = {
  title: 'Sharejson',
  icons: [{ rel: 'icon', url: '/logo-app.svg' }],
  description: 'Using Next.js and Clerk authentication'
}

export default function RootLayout ({ children }) {
  return (
    <ClerkProvider dynamic>
      <html lang='en'>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
