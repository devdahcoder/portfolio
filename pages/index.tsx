import { useEffect, useRef, useState } from "react";
import { getAppLayout } from "../components/layouts/app-layout";
import Talk from "../components/layouts/talk";
import Loading from "../components/loading";
import Community from "../components/Section/community";
import Contact from "../components/Section/contact";
import Contributions from "../components/Section/contributions";
import HomePage from "../components/Section/home-page";
import Works from "../components/Section/works";
import Footer from "../components/Section/footer";
import TextCircle from "../components/text-circle";
import { useThemeContainer } from '../state/theme';


const Home = () => {

    const { theme, handleThemeToggle} = useThemeContainer();
    const [hasPageFullyLoaded, setHasPageFullyLoaded] = useState<boolean>(false);
    const [delayTyping, setDelayTyping] = useState<number>(400);
    const [name, setName] = useState<string>("Olamide");
    const [index, setIndex] = useState<number>(0);
    const [isTextCompleted, setIsTextCompleted] = useState<boolean>(false);

    // const loadingTextRefElement = useRef<HTMLParagraphElement>(null) as React.MutableRefObject<HTMLParagraphElement>;

    // const printText = () => {
    //     if (index < name?.length) {
    //         loadingTextRefElement.current.innerText += name.charAt(index);
    //         setIndex(index => index + 1);
    //     }
    //     else if (index === name?.length) {
    //         loadingTextRefElement.current.insertAdjacentHTML(
    //             'beforeend',
    //             `<span class="text-green-500 animate-pulse">.</code>`,
    //         );
    //         setIsTextCompleted(true);
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
                left-[5.5rem] small-xs:left-32 medium-xs:left-[24rem] large-sm:left-[30rem] extra-large-xs:left-[32rem] extra-large-mid:left-[43.5rem]
                top-[4rem] small-xs:top-[5.5rem] small-mid:top-[6rem] medium-xs:top-[7rem]  medium-sm:top-[9rem] large-xs:top-36
                large-sm:top-52 extra-large-xs:top-[13rem] extra-large-mid:top-56`
                : 
                "z-50 -top-12 -left-12"}`} 
            /> */}

            {/* <Loading 
                isTextCompleted={isTextCompleted}
                hasPageFullyLoaded={hasPageFullyLoaded}
                loadingTextRefElement={loadingTextRefElement}
            /> */}

            <HomePage name={name} />
            <Works />
            <Talk />
            <Community />
            <Contributions />
            <Contact />
            <Footer />
        </div>
    );
};

Home.getLayout = getAppLayout;

export default Home;
