import React from "react"
import type { SlideshowHandle } from "../components/Slideshow"
import { Slideshow } from "../components/Slideshow"

export const Intro = ({
    slideshowRef
}: {
    slideshowRef: React.Ref<SlideshowHandle>
}) => {
    return <Slideshow ref={slideshowRef} slides={[
        <SlideOne />,
        <SlideTwo />
    ]} />
}

const SlideOne = () => {
    return <>
        <h2>Welcome to puddi's brain base "anime" "quiz"</h2>
        <h4>(aka totally not YourAnimeList 2026)</h4>
    </>
}

const SlideTwo = () => {
    return <>
        <h2>Rules:</h2>
        <ul className="left-align">
            <li>don't make fun of my coding job. this was all by hand no ai and we appreciate hand-crafted art here</li>
        <li>two rounds + final jeopuddi, with intermission games in between</li>
        <li>get points for correct answers, lose points for wrong answers. if you're close enough you might get partial credit or not lose all your points</li>
        <li>dont be hypercompetitive</li>
        </ul>
    </>
}
