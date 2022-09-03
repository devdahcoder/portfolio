/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { getAppLayout } from "../components/layouts/app-layout";
import Loading from "../components/loading";
import HomePage from "../components/Section/home-page";
import TextCircle from "../components/text-circle";
import { useThemeContainer } from '../state/theme';


const Home = () => {

    const { theme, handleThemeToggle} = useThemeContainer();
    const [hasPageFullyLoaded, setHasPageFullyLoaded] = useState<boolean>(false);
    const [delayTyping, setDelayTyping] = useState<number>(400);
    const [text, setText] = useState<string>("Ariouse");
    const [index, setIndex] = useState<number>(0);
    const [isTextCompleted, setIsTextCompleted] = useState<boolean>(false);

    const loadingTextRefElement = useRef<HTMLParagraphElement>(null) as React.MutableRefObject<HTMLParagraphElement>;

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
    <>
      <TextCircle 
        text={"design is life - design is life - design is life - "} 
        className={`${true ? 
          `!z-0 transition-all duration-500 ease-in-out border
          h-[140px] large-sm:h-[180px] 
          w-[140px] large-sm:w-[180px] 
          left-14 small-xs:left-32 medium-xs:left-[23rem] large-sm:left-[28rem] extra-large-xs:left-[40rem]
          top-[4.5rem] small-xs:top-[5.5rem] small-mid:top-[5.5rem] small-large:top-[7rem] medium-xs:top-24 medium-sm:top-36 large-xs:top-36
          large-sm:top-52 extra-large-xs:top-56`
          : 
          "z-50 -top-12 -left-12"}`} 
      />
      {/* <TextCircle 
        text={"design is life - design is life - design is life - "} 
        className={`${hasPageFullyLoaded ? "!z-0 !left-[41.6rem] !top-[13.6rem] transition-all duration-500 ease-in-out" : "z-50"}`} /> */}


      {/* <Loading 
        isTextCompleted={isTextCompleted}
        hasPageFullyLoaded={hasPageFullyLoaded}
        loadingTextRefElement={loadingTextRefElement}
      /> */}

      <HomePage />

      {/* <div className="!relative w-[90%] my-0 mx-auto overflow-hidden h-16">
        <div className="text-8xl font-medium absolute -bottom-12 let-0 text-dark-bg dark:text-white">
          <p>Works</p>
        </div>
      </div> */}
    </>
  );
};

Home.getLayout = getAppLayout;

export default Home;
