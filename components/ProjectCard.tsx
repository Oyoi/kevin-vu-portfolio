import React from 'react'
import { Card, Text, Modal } from "@nextui-org/react";

type Props = {
    projectName:string;
    projectDescription:string;
    usedTech:string[];
}

export default function ProjectCard({ projectName, projectDescription,
    usedTech }: Props) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
    setVisible(false)}
    return (
    <article className = 'flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 p-12 snap-center hover:opacity-100 opacity-60 '>
        <div>
            <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open = {visible}
            onClose = {closeHandler}>
            <Modal.Header>
        
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            </Modal> 
            <Card
            onPress={ handler }
            className = 'z-30'
            isPressable
            isHoverable
            variant="bordered"
            css={{ 
            w: "520px",
            h:"520px",
            background: '$accents9' }} >
            <Card.Image src = 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257070/file-type-svelte-icon-md.png' alt = ' ' className = 'w-32 h-32 rounded-lg lg:w-[200px] lg:h-[250px] object bg-cover object-center' 
            css = {{ w: "520px", h:"300px" }}/>
            <Card.Body css={{ w: "520px", h:"200px" }}>
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