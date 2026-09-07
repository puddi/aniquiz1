import { useRef, useState } from 'react'
import './App.css'
import { Intro } from './slideshows/Intro.tsx'
import { BoardOne } from './slideshows/BoardOne.tsx'
import type { SlideshowHandle } from './components/Slideshow.tsx'
import { IntermissionOne } from './slideshows/IntermissionOne.tsx'
import { IntermissionTwo } from './slideshows/IntermissionTwo.tsx'
import { BoardTwo } from './slideshows/BoardTwo.tsx'
import { FinalJeopuddi } from './slideshows/FinalJeopuddi.tsx'

enum GameState {
  INTRO = 'Intro',
  BOARD_ONE = 'Round 1',
  INTERMISSION_ONE = 'Intermission 1',
  BOARD_TWO = 'Round 2',
  INTERMISSION_TWO = 'Intermission 2',
  FINAL = 'Final Jeopuddi',
}

const GAME_STATE_FLOW = [
  GameState.INTRO,
  GameState.BOARD_ONE,
  GameState.INTERMISSION_ONE,
  GameState.BOARD_TWO,
  GameState.INTERMISSION_TWO,
  GameState.FINAL,
]

function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO)
  const slideshowRef = useRef<SlideshowHandle>(null)

  const slideGoBack = () => { slideshowRef.current?.previous() }
  const slideGoForward = () => { slideshowRef.current?.next() }

  const hasNoSlides = gameState === GameState.BOARD_ONE || gameState === GameState.BOARD_TWO

  const goBack = () => {
    setGameState(state => {
      const curIndex = GAME_STATE_FLOW.indexOf(state)
      return GAME_STATE_FLOW[curIndex - 1]
    })
  }

  const goForward = () => {
    setGameState(state => {
      const curIndex = GAME_STATE_FLOW.indexOf(state)
      return GAME_STATE_FLOW[curIndex + 1]
    })
  }

  return (
    <main>
      <div className='top-controls'>
        {GAME_STATE_FLOW.indexOf(gameState) !== 0 && <button onClick={goBack}>{'<<'}</button>}
        {!hasNoSlides && <button onClick={slideGoBack}>Previous slide</button>}
        {!hasNoSlides && <button onClick={slideGoForward}>Next slide</button>}
        {GAME_STATE_FLOW.indexOf(gameState) !== GAME_STATE_FLOW.length - 1 && <button onClick={goForward}>{'>>'}</button>}
      </div>
      <div className='slideshows'>
        {(() => {
          switch (gameState) {
            case GameState.INTRO:
              return <Intro slideshowRef={slideshowRef} />
            case GameState.BOARD_ONE:
              return <BoardOne />
            case GameState.INTERMISSION_ONE:
              return <IntermissionOne slideshowRef={slideshowRef} />
            case GameState.BOARD_TWO:
              return <BoardTwo />
            case GameState.INTERMISSION_TWO:
              return <IntermissionTwo slideshowRef={slideshowRef} />
            case GameState.FINAL:
              return <FinalJeopuddi slideshowRef={slideshowRef} />
          }
        })()}
      </div>
      <div className='scores'>
        <PlayerScoreBox />
        <PlayerScoreBox />
        <PlayerScoreBox />
        <PlayerScoreBox />
      </div>
    </main>
  )
}

function PlayerScoreBox() {
  return <div className='playerScoreBox'>
    <input placeholder='Player name' />
    <input placeholder='Score' />
  </div>
}

export default App
