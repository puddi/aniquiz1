import { forwardRef, useState, useImperativeHandle } from "react";

export type SlideshowHandle = {
    next: () => void;
    previous: () => void;
}

export const Slideshow = forwardRef<SlideshowHandle, { slides: React.ReactNode[] }>(({ slides }, ref) => {
    const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

    useImperativeHandle(ref, () => ({
        next: () => {
            setCurrentSlideIdx(idx => Math.min(idx + 1, slides.length - 1))
        },
        previous: () => {
            setCurrentSlideIdx(idx => Math.max(idx - 1, 0))
        },
    }), [slides.length])

    return <div className="slideshow-container">{slides[currentSlideIdx]}</div>;
})