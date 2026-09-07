import React from "react"
import type { SlideshowHandle } from "../components/Slideshow"
import { Slideshow } from "../components/Slideshow"

export const FinalJeopuddi = ({
    slideshowRef
}: {
    slideshowRef: React.Ref<SlideshowHandle>
}) => {
    return <Slideshow ref={slideshowRef} slides={[
        <SlideOne />,
        <SlideTwo />,
        <SlideTwoFive />,
        <SlideThree />,
        <SlideFour />,
        <SlideFive />,
        <SlideSix />,
        <SlideSeven />,
    ]} />
}

const SlideOne = () => {
    return <>
        <h2>Final Jeopuddi</h2>
    </>
}

const SlideTwo = () => {
    return <>
        <h2>Wagers:</h2>
        <ul className="left-align">
            <li>Everyone make a wager! (Up to the number of points you have, or up to 2000 if you are negative)</li>
            <li>DM that wager to me.</li>
        </ul>
    </>
}

const SlideTwoFive = () => {
    return <>
        <h2>"name five anime"</h2>
    </>
}

const SlideThree = () => {
    return <>
        <h2>Rules:</h2>
        <ul className="left-align">
            <li>I individually asked Desch and Kyhz the following prompt with little to no context: <i>"name five anime"</i></li>
            <li>On the next slide, you will see a list of fifteen anime. Ten of those are from Desch/Kyhz, the remaining five are traps.</li>
            <li>Your goal: figure out which ones Desch/Kyhz responded with, avoiding the traps</li>
            <ul><li>Correct guess + attribution: +2 points</li>
                <li>Correct guess + wrong attribution: +1 point</li>
                <li>Skipped: 0 points. (You <strong>don't</strong> have to make a guess for all 15!)</li>
                <li>Wrong guess: -4 points</li></ul>
            <li>Scoring:</li>
            <ul><li>1st place: 2x wager</li><li>2nd place: 1x wager</li><li>3rd place: nothing</li><li>4th place -1x wager</li></ul></ul>
    </>
}

const SlideFour = () => {
    return <><div className="scrolling grid-3">
        <span>Hybrid x Heart<br /> </span>
        <span>Macross Frontier</span>
        <span>Golden Kamui</span>
        <span>Lucky Star<br /> </span>
        <span>The World God Only Knows</span>
        <span>Trinity Seven</span>
        <span>The Tatami Galaxy<br /> </span>
        <span>Full Metal Panic</span>
        <span>Gun x Sword</span>
        <span>Slam Dunk<br /> </span>
        <span>Your Lie in April</span>
        <span>Fate/strange Fake</span>
        <span>Charlotte<br /> </span>
        <span>Mazinger Z</span>
        <span>Seikon no Qwasar</span>
    </div><p> </p></>
}

const SlideFive = () => {
    return <><div className="scrolling grid-3">
        <span>Hybrid x Heart<br /> </span>
        <span>Macross Frontier</span>
        <span>Golden Kamui</span>
        <span>Lucky Star<br /> </span>
        <span>The World God Only Knows</span>
        <span>Trinity Seven</span>
        <span>The Tatami Galaxy<br /> </span>
        <span>Full Metal Panic</span>
        <span>Gun x Sword</span>
        <span>Slam Dunk<br /> </span>
        <span>Your Lie in April</span>
        <span>Fate/strange Fake</span>
        <span>Charlotte<br /> </span>
        <span>Mazinger Z</span>
        <span>Seikon no Qwasar</span>
    </div><p style={{ position: 'relative', top: '100px' }}>Ready...?</p></>
}

const SlideSix = () => {
    return <><div className="scrolling grid-3">
        <span><span className='green-text'>Hybrid x Heart</span><br />Desch</span>
        <span className="red-text">Macross Frontier<br /></span>
        <span><span className='green-text'>Golden Kamui</span><br />Kyhz</span>
        <span className="red-text">Lucky Star<br /></span>
        <span><span className='green-text'>The World God Only Knows</span><br />Kyhz</span>
        <span><span className='green-text'>Trinity Seven</span><br />Desch</span>
        <span className="red-text">The Tatami Galaxy</span>
        <span><span className='green-text'>Full Metal Panic</span><br />Desch</span>
        <span><span className='green-text'>Gun x Sword</span><br />Kyhz</span>
        <span><span className='green-text'>Slam Dunk</span><br />Kyhz</span>
        <span><span className='green-text'>Your Lie in April</span><br />Desch</span>
        <span className="red-text">Fate/strange Fake</span>
        <span><span className='green-text'>Charlotte</span> <br />Desch</span>
        <span><span className='green-text'>Mazinger Z</span><br />Kyhz</span>
        <span className="red-text">Seikon no Qwasar</span>
    </div><p style={{ position: 'relative', top: '100px' }}> </p></>
}


const SlideSeven = () => {
    return <><h1>The winner is...</h1><p>(i didn't code this part)</p></>
}
