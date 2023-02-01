import React from 'react'
import SkillButton from '../components/SkillButton'

type Props = {}

export default function Skills({}: Props) {
  return (
     <div className = 'z-0 flex flex-col relative h-screen text-center md;text-center md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center scroll-smooth'>
        <h1 className = 'absolute top-24 uppercase tracking-[8px] text-white text-2xl'>
        Skills
        </h1>
        <h3 className = 'absolute top-48 text-lg text-white tracking-[3px] font-semibold hidden md:inline'>
            What I bring to the table
        </h3>
        <div className = 'absolute border-x-0 border-y-[6px] border-white/63 md:w-[500px] md:h-[500px] lg:w-[630px] lg:h-[630px]'/> 
        <div className = 'grid grid-cols-4 gap-3'>
            <SkillButton imgLink='https://img.icons8.com/color/512/c-plus-plus-logo.png' skillName = 'C++' proficiency = { 90 } />
            <SkillButton imgLink='https://img.icons8.com/color/512/python.png' skillName = 'Python' proficiency = { 85 } />
            <SkillButton imgLink='https://img.icons8.com/color/512/typescript.png' skillName = 'TypeScript' proficiency = { 80 } />
            <SkillButton imgLink='https://img.icons8.com/color/512/javascript.png' skillName = 'JavaScript' proficiency = { 70 } />
            <SkillButton imgLink='https://img.icons8.com/color/512/nextjs.png'  skillName = 'Next.js' proficiency = { 75 } />
            <SkillButton imgLink='https://ionicframework.com/docs/icons/logo-react-icon.png' skillName = 'React' proficiency = { 70 }/>
            <SkillButton imgLink='https://img.icons8.com/color/512/html-5.png' skillName = 'HTML' proficiency = { 80 } />
            <SkillButton imgLink='https://img.icons8.com/color/512/css3.png' skillName = 'CSS' proficiency = { 80 } />
            <SkillButton imgLink = 'https://img.icons8.com/color/512/amazon-web-services.png' skillName = 'AWS Amplify' proficiency = { 75 } />
            <SkillButton imgLink = 'https://img.icons8.com/color/512/git.png' skillName = 'Git' proficiency = { 75 } />
            <SkillButton imgLink = 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257070/file-type-svelte-icon-md.png' skillName = 'Svelte' proficiency = { 85 } />
            <SkillButton imgLink = 'https://img.icons8.com/fluency/512/node-js.png' skillName = 'Node.js' proficiency = { 80 } />
            <SkillButton imgLink = 'https://img.icons8.com/color/512/mysql-logo.png' skillName = 'MySQL' proficiency = { 70 } />
            <SkillButton imgLink = 'https://media.trustradius.com/product-logos/h3/JA/T1A83W5H538P.PNG' skillName = 'Postman' proficiency = { 75 } />
            <SkillButton imgLink = 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png' skillName = 'Java' proficiency = { 80 } />
            <SkillButton imgLink = 'https://img.icons8.com/color/512/visual-studio-code-2019.png' skillName = 'VSCode' proficiency = { 75 } />
        </div>
    </div>
  )
}