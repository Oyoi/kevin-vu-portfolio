import React from 'react'
import Image from 'next/image';
import { Card } from "@nextui-org/react";

type Props = {
    projectName:string;
    projectDescription:string;
    usedTech:string[];
    imgSrc:any;
}

export default function ProjectCard({ projectName, projectDescription,
    usedTech, imgSrc }: Props) {
    return(
    <article className = 'flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 p-12 snap-center hover:opacity-100 opacity-60 '>
        <div> 
            <Card
            isPressable
            className = 'z-30'
            isHoverable
            variant="bordered"
            css={{ 
            w: "520px",
            h:"520px",
            background: '$accents9' }} >     
            <Card.Body css={{ w: "520px", h:"200px" }}> 
                <Image src = {imgSrc} alt = ' ' className = 'w-[520px] rounded-lg h-[300px] object bg-cover object-center' />   
                <div className = 'pt-1 text-white font-bold text-xl border-t-2 border-white'>
                    &nbsp;{projectName}
                </div>
                <div className = 'pt-1 text-white'>
                    {usedTech.map((tech) => (
                        <span key = {tech} className = 'ml-1 inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            {tech}
                        </span>))}
                </div>
              <div className ='text-white px-1 text-justify'>
                {projectDescription}
              </div>
            </Card.Body>
            </Card>
        </div>
    </article>
  )
}