import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CtaSection () {
  return (
    <div className='w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
            Transform Your Photos with Ease
            </h2>
            <p className='mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            Create stunning galleries and edit your photos with our intuitive tools. 
            Perfect for photographers, artists, and everyone who loves capturing moments.
            </p>
          </div>
          <Link
            href='#'
            className='inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-8 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
          >
            Get Stated
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </div>
    </div>
  )
}
