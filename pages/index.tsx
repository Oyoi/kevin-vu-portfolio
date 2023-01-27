import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className = 'bg-[#0f0f10] text-white h-screen '>
      <Head>
        <title>Kevin Kim Vu Portfolio</title>
        <link rel = 'icon' href = '/favicon.png' />
      </Head>
      <Header />
      <section id = 'hero'>
        <Hero />
      </section>
      {/* About */}
      <section id = 'about'>
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
      
    </div>
  )
}