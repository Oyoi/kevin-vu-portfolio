import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className = 'z-0 bg-[#0f0f10] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-track-slate-500/30 scrollbar-thumb-white/50 scrollbar-thin'>
      <Head>
        <title>Kevin Kim Vu Portfolio</title>
        <link rel = 'icon' href = '/favicon.png' />
      </Head>
      <Header />
      <section id = 'hero' className = 'snap-center'>
        <Hero />
      </section>
      {/* About */}
      <section id = 'about' className = 'snap-center'>
        <About />
      </section>
      {/* Skills */}
      <section id = 'skills'>

      </section>
      {/* Project */}
      <section id = 'projects'>

      </section>
      {/* Contact Me */}
      <section id = 'contactme'>

      </section>
      
      <Footer/>

    </div>
  )
}