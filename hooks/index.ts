import {
    Dispatch,
    SetStateAction,
    useEffect,
    RefObject,
    useState,
} from 'react';


export const CloseOnEventListen = (
    refElement: RefObject<HTMLDivElement>,
    setState: Dispatch<SetStateAction<boolean>>
) => {
    useEffect(() => {

        let isSubscribed = true;

        const blurTrigger = (event: any) => {
            if (refElement.current && !refElement.current.contains(event.target)) {
                setState(false);
            }
        }

        if (isSubscribed) {
            document.addEventListener('click', blurTrigger);
        }

        return () => {
            document.removeEventListener('click', blurTrigger);
            isSubscribed = false;
        }
        
    }, []);
};

export const WindowSize = () => {

    const [width, setWidth] = useState<number>(0);

    const getWindowWidth = () => {
        setWidth(window?.innerWidth)
    }

    useEffect(() => {
        let isSubscribed = true;

        if (isSubscribed) {
            getWindowWidth()
            window.addEventListener("resize", getWindowWidth);
        }
        
        return () => {
            window.removeEventListener('resize', getWindowWidth);
            isSubscribed = false;
        }
    }, [width]);

    return width;
    
}