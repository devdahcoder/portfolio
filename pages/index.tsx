import { useEffect, useRef, useState } from "react";
import { getAppLayout } from "../components/layouts/app-layout";
import Talk from "../components/layouts/talk";
import Loading from "../components/loading";
import HomePage from "../components/Section/home-page";
import Works from "../components/Section/works";
import TextCircle from "../components/text-circle";
import { useThemeContainer } from '../state/theme';


const Home = () => {

    const { theme, handleThemeToggle} = useThemeContainer();
    const [hasPageFullyLoaded, setHasPageFullyLoaded] = useState<boolean>(false);
    const [delayTyping, setDelayTyping] = useState<number>(400);
    const [text, setText] = useState<string>("Olamide");
    const [index, setIndex] = useState<number>(0);
    const [isTextCompleted, setIsTextCompleted] = useState<boolean>(false);

    // const loadingTextRefElement = useRef<HTMLParagraphElement>(null) as React.MutableRefObject<HTMLParagraphElement>;

    // const printText = () => {
    //     if (index < text?.length) {
    //         loadingTextRefElement.current.innerText += text.charAt(index);
    //         setIndex(index => index + 1);
    //     }
    //     else if (index === text?.length) {
    //         console.log('Text has completed');
    //         setIsTextCompleted(true);
    //         loadingTextRefElement.current.insertAdjacentHTML(
    //             'beforeend',
    //             `<span class="text-green-500 animate-pulse">.</code>`,
    //         );
    //     }
    // }

    // useEffect(() => {
    //     const printTextTimeOut = setTimeout(printText, delayTyping);
    //     return () => clearTimeout(printTextTimeOut);
    // }, [index]);

    // useEffect(() => {

    //     let isSubscribed = true;

    //     let isTimeOutCompleted: NodeJS.Timeout;

    //     if (isSubscribed) {
    //         if (isTextCompleted) {
    //             isTimeOutCompleted = setTimeout(() => {
    //                 console.log('Page has loaded and animation has completed');
    //                 setHasPageFullyLoaded(true);
    //             }, 2000)
    //         }
    //     }

    //     return () => {
    //         isSubscribed = false;
    //         clearTimeout(isTimeOutCompleted);
    //     }
    // }, [isTextCompleted]);

    return (
        <div>
            {/* <TextCircle 
                text={"design is life - design is life - design is life - "} 
                className={`${hasPageFullyLoaded ? 
                `!z-0 transition-all duration-500 ease-in-out
                left-[5.5rem] small-xs:left-32 medium-xs:left-[24rem] large-sm:left-[28rem] extra-large-xs:left-[32rem] extra-large-mid:left-[41.5rem]
                top-[3rem] small-xs:top-[4rem] small-mid:top-[4.5rem] small-large:top-[5rem] medium-xs:top-24 medium-sm:top-[7rem] large-xs:top-36
                large-sm:top-52 extra-large-xs:top-[13rem] extra-large-mid:top-56`
                : 
                "z-50 -top-12 -left-12"}`} 
            />

            <Loading 
                isTextCompleted={isTextCompleted}
                hasPageFullyLoaded={hasPageFullyLoaded}
                loadingTextRefElement={loadingTextRefElement}
            /> */}

            <HomePage />
            <Works />
            <Talk />
        </div>
    );
};

Home.getLayout = getAppLayout;

export default Home;
