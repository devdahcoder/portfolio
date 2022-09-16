import {
    Dispatch,
    SetStateAction,
    useEffect,
    RefObject,
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