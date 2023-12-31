import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'King\'s Games Dashboard',
  description: 'King\'s Games Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ClerkProvider>
     <html lang="es">
      <body className={inter.className}>
        <ToastProvider />
        <ModalProvider />
        {children}
      </body>
    </html>
   </ClerkProvider>
  )
}
