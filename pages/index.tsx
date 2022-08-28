/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { getAppLayout } from "../components/layouts/app-layout";
import Loading from "../components/loading";
import HomePage from "../components/Section/home-page";
import TextCircle from "../components/text-circle";


const Home = () => {

    const [hasPageFullyLoaded, setHasPageFullyLoaded] = useState<boolean>(false);
    const [delayTyping, setDelayTyping] = useState<number>(400);
    const [text, setText] = useState<string>("lamide");
    const [index, setIndex] = useState<number>(0);
    const [isTextCompleted, setIsTextCompleted] = useState<boolean>(false);

    const loadingTextRefElement = useRef<HTMLParagraphElement>(null) as React.MutableRefObject<HTMLParagraphElement>;

    const printText = () => {
        if (index < text?.length) {
            loadingTextRefElement.current.innerText += text.charAt(index);
            setIndex(index => index + 1);
        }
        else if (index === text?.length) {
            console.log('Text has completed');
            setIsTextCompleted(true);
            loadingTextRefElement.current.insertAdjacentHTML(
                'beforeend',
                `<span class="text-green-500 animate-pulse">.</code>`,
            );
        }
    }

    useEffect(() => {
        const printTextTimeOut = setTimeout(printText, delayTyping);
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
                }, 2000)
            }
        }

        return () => {
            isSubscribed = false;
            clearTimeout(isTimeOutCompleted);
        }
    }, [isTextCompleted]);

  return (
    <>
      <TextCircle 
        text={"design is life - design is life - design is life - "} 
        className={`${hasPageFullyLoaded ? "!z-0 !left-[41.6rem] !top-[13.6rem] transition-all duration-500 ease-in-out" : "z-50"}`} />


      <Loading 
        isTextCompleted={isTextCompleted}
        hasPageFullyLoaded={hasPageFullyLoaded}
        loadingTextRefElement={loadingTextRefElement}
      />

      <HomePage />
    </>
  );
};

Home.getLayout = getAppLayout;

export default Home;

// theme: {
//     extend: {
//       screens: {
//         "max-sm": { max: "640px" },
//         "max-md": { max: "768px" },
//         "max-lg": { max: "1024px" },
//         "max-xl": { max: "1280px" },
//       },
//       colors: {
//         primary: "#0b6fe2",
//         "primary-dark": "#162e78",
//         "off-white": "rgb(244, 246, 248)",
//       },
//       size: {
//         onboardingMaxWidth: '900px',
//       },
//       animation: {
//         "scale-out": "scale-out 0.80s ease-in-out",
//         "growOut": "growOut 2s ease-in-out",
//         "scale-onboarding-navigation-items": "scale-onboarding-navigation-items 0.5s ease-in-out",
//         "pointer": "pointer 1s linear infinite",
//       },
//       keyframes: {
//         "scale-out": {
//           "0%": {
//             transform: "scale(0)",
//           },
//           "100%": {
//             transform: "scale(1)",
//           },
//         },
//         "scale-onboarding-navigation-items": {
//           "0%": {
//             opacity: "0",
//             transform: "scale(0)",
//           },

//           "80%": {
//             transform: "scale(1.07)",
//           },

//           "100%": {
//             opacity: "1",
//             transform: "scale(1)",
//           }
//         },
//         "pointer": {
//           "0%, 100%": {transform: "translate(0)"},
//           "50%": {transform: "translate(20px, 0)"},
//         },
//         "growOut": {
//           "0%": {
//             opacity: "0",
//           },
//           "100%": {
//             opacity: "1",
//           }
//         }
//       },

//     },
//   },




















// /* eslint-disable @next/next/no-img-element */
// import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { getAppLayout } from "../components/layouts/app-layout";
// import Loading from "../components/loading";
// import SocialMediaLink from "../components/social-media-link";
// import TextCircle from "../components/text-circle";
// import MeMoji from "../public/icons/memoji";
// import NameStrike from "../public/icons/name-strike";


// const Home = () => {

//   const [hasPageFullyLoaded, setHasPageFullyLoaded] = useState<boolean>(false);
//     const [delayTyping, setDelayTyping] = useState<number>(400);
//     const [text, setText] = useState<string>("lamide");
//     const [index, setIndex] = useState<number>(0);
//     const [isTextCompleted, setIsTextCompleted] = useState<boolean>(false);
//     const [footerRandomText, setFooterRandomText] = useState<Array<string>>([
//       "Hustle",
//       "Hard Work",
//       "Relax",
//       "Consistency",
//       "Art",
//       "Life",
//       "Beautiful"
//     ])
//     const [footerText, setFooterText] = useState<string>('')

//     const loadingTextRefElement = useRef<HTMLParagraphElement>(null) as React.MutableRefObject<HTMLParagraphElement>;

//     const printText = () => {
//         if (index < text?.length) {
//             loadingTextRefElement.current.innerText += text.charAt(index);
//             setIndex(index => index + 1);
//         }
//         else if (index === text?.length) {
//             setIsTextCompleted(true);
//             loadingTextRefElement.current.insertAdjacentHTML(
//                 'beforeend',
//                 `<span class="text-green-500 animate-pulse">.</code>`,
//             );
//         }
//     }

