import { Dialog, DialogPanel } from "@headlessui/react"
import { useRef, useState } from "react"
import type { Config, Question } from "../types"
import { Slideshow, type SlideshowHandle } from "./Slideshow"

export const JeopardyBoard = ({
    config
}: {
    config: Config
}) => {
    return <section className='jeopardy-board'>
        {config.categories.map((category) => (
            <div className='category'>{category.name}</div>
        ))}

        {config.categories[0].questions.map((_question, index) => {
            return config.categories.map((category) => {
                return <ClueCell categoryName={category.name} question={category.questions[index]} value={(index + 1) * config.baseValue} />
            })
        })}

    </section>
}

const ClueCell = ({
    question,
    value,
    categoryName,
}: {
    question: Question,
    value: number,
    categoryName: string,
}) => {
    const [isOpened, setIsOpened] = useState(false)
    const [dialogClosed, setDialogClosed] = useState(false)
    const [showingQuestion, setShowingQuestion] = useState(false)
    const [showingFollowups, setShowingFollowups] = useState(false)

    const [dialogAnswerRevealed, setDialogAnswerRevealed] = useState(false)

    const closeDialog = () => {
        setDialogClosed(true)
        setShowingQuestion(false)
        setDialogAnswerRevealed(false)
    }

    const handleClick = () => {
        if (!isOpened) {
            setIsOpened(true)
            return;
        }

        if (isOpened) {
            setDialogClosed(false)
            setIsOpened(false)
            setShowingQuestion(false)
            setShowingFollowups(false)
        }
    }

    const hasFollowups = (question.followups ?? []).length > 0

    const showFollowups = () => {
        if (!hasFollowups) {
            return;
        }

        setShowingFollowups(true)
    }

    const slideshowRef = useRef<SlideshowHandle>(null)

    return <>
        <div className={'clue' + (isOpened ? ' opened' : '')} onClick={handleClick}>
            {value}
        </div>
        <Dialog open={isOpened && !dialogClosed} onClose={closeDialog} className='dialog-container'>
            <DialogPanel className='dialog-panel'>
                {showingFollowups && question.followups ?
                    <>
                        <Slideshow slides={question.followups} ref={slideshowRef} />
                        <div className='dialog-buttons'>
                            <button onClick={() => slideshowRef.current?.next()}>Next</button>
                            <button onClick={closeDialog}>Close</button>
                        </div>
                    </>
                    :
                    <>
                        <p className='dialog-header'>{categoryName} - {value}</p>
                        {!showingQuestion ? <div className='dialog-content-container'></div> : <div className='dialog-content-container'>
                            {question.question}
                            {dialogAnswerRevealed && <span>
                                <hr />
                                <p>{question.answer}</p>
                            </span>}
                        </div>}
                        <div className='dialog-buttons'>
                            {!dialogAnswerRevealed && !showingQuestion && <button data-autofocus onClick={() => setShowingQuestion(true)}>Reveal Question</button>}
                            {!dialogAnswerRevealed && showingQuestion && <button data-autofocus onClick={() => setDialogAnswerRevealed(true)}>Reveal Answer</button>}
                            {dialogAnswerRevealed && !hasFollowups && <button onClick={closeDialog}>Close</button>}
                            {dialogAnswerRevealed && hasFollowups && <button onClick={showFollowups}>Next</button>}
                        </div>
                    </>
                }
            </DialogPanel>
        </Dialog>
    </>
}