import React from "react"
import type { SlideshowHandle } from "../components/Slideshow"
import { Slideshow } from "../components/Slideshow"

export const IntermissionTwo = ({
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
        <h4>The Battle Zone, Part 2</h4>
    </>
}

const SlideTwo = () => {
    return <>
        <h2>Rules:</h2>
        <ul className="left-align">
            <li>same as before, but the points are different.</li>
            <ul>
                <li>1st: 1000 points</li>
                <li>2nd: 500 points</li>
                <li>3rd: 200 points</li>
                <li>4th: 0 points</li>
            </ul>
        </ul>
    </>
}

const SlideThree = () => {
    return <>
        <h2>Category:</h2>
        <h2>Stickers in brain's base</h2>
        <p>The full name of the sticker is required.</p>
        <p>(Total: 11)</p>
    </>
}

const SlideThreeAnswers = () => {
    return <div className="scrolling grid-3">
        <span>Popular Airplanes</span>
        <span>Perfect Landing!</span>
        <span>Grr rrr</span>
        <span>Power Up</span>
        <span>jdp</span>
        <span>banana</span>
        <span>mizuhara</span>
        <span>kitagawa</span>
        <span>ajisai</span>
        <span>is?</span>
        <span>soymon</span>
    </div>
}

const SlideFour = () => {
    return <>
        <h2>Category:</h2>
        <h2>Mainline Pokemon Game Towns/Cities</h2>
        <p>It must be listed as a "Core series location" in the Bulbapedia article of "List of cities and towns".</p>
        <p>(Total: 135)</p>
    </>
}

const SlideFourAnswers = () => {
    return <div className="scrolling grid-3">
        <span>Celadon City</span>
        <span>Cerulean City</span>
        <span>Cinnabar Island</span>
        <span>Fuchsia City</span>
        <span>Lavender Town</span>
        <span>Pallet Town</span>
        <span>Pewter City</span>
        <span>Saffron City</span>
        <span>Vermilion City</span>
        <span>Viridian City</span>
        <span>One Island</span>
        <span>Two Island</span>
        <span>Three Island</span>
        <span>Four Island</span>
        <span>Five Island</span>
        <span>Six Island</span>
        <span>Seven Island</span>

        <span>Azalea Town</span>
        <span>Blackthorn City</span>
        <span>Cherrygrove City</span>
        <span>Cianwood City</span>
        <span>Ecruteak City</span>
        <span>Frontier Access</span>
        <span>Goldenrod City</span>
        <span>Mahogany Town</span>
        <span>New Bark Town</span>
        <span>Olivine City</span>
        <span>Safari Zone Gate</span>
        <span>Violet City</span>

        <span>Dewford Town</span>
        <span>Ever Grande City</span>
        <span>Fallarbor Town</span>
        <span>Fortree City</span>
        <span>Lavaridge Town</span>
        <span>Littleroot Town</span>
        <span>Lilycove City</span>
        <span>Mauville City</span>
        <span>Mossdeep City</span>
        <span>Oldale Town</span>
        <span>Pacifidlog Town</span>
        <span>Petalburg City</span>
        <span>Rustboro City</span>
        <span>Slateport City</span>
        <span>Sootopolis City</span>
        <span>Verdanturf Town</span>

        <span>Canalave City</span>
        <span>Celestic Town</span>
        <span>Eterna City</span>
        <span>Fight Area</span>
        <span>Floaroma Town</span>
        <span>Hearthome City</span>
        <span>Jubilife City</span>
        <span>Oreburgh City</span>
        <span>Pastoria City</span>
        <span>Resort Area</span>
        <span>Sandgem Town</span>
        <span>Snowpoint City</span>
        <span>Solaceon Town</span>
        <span>Sunyshore City</span>
        <span>Survival Area</span>
        <span>Twinleaf Town</span>
        <span>Veilstone City</span>
        <span>Diamond Settlement</span>
        <span>Jubilife Village</span>
        <span>Pearl Settlement</span>

        <span>Accumula Town</span>
        <span>Anville Town</span>
        <span>Aspertia City</span>
        <span>Black City</span>
        <span>Castelia City</span>
        <span>Driftveil City</span>
        <span>Floccesy Town</span>
        <span>Humilau City</span>
        <span>Icirrus City</span>
        <span>Lacunosa Town</span>
        <span>Lentimas Town</span>
        <span>Mistralton City</span>
        <span>Nacrene City</span>
        <span>Nimbasa City</span>
        <span>Nuvema Town</span>
        <span>Opelucid City</span>
        <span>Striaton City</span>
        <span>Undella Town</span>
        <span>Virbank City</span>
        <span>White Forest</span>


        <span>Ambrette Town</span>
        <span>Anistar City</span>
        <span>Aquacorde Town</span>
        <span>Camphrier Town</span>
        <span>Coumarine City</span>
        <span>Couriway Town</span>
        <span>Cyllage City</span>
        <span>Dendemille Town</span>
        <span>Geosenge Town</span>
        <span>Kiloude City</span>
        <span>Laverre City</span>
        <span>Lumiose City</span>
        <span>Santalune City</span>
        <span>Shalour City</span>
        <span>Snowbelle City</span>
        <span>Vaniville Town</span>

        <span>Hau'oli City</span>
        <span>Heahea City</span>
        <span>Iki Town</span>
        <span>Konikoni City</span>
        <span>Malie City</span>
        <span>Paniola Town</span>
        <span>Po Town</span>
        <span>Seafolk Village</span>
        <span>Tapu Village</span>

        <span>Ballonlea</span>
        <span>Circhester</span>
        <span>Freezington</span>
        <span>Hammerlocke</span>
        <span>Hulbury</span>
        <span>Motostoke</span>
        <span>Postwick</span>
        <span>Stow-on-Side</span>
        <span>Spikemuth</span>
        <span>Turffield</span>
        <span>Wedgehurst</span>
        <span>Wyndon</span>

        <span>Alfornada</span>
        <span>Artazon</span>
        <span>Cabo Poco</span>
        <span>Cascarrafa</span>
        <span>Cortondo</span>
        <span>Levincia</span>
        <span>Los Platos</span>
        <span>Medali</span>
        <span>Mesagoza</span>
        <span>Montenevera</span>
        <span>Porto Marinada</span>
        <span>Zapapico</span>
        <span>Mossui Town</span>
    </div>
}

const SlideFive = () => {
    return <>
        <h2>Category:</h2>
        <h2>LiSA</h2>
        <p>On Anilist, series where which LiSA is credited as part of the Anime Staff.</p>
        <p>Second seasons/associated movies are grouped together.</p>
        <p>(Total: 22)</p>
    </>
}

const SlideFiveAnswers = () => {
    return <div className="scrolling grid-3">
        <span>Angel Beats!</span>
        <span>Fate/Zero</span>
        <span>Sword Art Online</span>
        <span>Day Break Illusion</span>
        <span>The Irregular at Magic High School</span>
        <span>Mekakucity Actors</span>
        <span>Fate/stay night: Unlimited Blade Works</span>
        <span>Nisekoi:</span>
        <span>Qualidea Code</span>
        <span>Ring a Bell</span>
        <span>My Hero Academia</span>
        <span>Fate/Apocrypha</span>
        <span>Animation x Paralympic: Who Is Your Hero?</span>
        <span>Mobile Suit Gundam Narrative</span>
        <span>Demon Slayer: Kimetsu no Yaiba</span>
        <span>BACK ARROW</span>
        <span>Nonnon</span>
        <span>hallucinate</span>
        <span>NieR:Automata Ver1.1</span>
        <span>Shangri-La Frontier</span>
        <span>Solo Leveling</span>
        <span>Touring After the Apocalypse</span>
    </div>
}
