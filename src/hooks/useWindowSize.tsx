import { useEffect, useState } from 'react';

interface IWindowSizeState {
    width: number | null, 
    height: number | null,
}

const useWindowSize = () => {
    const [windowSize, setwindowSize] = useState<IWindowSizeState>(
        {
            width: null, 
            height: null,
        }
    )


    useEffect(() => {
        const handleResize = () => {
            setwindowSize({
                width: window.innerWidth, 
                height: window.innerHeight,
            })
        };

        window.addEventListener('resize', handleResize)

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, []);

    return windowSize;
}

export default useWindowSize;