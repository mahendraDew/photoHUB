import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { HeroSection } from '../../components/landing/heroSection'
import { FeaturesSection } from '../../components/landing/featureSection'
import { FaqSection } from '@/components/landing/FAQ'
import CtaSection from '@/components/landing/CTA'
import { InfiniteMovingCardsDemo } from '@/components/landing/ImgGallery'

export default function LandingPage() {
  return (
    // <div className="min-h-screen flex flex-col ">
    //   {/* <header className="py-6 px-4 sm:px-6 lg:px-8">
    //     <div className="container mx-auto flex justify-between items-center">
    //       <div className="flex items-center space-x-2">
    //         <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
    //           <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    //           </svg>
    //         </div>
    //         <span className="text-xl font-bold">PhotoEdit</span>
    //       </div>
    //       <nav className="hidden md:flex space-x-4">
    //         <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
    //         <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
    //         <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
    //       </nav>
    //       <Button>Sign Up</Button>
    //     </div>
    //   </header> */}

    //   <main className="flex-grow">
    //     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
    //       <div className="container mx-auto text-center">
    //         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
    //           Your Photos, <span className="text-blue-600">Perfected</span>
    //         </h1>
    //         <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
    //           Organize, edit, and share your photos with our powerful and intuitive photo library and editor.
    //         </p>
    //         <div className="flex justify-center space-x-4">
    //           <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
    //           <Button size="lg" variant="outline">Learn More</Button>
    //         </div>
    //       </div>
    //     </section>

    //     <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
    //       <div className="container mx-auto">
    //         <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
    //         <div className="grid md:grid-cols-3 gap-8">
    //           {[
    //             { title: "Smart Organization", description: "AI-powered tagging and sorting for effortless photo management." },
    //             { title: "Advanced Editing Tools", description: "Professional-grade tools for perfect photos every time." },
    //             { title: "Cloud Sync", description: "Access your photos from anywhere, on any device." }
    //           ].map((feature, index) => (
    //             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
    //               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
    //               <p className="text-gray-600">{feature.description}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>

    //     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    //       <div className="container mx-auto flex flex-col md:flex-row items-center">
    //         <div className="md:w-1/2 mb-8 md:mb-0">
    //           <Image
    //             src="/placeholder.svg"
    //             alt="PhotoEdit App Interface"
    //             width={600}
    //             height={400}
    //             className="rounded-lg shadow-lg"
    //           />
    //         </div>
    //         <div className="md:w-1/2 md:pl-12">
    //           <h2 className="text-3xl font-bold mb-4">Intuitive Editing Experience</h2>
    //           <p className="text-gray-600 mb-6">
    //             Our user-friendly interface makes photo editing a breeze. From basic adjustments to advanced 
    //             retouching, achieve professional results with just a few clicks.
    //           </p>
    //           <Button>Try It Now</Button>
    //         </div>
    //       </div>
    //     </section>

    //     <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
    //       <div className="container mx-auto text-center">
    //         <h2 className="text-3xl font-bold mb-12">Simple Pricing</h2>
    //         <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8">
    //           {[
    //             { name: "Basic", price: "Free", features: ["5GB Storage", "Basic Editing Tools", "Mobile App Access"] },
    //             { name: "Pro", price: "$9.99/mo", features: ["50GB Storage", "Advanced Editing Tools", "Cloud Sync", "Priority Support"] }
    //           ].map((plan, index) => (
    //             <div key={index} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
    //               <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
    //               <p className="text-4xl font-bold mb-6">{plan.price}</p>
    //               <ul className="text-left mb-8">
    //                 {plan.features.map((feature, fIndex) => (
    //                   <li key={fIndex} className="flex items-center mb-2">
    //                     <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    //                     </svg>
    //                     {feature}
    //                   </li>
    //                 ))}
    //               </ul>
    //               <Button className="w-full">{plan.name === "Basic" ? "Sign Up" : "Go Pro"}</Button>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>

    //     <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
    //       <div className="container mx-auto text-center">
    //         <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
    //         <p className="mb-8">Join thousands of happy users and start perfecting your photos today.</p>
    //         <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Sign Up Now</Button>
    //       </div>
    //     </section>
    //   </main>

    //   {/* <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
    //     <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    //       <div className="mb-4 md:mb-0">
    //         <span className="text-xl font-bold">PhotoEdit</span>
    //       </div>
    //       <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
    //         <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
    //         <Link href="#" className="hover:text-gray-300">Terms of Service</Link>
    //         <Link href="#" className="hover:text-gray-300">Contact Us</Link>
    //       </nav>
    //     </div>
    //   </footer> */}
    // </div>
    <div>
      <HeroSection />
      <InfiniteMovingCardsDemo />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}