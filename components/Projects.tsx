import React from 'react'
import Link from 'next/link'
import ProjectCard from './ProjectCard'
import rsmp from '../images/ranter.png'
import knnImage from '../images/KNN.png'
import DClassImage from '../images/DClass.png'
import kvPort from '../images/kvport.png'

type Props = {} 

export default function Projects({}: Props) {
  return (
     <div className = 'z-0 flex flex-col relative h-screen text-center md;text-center md:flex-row px-10 justify-evenly mx-auto items-center scroll-smooth '>
        <h1 className = 'absolute top-24 uppercase tracking-[8px] text-white text-2xl'>
        Projects
        </h1>
         <h3 className = 'absolute top-48 text-lg text-white tracking-[3px] font-semibold hidden md:inline'>
            Click/Tap any project to view the source code
        </h3>
        <div className = 'z-10 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-slate-500/30 scrollbar-thumb-white/50 scrollbar-thin'>
            <Link href = 'https://github.com/Sunny234/reimplement_social_media_platform' target = '_blank'>
            <ProjectCard 
            imgSrc = { rsmp }
            projectName = 'Reimplement Social Media Platform'
            projectDescription='Utilized Twitter&apos;s API to reimplement the post tweet feature to allow users to post longer extended messages. Created a Full Stack app utilizing various technologies: React for frontend, AWS Amplify for backend, and Postman for testing endpoints.'
            usedTech = {['AWS Amplify', 'JavaScript', 'React','Python', 'HTML', 'CSS']} />
            </Link>
            <Link href = 'https://github.com/Oyoi/Digit-Classifier' target = '_blank'>
            <ProjectCard 
            imgSrc = { DClassImage }
            projectName = 'Digit Classifier'
            projectDescription='Created a convolution neural network using the TensorFlow2 library and trained our model using the MNIST dataset. Used the trained model to recognize and classify numeric digits.'
            usedTech = {['Python']} />
            </Link>
            <Link href = 'https://github.com/Oyoi/KNN-Implementation' target = '_blank'>
            <ProjectCard 
            imgSrc = { knnImage }
            projectName = 'KNN Classifier'
            projectDescription='Implemented KNN algorithm to classifer the gender of a given name. The name is classification based on recorded data from the Gender by Name Data Set from the UCI Machine Learning Repository.'
            usedTech = {['C++']} />
            </Link>
            <Link href = 'https://github.com/Oyoi/kevin-vu-portfolio' target = '_blank'>
            <ProjectCard
            imgSrc = { kvPort }
            projectName = 'Portfolio Website'
            projectDescription='Created a dynamic frontend and UI components using Next.js framework. Stylized UI componenets using tailwind css framework. Animated some components using Framer Motion library.'
            usedTech = {['TypeScript', 'Next.js', 'CSS']} />
            </Link>
        </div>
        <div className = 'absolute border-x-0 border-y-[12px] border-white/63 max-w-full w-full h-[600px] bg-sky-500 bg-opacity-[47%]'/> 
    </div>
  )
}