//     useEffect(() => {
//         const printTextTimeOut = setTimeout(printText, delayTyping);
//         return () => clearTimeout(printTextTimeOut);
//     }, [index]);

//     useEffect(() => {

//         let isSubscribed = true;

//         let isTimeOutCompleted: NodeJS.Timeout;

//         if (isSubscribed) {
//             if (isTextCompleted) {
//                 isTimeOutCompleted = setTimeout(() => {
//                     console.log('Page has loaded and animation has completed');
//                     const getRandomFooterText = footerRandomText[Math.round(Math.random() * footerRandomText.length)];
//                     setFooterText(getRandomFooterText);
//                     setHasPageFullyLoaded(true);
//                 }, 2000)
//             }
//         }

//         return () => {
//             isSubscribed = false;
//             clearTimeout(isTimeOutCompleted);
//         }
//     }, [isTextCompleted]);

//   return (
//     <div className="w-full h-screen">
//       <TextCircle 
//         text={"design is life - design is life - design is life - "} 
//         className={`${hasPageFullyLoaded && "z-0 left-[42rem] top-[13.6rem] transition-all duration-500 ease-in-out"}`} />
//       <Loading 
//         isTextCompleted={isTextCompleted}
//         hasPageFullyLoaded={hasPageFullyLoaded}
//         loadingTextRefElement={loadingTextRefElement}
//       />

//       <div className="flex flex-row pt-40 relative w-[90%] my-0 mx-auto space-x-32">
//         <div className="flex flex-col space-y-8 w-full max-w-[60%] select-none">
//           <div className="group text-8xl font-medium relative cursor-pointer">
//             <p>Hi, I am Olamide 
//               <NameStrike 
//                 className="absolute -bottom-1 right-8 -z-50 opacity-0 group-hover:opacity-100 transition-all delay-100
//                 ease-in-out duration-500" 
//               />
//             </p>
//           </div>
//           <div className="font-work-sans text-xl font-medium -tracking-wide pr-28">
//             <p>
//               I’m a Senior Product Designer (UI, UX), and a Design mentor. I am
//               passionate about creating a user-centered design, gathering and
//               translating user data into design decisions and products.
//             </p>
//           </div>
//           <div className="flex flex-row items-center space-x-5">
//             <SocialMediaLink text={"Resume"} />
//             <SocialMediaLink text={"GitHub"} />
//             <SocialMediaLink text={"Linkedin"} />
//           </div>
//         </div>

//         <div className="w-full max-w-[18rem] h-[35rem]">
//           <div
//             className="group !relative border-black bg-black w-full max-w-[18rem] h-[21rem] flex items-center justify-center 
//             rounded-t-full border mt-16"
//           >
//             <div
//               className="z-10 absolute -left-2 top-5 py-3 px-5 rounded-t-full rounded-bl-full text-black text-xs font-semibold 
//               w-fit font-inter bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-300
//               ease-in-out duration-500"
//             >
//               <p>Hi, I am Olamide</p>
//             </div>
//             <div
//               className="z-0 w-[18rem] h-fit absolute -right-3 top-5  rounded-t-full rounded-b-full group-hover:top-20 transition-all 
//               delay-100 duration-500 ease-in-out"
//             >
//               <img
//                 className="w-full h-full object-contain"
//                 src="./images/memoji.png"
//                 alt="memoji"
//               />
//             </div>
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// Home.getLayout = getAppLayout;

// export default Home;

// // theme: {
// //     extend: {
// //       screens: {
// //         "max-sm": { max: "640px" },
// //         "max-md": { max: "768px" },
// //         "max-lg": { max: "1024px" },
// //         "max-xl": { max: "1280px" },
// //       },
// //       colors: {
// //         primary: "#0b6fe2",
// //         "primary-dark": "#162e78",
// //         "off-white": "rgb(244, 246, 248)",
// //       },
// //       size: {
// //         onboardingMaxWidth: '900px',
// //       },
// //       animation: {
// //         "scale-out": "scale-out 0.80s ease-in-out",
// //         "growOut": "growOut 2s ease-in-out",
// //         "scale-onboarding-navigation-items": "scale-onboarding-navigation-items 0.5s ease-in-out",
// //         "pointer": "pointer 1s linear infinite",
// //       },
// //       keyframes: {
// //         "scale-out": {
// //           "0%": {
// //             transform: "scale(0)",
// //           },
// //           "100%": {
// //             transform: "scale(1)",
// //           },
// //         },
// //         "scale-onboarding-navigation-items": {
// //           "0%": {
// //             opacity: "0",
// //             transform: "scale(0)",
// //           },

// //           "80%": {
// //             transform: "scale(1.07)",
// //           },

// //           "100%": {
// //             opacity: "1",
// //             transform: "scale(1)",
// //           }
// //         },
// //         "pointer": {
// //           "0%, 100%": {transform: "translate(0)"},
// //           "50%": {transform: "translate(20px, 0)"},
// //         },
// //         "growOut": {
// //           "0%": {
// //             opacity: "0",
// //           },
// //           "100%": {
// //             opacity: "1",
// //           }
// //         }
// //       },

// //     },
// //   },
