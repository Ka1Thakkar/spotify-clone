import Sidebar from '@/components/sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProviders'
import UserProvider from '@/providers/userProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserID from '@/actions/getSongsByUserID'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify CLone created by Kavan Thakkar',
}

export const reavlidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserID();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
              <Sidebar songs={userSongs}>
                {children}
              </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
