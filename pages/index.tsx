import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {getAppLayout} from '../components/layouts/app-layout';
import Loading from '../components/loading';


const Home = () => {
  return (
    <div>
      <Loading />
    </div>
  )
}

// Home.getLayout = getAppLayout;

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