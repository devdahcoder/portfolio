/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import {getAppLayout} from '../components/layouts/app-layout';
import Loading from '../components/loading';
import SocialMediaLink from '../components/social-media-link';
import MeMoji from '../public/icons/memoji';



const Home = () => {

  return (
    <div className="flex flex-row pt-40 border relative w-[90%] my-0 mx-auto space-x-32">
      {/* <Loading /> */}
      <div className="flex flex-col space-y-8 w-full max-w-[60%]">
        <div className="text-8xl font-medium">
          <p>Hi, I am Olamide</p>
        </div>
        <div className="font-work-sans text-xl font-medium -tracking-wide pr-32">
          <p>I’m a Senior Product Designer (UI, UX), and a Design mentor. I am passionate about creating a user-centered design, gathering and translating user data into design decisions and products.</p>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <SocialMediaLink text={"Resume"} />
          <SocialMediaLink text={"GitHub"} />
          <SocialMediaLink text={"Linkedin"} />
        </div>
      </div>

      <div className="!relative border-black bg-black w-full max-w-[18rem] h-[22rem] items-center justify-center rounded-t-full border mt-16">
        <div className="w-[18rem] h-fit absolute left-1/2 top-8 -translate-x-1/2 translate-y-0 rounded-t-full rounded-b-full">
          <img className="w-full h-full object-contain" src="./images/memoji.png" alt="memoji" />
        </div>
      </div>
      
    </div>
  )
}

Home.getLayout = getAppLayout;

export default Home













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