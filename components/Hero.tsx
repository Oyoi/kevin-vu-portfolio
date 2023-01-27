import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello there, I'm Kevin Vu",
            "CSUSB Alumni",
            "The guy who never sleeps"
        ],
        loop: true,
        delaySpeed: 1500
    });
    return (
    <div>
        <h1>
        <span>{ text }</span>
        <Cursor cursorColor = '#0c4a6e' />
        </h1>
    </div>
  )
}