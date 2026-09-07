import React from "react"
import type { SlideshowHandle } from "../components/Slideshow"
import { Slideshow } from "../components/Slideshow"

export const IntermissionOne = ({
    slideshowRef
}: {
    slideshowRef: React.Ref<SlideshowHandle>
}) => {
    return <Slideshow ref={slideshowRef} slides={[
        <SlideOne />,
        <SlideTwo />,
        <SlideThree />,
        <SlideThreeAnswers />,
        <SlideFour />,
        <SlideFourAnswers />,
        <SlideFive />,
        <SlideFiveAnswers />
    ]} />
}

const SlideOne = () => {
    return <>
        <h2>Intermission</h2>
        <h4>The Battle Zone</h4>
    </>
}

const SlideTwo = () => {
    return <>
        <h2>Rules:</h2>
        <ul className="left-align">
            <li>i will give you a prompt - everyone will take turns giving an answer to that prompt</li>
            <li>you have 20 seconds to come up with an answer. if you can't, or if your answer is wrong, you lose one life - you start with two. (i.e., you're eliminated on your second wrong guesses)</li>
            <li>after revealing each prompt, ordering is drafted in reverse point score order</li>
            <li>you'll get points depending on how you place each round:</li>
            <ul>
                <li>1st: 500 points</li>
                <li>2nd: 300 points</li>
                <li>3rd: 100 points</li>
                <li>4th: 0 points</li>
                <li>If every answer is given, the remaining players all get 1st place</li>
            </ul>

        </ul>
    </>
}

const SlideThree = () => {
    return <>
        <h2>Category:</h2>
        <h2>Emoji in brain's base</h2>
        <p>The full name of the emoji is required.</p>
        <p>(Total: 81)</p>
    </>
}

const SlideThreeAnswers = () => {
    return < div className="scrolling grid-3">
        <span>2damoon</span>
        <span>BATHOING</span>
        <span>Boeing757</span>
        <span>CoolTorn</span>
        <span>CoolnalDesai</span>
        <span>FlaminFace</span>
        <span>FrogThink</span>
        <span>HeyLibs</span>
        <span>Hyper757</span>
        <span>Jokey</span>
        <span>KwakChamp</span>
        <span>KwakTea</span>
        <span>NYAA</span>
        <span>NotLikeDesch</span>
        <span>OhMyTornDog</span>
        <span>Ralph</span>
        <span>RalphMelty</span>
        <span>ResidentSkidder</span>
        <span>Robster</span>
        <span>ThinkTorn</span>
        <span>ThoughTs</span>
        <span>TohruGun</span>
        <span>TohruREEE</span>
        <span>YareYareDaze</span>
        <span>ZeroJ</span>
        <span>ahoge</span>
        <span>atra</span>
        <span>blob</span>
        <span>blobsweat</span>
        <span>body12</span>
        <span>brain1</span>
        <span>brain2</span>
        <span>brain4</span>
        <span>brain5</span>
        <span>comeonboi</span>
        <span>concernfrog</span>
        <span>dansdog</span>
        <span>degenga</span>
        <span>dograve</span>
        <span>drakebad</span>
        <span>drakegood</span>
        <span>fbslightsmile</span>
        <span>fidget_spinner</span>
        <span>fuckntr</span>
        <span>gentlejerk</span>
        <span>googlethink</span>
        <span>isthatjokey</span>
        <span>isthatseibah</span>
        <span>jdp</span>
        <span>jerkoff</span>
        <span>joff</span>
        <span>jr</span>
        <span>kevin</span>
        <span>lebron1</span>
        <span>lebron2</span>
        <span>partyparrot</span>
        <span>peepoAngry</span>
        <span>peepoEZ</span>
        <span>peepoSad</span>
        <span>peepoWeird</span>
        <span>peepoga</span>
        <span>peepoggers</span>
        <span>peoplehands</span>
        <span>pepeg</span>
        <span>pepega</span>
        <span>pepelaugh</span>
        <span>pepeoff</span>
        <span>ralphmask</span>
        <span>seibah</span>
        <span>sleepo</span>
        <span>spong</span>
        <span>thinkspin</span>
        <span>tj</span>
        <span>torn3</span>
        <span>typing</span>
        <span>weirdShrek</span>
        <span>weirdga</span>
        <span>wish</span>
        <span>wokedewey</span>
        <span>worryswipe</span>
        <span>yum</span>
    </div>
}

const SlideFour = () => {
    return <>
        <h2>Category:</h2>
        <h2>Gundam TV Series</h2>
        <p>Specifically, it must be listed as a "TV Series" in the Wikipedia article for Gundam</p>
        <p>(Total: 26)</p>
    </>
}

const SlideFourAnswers = () => {
    return <div className="scrolling grid-3">
        <span>Mobile Suit Gundam</span>
        <span>Mobile Suit Zeta Gundam</span>
        <span>Mobile Suite Gundam ZZ</span>
        <span>Mobile Suite SD Gundam</span>
        <span>Mobile Suite Victory Gundam</span>
        <span>Mobile Fighter G Gundam</span>
        <span>Mobile Suit Gundam Wing</span>
        <span>After War Gundam X</span>
        <span>Turn A Gundam</span>
        <span>Mobile Suit Gundam SEED</span>
        <span>Superior Defender Gundam Force</span>
        <span>Mobile Suit Gundam SEED Destiny</span>
        <span>Mobile Suit Gundam 00</span>
        <span>Mobile Suit Gundam Unicorn</span>
        <span>SD Gundam Sangokuden Brave Battle Warriors</span>
        <span>Mobile Suit Gundam AGE</span>
        <span>Gundam Build Fighters</span>
        <span>Mobile Suit Gundam-san</span>
        <span>Gundam Reconguista in G</span>
        <span>Gundam Build Fighters Try</span>
        <span>Mobile Suit Gundam: The Origin</span>
        <span>Mobile Suit Gunda: Iron-Blooded Orphans</span>
        <span>Gundam Build Divers</span>
        <span>Mobile Suit Gundam: The Witch from Mercury</span>
        <span>Mobile Suit Gundam GQuuuuuuX</span>
        <span>Mobile Suit Gundam RG: XARX-ZERO</span>
    </div>
}

const SlideFive = () => {
    return <>
        <h2>Category:</h2>
        <h2>Monogatari Series Prefixes</h2>
        <p>Specifically, the prefix must be listed in the Wikipedia article for the List of Monogatari novels</p>
        <p>(Total: 26)</p>
    </>
}

const SlideFiveAnswers = () => {
    return <div className="scrolling grid-3">
        <span>Bake</span>
        <span>Kizu</span>
        <span>Nise</span>
        <span>Neko</span>
        <span>Kabuki</span>
        <span>Hana</span>
        <span>Otori</span>
        <span>Oni</span>
        <span>Koi</span>
        <span>Tsuki</span>
        <span>Koyomi</span>
        <span>Owari</span>
        <span>Zoku Owari</span>
        <span>Oroka</span>
        <span>Waza</span>
        <span>Nade</span>
        <span>Musubi</span>
        <span>Shinobu</span>
        <span>Yoi</span>
        <span>Amari</span>
        <span>Oogi</span>
        <span>Shino</span>
        <span>Ikusa</span>
        <span>Tsugi</span>
        <span>Tori</span>
        <span>Ootori</span>
    </div>
}
