import { forwardRef, useRef, useState } from 'react';

export const UseRefList = () => {
    const [playOff, setPlayOff] = useState(false);
    const videoRef = useRef(null);

    const handeClick = () => {
        const next = !playOff;
        setPlayOff(next);
        if (next) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <>
            <video
                width={250}
                ref={videoRef}
                onPlay={() => setPlayOff(true)}
                onPause={() => setPlayOff(false)}
            >
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
            <button onClick={handeClick}>{playOff ? 'Играть' : 'Стоп'}</button>
            <ParentComponent />
        </>
    );
};

function ParentComponent() {
    const inputRefText = useRef(null);
    const focusInput = () => {
        inputRefText.current.focus();
    };
    return (
        <>
            <button onClick={focusInput}>Фокус</button>
            <TextInput ref={inputRefText} />
        </>
    );
}

const TextInput = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />;
});
