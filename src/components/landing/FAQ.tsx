'use client'

import { HelpCircle } from "lucide-react"

export function FaqSection () {
  return (
    <div id='faq' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">have some questions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get answers for your answers
          </p>
        </div>
        <div className='grid gap-4 md:gap-8 max-w-3xl mx-auto mt-16 sm:mt-20 lg:mt-24 '>
          {[
            {
              question: 'How many photos can I upload?',
              answer:
                `Please dont go overboard with the photos — Ive got limited memory, and we wouldnt want me to crash under the weight of your selfies. Basic users can stick to 100 photos (thank you!).`
            },
            {
              question: 'Can I edit my photos after uploading them?',
              answer:
                'Of course! Uploading is just the start of our bonding journey. Feel free to crop, filter, or completely butcher your photos into masterpieces. We wont judge your artistic choices... much.'
            },
            {
              question: 'Do you offer tools for creating collages or photo books?',
              answer:
                'Absolutely! You can create collages that will make your friends jealous and photo books that no one will flip through after the first week. But hey, its the thought that counts, right?'
            },
            {
              question: 'Can I download my edited photos?',
              answer:
                'Yes, of course! Why else would we let you edit them? Download them, flaunt them, or frame them if you must — just dont tell us if you used Comic Sans on the text overlay.'
            }
          ].map((faq, index) => (
            <div key={index} className='space-y-2'>
              <h3 className='text-xl font-bold flex items-center'>
                <HelpCircle className='w-5 h-5 mr-2 text-primary' />
                {faq.question}
              </h3>
              <p className='text-gray-500 dark:text-gray-400'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
