"use client"

import '@/app/globals.css'
import { Image, Sparkles } from 'lucide-react'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SidebarLinks from '@/components/SidebarLinks'

import { usePathname } from 'next/navigation'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
      <Nav />
        {pathname !== '/' ? (
      <main className='grid grid-rows-[auto_1fr] md:grid-rows-none md:grid-cols-[12rem_auto] '>
          <aside className='md:my-6'>
            <SidebarLinks
              links={[
                {
                  icon: <Image className='w-5 h-5' />,
                  label: 'Photos',
                  path: '/photos'
                },
                {
                  icon: <Sparkles className='w-5 h-5' />,
                  label: 'Creations',
                  path: '/creations'
                }
              ]}
            />
          </aside>
        <div>{children}</div>
      </main>
        ): (
          <div>{children}</div>
        )}
      <Footer />
    </div>
  )
}
