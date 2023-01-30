import { motion } from 'framer-motion'
import React from 'react'
import { Card, Text } from "@nextui-org/react";


type Props = {}

export default function ProjectCard({}: Props) {
  return (
    <article className = 'flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 p-10 snap-center mt-4'>
        <div>
            <Card
            className = 'z-30'
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "420px", mh:"520px" }} >
                <Card.Header
                css={{ mw: "420px",mh:"60px"}}>
                    <Text>
                        <h3>
                            Reimplement Social Media Platform
                        </h3>
                    </Text>
                </Card.Header>
                <Card.Divider />
                <Card.Image src = 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257070/file-type-svelte-icon-md.png' alt = ' ' className = 'w-32 h-32 rounded-lg lg:w-[200px] lg:h-[200px] object bg-cover object-center' 
                css={{ w: "420px", h:"260px" }}/>
                <Card.Divider />
                <Card.Body css={{ w: "420px", h:"200px" }}>
                    <Text>Project Card</Text>
                  <Text>A pressable card.</Text>
                </Card.Body>
            </Card>
        </div>
    </article>
  )
}