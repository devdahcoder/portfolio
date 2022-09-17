import React from 'react'
import Container from '../container'
import Input from '../input'

type Props = {}

const Contact = (props: Props) => {
    return (
        <section className="
            flex flex-row large-xs:flex-row items-center medium-xs:items-start justify-center large-sm:justify-between 
            relative 
            px-4 small-large:px-5 medium-sm:px-10 extra-large-xs:px-20 
            pt-16 medium-xs:pt-24 medium-sm:pt-20 large-sm:pt-40 pb-20"
        >
            <div className="flex flex-col flex-grow border space-y-32">
                <div className="text-7xl font-semibold leading-[5.5rem]"><p>Do you have any Ideas? <br />Let’s create the future</p></div>

                <div>
                    <form action="" method="post">

                        <div className="flex flex-col space-y-5 font-work-sans">
                            
                            <div>
                                <Input 
                                    labelText={`Name`} 
                                    type={`text`} 
                                    className={`py-1 text-base font-medium px-0`}
                                    containerClassName={`border-b border-dark-bg`}
                                    labelClassName={`text-dark-200 text-base font-medium tracking-wider`}
                                    mainContainerClassName={`flex flex-col`}
                                />
                            </div>
                            <div>
                                <Input 
                                    labelText={`Email`} 
                                    type={`email`} 
                                    className={`py-1 text-base font-medium px-0`}
                                    containerClassName={`border-b border-dark-bg`}
                                    labelClassName={`text-dark-200 text-base font-medium tracking-wider`}
                                    mainContainerClassName={`flex flex-col`}
                                />
                            </div>
                            <div>
                                <Input 
                                    labelText={`Message`} 
                                    type={`text`} 
                                    className={`py-1 text-base font-medium px-0`}
                                    containerClassName={`border-b border-dark-bg`}
                                    labelClassName={`text-dark-200 text-base font-medium tracking-wider`}
                                    mainContainerClassName={`flex flex-col`}
                                />
                            </div>
                            

                        </div>
                    </form>
                </div>
            </div>

            <div className="w-96 border">
                hello
            </div>
        </section>
    )
}

export default Contact