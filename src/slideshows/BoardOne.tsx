import { JeopardyBoard } from "../components/JeopardyBoard"
import type { Config } from "../types"

import lyco from '../assets/zoom1mix.mp4';
import blends from '../assets/zoom2mix.mp4';
import sxs from '../assets/zoom3mix.mp4';
import city from '../assets/zoom4mix.mp4';
import makeine from '../assets/zoom5mix.mp4';

const BOARD_1_CONFIG = {
    key: 'board1',
    baseValue: 100,
    categories: [
        {
            name: 'Puddi\'s Anilist',
            questions: [
                {
                    question: 'you THOUGHT? you fuckin THOUGHT?',
                    answer: 'And you thought there is never a girl online?'
                },
                {
                    question: "they're eating the inus, they're eating the nekos",
                    answer: 'Inugami-san to Nekoyama-san',
                },
                {
                    question: 'propaganda by big dr. pepper',
                    answer: 'Heaven\'s Memo Pad'
                },
                {
                    question: 'i like shows where you can tell how important a character is by whether or not they have colorful hair or not',
                    answer: 'Horimiya'
                },
                {
                    question: "did y'all know this has a live-action adaptation",
                    answer: 'Recently, My Sister is Unusual'
                },
            ]
        },
        {
            name: 'They Made It',
            questions: [
                {
                    question: <div>
                        <p>OP - Linked Horizon</p>
                        <p>ED - Youko Hisaka</p>
                    </div>,
                    answer: 'Attack on Titan'
                },
                {
                    question: <div>
                        <p>OP - Kenshi Yonezu</p>
                        <p>ED - Kenshi Yonezu, Hikaru Utada</p>
                    </div>,
                    answer: 'Chainsaw Man: Reze Arc'
                },
                {
                    question: <div>
                        <p>OP - ClariS</p>
                        <p>ED - TrySail</p>
                    </div>,
                    answer: 'Eromanga Sensei'
                },
                {
                    question: <div>
                        <p>OP - [Alexandros]</p>
                        <p>ED - Tomoyo Takayanagi</p>
                    </div>,
                    answer: 'Uma Musume: Cinderella Gray',
                },
                {
                    question: <div>
                        <p>OP - Saori Gotou, Nozomi Yamamoto, Yoshino Nanjou, Kotori Koiwai, Ayane Sakura</p>
                        <p>ED - Momoiro Clover Z (as Momokurotei Ichimon)</p>
                    </div>,
                    answer: 'Joshiraku'
                },
            ],
        },
        {
            name: "What's that OP/ED?",
            questions: [
                {
                    question: <video controls>
                        <source src={blends} type="video/mp4" />
                    </video>,
                    answer: 'Blend S',
                },
                {
                    question: <video controls>
                        <source src={city} type="video/mp4" />
                    </video>,
                    answer: 'City The Animation',
                },
                {
                    question: <video controls>
                        <source src={lyco} type="video/mp4" />
                    </video>,
                    answer: 'Lycoris Recoil'
                },
                {
                    question: <video controls>
                        <source src={sxs} type="video/mp4" />
                    </video>,
                    answer: 'Servant x Service'
                },
                {
                    question: <video controls>
                        <source src={makeine} type="video/mp4" />
                    </video>,
                    answer: 'Makeine'
                },
            ]
        }, {
            name: 'Seasons Past',
            questions: [
                {
                    question: <p>Chainsaw Man<br />Bocchi the Rock<br />Blue Lock</p>,
                    answer: 'Fall 2022'
                },
                {
                    question: <p>Lazarus<br />Kowloon Generic Romance<br />Please Put Them On, Takamine-san</p>,
                    answer: 'Spring 2025',
                },
                {
                    question: <p>Sword Art Online<br />Kokoro Connect<br />Humanity Has Declined</p>,
                    answer: 'Summer 2012',
                },
                {
                    question: <p>Fullmetal Alchemist: Brotherhood<br />K-On!<br />Asura Cryin'</p>,
                    answer: 'Spring 2009'
                },
                {
                    question: <p>Kaguya-sama: Love is War<br />The Rising of the Shield Hero<br />Virtual-san is Looking</p>,
                    answer: 'Winter 2019'
                },

            ]
        }, {
            name: 'Before & After',
            questions: [
                {
                    question: 'This sci-fi about supernatural human assassins is inspired by a vocaloid song.',
                    answer: 'Darker than Black Rock Shooter'
                },
                {
                    question: "This mobile game spinoff is a dramatic coming-of-age story. They've both got music!",
                    answer: 'The Idolmaster Cinderella Girls Band Cry',
                },
                {
                    question: 'This 1980s love triangle movie is arguably a romance isekai.',
                    answer: 'Macross: Do You Remember Love Flops'
                },
                {
                    question: "Someone wrote this story about a psychic kid running real fast.",
                    answer: 'Mob Psycho 100 Meters',
                },
                {
                    question: "His less popular series might be the biggest mistake in anime club history.",
                    answer: "Accel World's End Harem",
                },
            ]
        }]
} as const satisfies Config

export const BoardOne = () => {
    return <JeopardyBoard config={BOARD_1_CONFIG} key={BOARD_1_CONFIG.key} />
}
