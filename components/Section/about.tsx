/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import SocialMediaLink from '../social-media-link'

type Props = {}

const About = (props: Props) => {
    return (
        <section id="about" className="border-t border-b border-black  px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20 font-inter ">

            <div className="flex flex-col justify-between large-xs:flex-row text-center large-xs:text-start space-y-8 large-xs:space-y-0 bg-noisy-gradient bg-cover">
                <div className="w-full border-l border-r border-black py-16">
                    <div className="flex flex-col space-y-10 w-10/12 my-0 mx-auto">
                        <div className="text-4xl font-machina font-semibold space-y-1 text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-40 ">
                            <div className="">
                                <p>HELLO;)</p>
                            </div>
                            <div>
                                {/* <p>I know, I know I just can&lsquo;t stop talking about myself</p> */}
                                <p>Just a few more things about myself</p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-8">
                            <div className="flex flex-col uppercase space-y-8 text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-40 ">
                                <div>
                                    <p>
                                        I am currently working as a Frontend Developer at Divergent Business.
                                    </p>
                                </div>
                                <div>
                                    <p>I Develop, design, IMPLEMENT and maintain COMPLEX WEBSITE Solutions where I also focus on improving the quality of frontend code by paying close attention to details with the help of grade A softwares and developer tools/processes.
                                        
                                        {/* for FROM CREATING A VISUAL INTERFACE (UI) AND BUILDING A USER EXPERIENCE (UX) TO FURTHER BUILDING IT ON THE TILDA PLATFORM. */}
                                        </p>
                                </div>
                                <div>
                                    <p>MY SITES EMBODY A CLEAN AND MINIMALISTIC DESIGN, SOLVE BUSINESS ISSUES, AND ARE USER-FRIENDLY.
                                        I HAVE 3 YEARS OF EXPERIENCE IN DESIGN IN ONE OF THE BEST COMPANIES IN MOSCOW AND NEW YORK. AMONG MY PROJECTS ARE WEBSITES FOR GERMANY, FINLAND, AUSTRIA, AND RUSSIA.</p>
                                </div>
                            </div>

                            <div>
                                <SocialMediaLink 
                                    text={"Contact With Me"} 
                                    href={`mailto:adigunolamide200@gmail.com`} 
                                    // linkClassName={linkClassName} 
                                    icon={<BsArrowUpRight />}
                                    // iconContainerClassName={linkIconContainer}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block w-full border-r border-black">
                    <div className="relative block pb-[100%] overflow-hidden w-full h-full opacity-30">
                        <img className="absolute top-0 left-0 select-none w-full h-full object-cover will-change-transform" src="/images/photo.jpg" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
// const About = (props: Props) => {
//     return (
//         <section className="py-12 px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20 font-rubik">

//             <div className="flex flex-col large-xs:flex-row text-center large-xs:text-start space-y-8 large-xs:space-y-0 text-transparent bg-clip-text 
//                             bg-gradient-to-t from-gray-700 via-gray-900 to-black 
//                             dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400">
//                 <div className="w-full font-medium text-3xl large-xs:text-4xl">
//                     <p>In addition to software engineering, I also have an interest in Machine Learning. </p>
//                 </div>

//                 <div className="w-full">
//                     <p>In addition to software engineering, I also have interest in Machine Learning. I enjoy the 
//                         idea of analyzing and generating useful insight from data. I have developed an RN model for flood 
//                         susceptibility based on weather and land use data.
//                         Some of the skills I portray and technologies I&apos;ve worked with and use are thus: 
//                         Python, Java, JavaScript, CSS, HTML, SCSS, TypeScript, Git, Responsive Design, Graph Ql, Java, Postgres, 
//                         Apollo Client, performance Optimization, Agile Development.
//                     </p>
//                 </div>
//             </div>

//         </section>
//     )
// }

export default About