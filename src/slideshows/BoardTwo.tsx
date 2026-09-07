import { JeopardyBoard } from "../components/JeopardyBoard"
import type { Config } from "../types"

import opm from '../assets/record-1pm.wav'
import shika from '../assets/record-shika.wav'
import infinite from '../assets/recorder-is.wav'
import kaibutsu from '../assets/recorder-kaibutsu.wav'
import akiba from '../assets/recorder-akiba.wav'

const BOARD_2_CONFIG = {
    key: 'board2',
    baseValue: 200,
    categories: [{
        name: 'Puddi\'s Anilist Season 2',
        questions: [
            {
                question: 'Imagine the whiplash you get from going from season 1 of this to season 2 in terms of pacing, animation quality, etc',
                answer: "Kisekoi Season 2"
            },
            {
                question: 'i prefer not to speak. if i speak, i am in big trouble.',
                answer: 'Frieren Season 2'
            },
            {
                question: '+16 fu',
                answer: 'Mahjong Soul Kan!!'
            },
            {
                question: 'TWO guns? in THIS economy?',
                answer: 'Sword Art Online II'
            },
            {
                question: "i saw a post that said the wii u was retro now and i'm not okay with that",
                answer: 'NEW GAME!!',
            },
        ],
    }, {
        name: 'Spreadsheet Says...',
        questions: [
            {
                question: 'heck',
                answer: 'Helck'
            },
            {
                question: 'clean underwear',
                answer: 'New PANTY & STOCKING with GARTERBELT',
            },
            {
                question: 'I asked a hot blonde out AND SHE SAID YES???',
                answer: 'Our Dating Story: The Experienced You and The Inexperienced Me',
            },
            {
                question: 'alcoholism is good, actually',
                answer: 'Catch Me at the Ballpark!'
            },
            {
                question: 'this was on the atre wall when puddi visited japan last so we have to watch it',
                answer: 'THE IDOLM@STER Million Live!'
            },

        ]
    },
    {
        name: "What's That Song?",
        questions: [
            {
                question: <audio controls style={{ 'width': '50%' }}>
                    <source src={opm} type="audio/wav" />
                </audio>,
                answer: 'One Punch Man'
            },
            {
                question: <audio controls style={{ 'width': '50%' }}>
                    <source src={kaibutsu} type="audio/wav" />
                </audio>,
                answer: 'My Little Monster',
            },
            {
                question: <audio controls style={{ 'width': '50%' }}>
                    <source src={infinite} type="audio/wav" />
                </audio>,
                answer: 'Infinite Stratos'
            },
            {
                question: <audio controls style={{ 'width': '50%' }}>
                    <source src={akiba} type="audio/wav" />
                </audio>,
                answer: 'Akiba Maid War'
            },
            {
                question: <audio controls style={{ 'width': '50%' }}>
                    <source src={shika} type="audio/wav" />
                </audio>,
                answer: 'My Deer Friend Nokotan'
            },
        ]
    }, {
        name: "🍞 de ✌️",
        questions: [
            {
                question: '🀄2️⃣💖',
                answer: 'Love, Chunibyo & Other Delusions (Chu2Koi)',
            },
            {
                question: '🥊📉',
                answer: 'Punch Line',
            },
            {
                question: <p>
                    👧👧👧👧👧👧👧👧👧👧<br />
                    👧👧👧👧👧👧👧👧👧👧<br />
                    👧👧👧👧👧👧👧👧👧👧<br />
                    👧👧👧👧👧👧👧👧👧👧<br />
                    👧👧👧👧👧👧👧👧👧👧<br />
                    👧👧👧👧👧👧👧👧👧👧<br />
                    👧👧👧👧👧👧👧👧👧👧<br />
                    👧👧👧👧👧👧👧👧👧👧<br />
                    👧👧👧👧👧👧👧👧👧👧<br />
                    👧👧👧👧👧👧👧👧👧👧
                </p>,
                answer: '100 GFs'
            },
            {
                question: '🧝🤥',
                answer: 'Elfen Lied'
            },
            {
                question: '📈',
                answer: 'Redline'
            },
        ]
    }, {
        name: 'Before & Now & After',
        questions: [
            {
                question: "Girl with a sword fights fascism (or is it fashionism?) with the powers of gag comedy.",
                answer: 'Akame ga Kill la Kill Me Baby',
            },
            {
                question: 'Morbid freedom inside a morbid amusement park, featuring anthropomorphized rocks.',
                answer: 'Zom 100: Bucket List of the Deadman Wonderland of the Lustrous'
            },
            {
                question: "A very cool girlfriend and a sexy android fall in love with a boy with yellow hair.",
                answer: 'Shikimori\'s Not Just a Cutie Honey Lemon Soda',
            },
            {
                question: 'Beastiality bait meets furry bait meets incest bait (but they\'re not blood related, so it\'s okay).',
                answer: 'My Life as Inukai\'s Dog Days With My Stepsister'
            },
            {
                question: "The Nasuverse's Kyoani Space Adventure?",
                answer: "Kara no Kyoukai no Kanata no Astra",
            },
        ]
    }]
} as const satisfies Config

export const BoardTwo = () => {
    return <JeopardyBoard config={BOARD_2_CONFIG} key={BOARD_2_CONFIG.key} />
}
