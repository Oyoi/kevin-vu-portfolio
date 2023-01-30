import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '@/components/Skills'
import Projects from '../components/Projects'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className = 'z-0 bg-[#0f0f10] text-white h-screen snap-y snap-proximity overflow-y-scroll overflow-x-hidden scrollbar-track-slate-500/30 scrollbar-thumb-white/50 scrollbar-thin'>
      <Head>
        <title>Kevin Kim Vu Portfolio</title>
        <link rel = 'icon' href = '/favicon.png' />
      </Head>
      <Header />
      <section id = 'hero' className = 'snap-center'>
        <Hero />
      </section>
      <section id = 'about' className = 'snap-center'>
        <About />
      </section>
      <section id = 'skills' className = 'snap-center'>
        <Skills />
      </section>
      <section id = 'projects' className = 'snap-center'>
        <Projects />
      </section>
      <section id = 'contact'>

      </section>
      
      <Footer/>

    </div>
  )
}