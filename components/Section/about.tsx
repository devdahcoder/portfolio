import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <section className="py-12 px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20 font-rubik">

            <div className="flex flex-col large-xs:flex-row text-center large-xs:text-start space-y-8 large-xs:space-y-0 text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400">
                <div className="w-full font-medium text-3xl large-xs:text-4xl">
                    <p>In addition to software engineering, I also have an interest in Machine Learning. </p>
                </div>

                <div className="w-full">
                    <p>In addition to software engineering, I also have interest in Machine Learning. I enjoy the 
                        idea of analyzing and generating useful insight from data. I have developed an RN model for flood 
                        susceptibility based on weather and land use data.
                        Some of the skills I portray and technologies I&apos;ve worked with and use are thus: 
                        Python, Java, JavaScript, CSS, HTML, SCSS, TypeScript, Git, Responsive Design, Graph Ql, Java, Postgres, 
                        Apollo Client, performance Optimization, Agile Development.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About