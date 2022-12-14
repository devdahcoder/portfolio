import React, { useState, useEffect, useRef } from 'react';
import { createContainer } from 'unstated-next';

type MainType = {
    printText: () => void;
    hasPageFullyLoaded: boolean;
    name: string;
    index: number;
    isTextCompleted: boolean;
    loadingTextRefElement: any | React.MutableRefObject<HTMLParagraphElement>;
    navigationModal: boolean;
    toggleNavigationModal: () => void;
    isBodyFixed: boolean;
    toggleBodyFixed: () => void;
}

export const mainState: MainType = {
    printText: () => {},
    hasPageFullyLoaded: false,
    name: "Olamide",
    index: 0,
    isTextCompleted: false,
    loadingTextRefElement: '',
    navigationModal: false,
    toggleNavigationModal: () => {},
    isBodyFixed: false,
    toggleBodyFixed: () => {},
}


const useMainState = (state = mainState): MainType => {

    const [hasPageFullyLoaded, setHasPageFullyLoaded] = useState<boolean>(false);
    const [name, setName] = useState<string>("Olamide");
    const [index, setIndex] = useState<number>(0);
    const [isTextCompleted, setIsTextCompleted] = useState<boolean>(false);
    const [navigationModal, setNavigationModal] = useState<boolean>(false);
    const [isBodyFixed, setIsBodyFixed] = useState<boolean>(false);
    const loadingTextRefElement = useRef<HTMLParagraphElement>(null) as React.MutableRefObject<HTMLParagraphElement>;

    const printText = () => {
        if (index < name?.length) {
            loadingTextRefElement.current.innerText += name.charAt(index);
            setIndex(index => index + 1);
        }
        else if (index === name?.length) {
            loadingTextRefElement.current.insertAdjacentHTML(
                'beforeend',
                `<span class="text-green-500 animate-pulse">.</code>`,
            );
            setIsTextCompleted(true);
        }
    }

    const toggleBodyFixed = () => {
        setIsBodyFixed(!isBodyFixed);
    }

    useEffect(() => {
        const printTextTimeOut = setTimeout(printText, 400);
        return () => clearTimeout(printTextTimeOut);
    }, [index]);

    useEffect(() => {

        let isSubscribed = true;

        let isTimeOutCompleted: NodeJS.Timeout;

        if (isSubscribed) {
            if (isTextCompleted) {
                isTimeOutCompleted = setTimeout(() => {
                    console.log('Page has loaded and animation has completed');
                    setHasPageFullyLoaded(true);
                }, 1000)
            }
        }

        return () => {
            isSubscribed = false;
            clearTimeout(isTimeOutCompleted);
        }
    }, [isTextCompleted]);

    const toggleNavigationModal = () => {
        setNavigationModal(!navigationModal);
        setIsBodyFixed(!isBodyFixed);
    }

    useEffect(() => {
        if (isBodyFixed) {
            document.body.classList.add('example')
        } else {
            document.body.classList.remove('example')
        }
    }, [isBodyFixed])

    return {
        hasPageFullyLoaded, 
        index, 
        isTextCompleted, 
        name, 
        printText, 
        loadingTextRefElement, 
        navigationModal, 
        toggleNavigationModal,
        isBodyFixed,
        toggleBodyFixed,
    }
}

export const MainContainer = createContainer(useMainState);

export const useMainContainer = () => {
    return MainContainer.useContainer();
}