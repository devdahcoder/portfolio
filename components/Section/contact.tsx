/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import Input from '../input';
import { TiLocationArrowOutline } from 'react-icons/ti';
import emailjs from '@emailjs/browser';
import { Formik, Form, useField, Field } from 'formik';
import { ContactInitValue } from '../../types';
import * as Yup from 'yup';

type Props = {}

const Contact = (props: Props) => {

    const [loading, setLoading] = useState<boolean>(false);

    const initialValues: ContactInitValue = {
        name: "",
        email: "",
        message: "",
    }

    const formRef: React.MutableRefObject<HTMLFormElement> = useRef() as React.MutableRefObject<HTMLFormElement>;

    const sendEmail = async ({ resetForm }: any) => {

        console.log('sending')
        setLoading(true);
        await emailjs.sendForm(
            "service_rvsyqk7", 
            "template_zwmprdd", 
            formRef.current, 
            "1FY7b7f8s-PjKhDIC"
        )
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                resetForm();
            }, (error) => {
                setLoading(false);
                console.log(error.text);
            });
    }

    return (
        <section className="
            flex flex-row large-xs:flex-row items-center medium-xs:items-start justify-center large-sm:justify-between 
            relative 
            px-4 small-large:px-5 medium-sm:px-10 extra-large-xs:px-20 
            pt-16 medium-xs:pt-24 medium-sm:pt-20 large-sm:pt-40 pb-20"
        >
            <div className="flex flex-col flex-grow space-y-28">
                <div className="text-4xl small-large:text-5xl medium-xs:text-6xl large-xs:text-7xl font-semibold large-xs:leading-[5.5rem]"><p>Do you have any Ideas? <br />Let’s create the future</p></div>

                <Formik 
                    initialValues={initialValues}
                    validationSchema={
                        Yup.object().shape({
                            name: Yup.string().required("name is required"),
                            email: Yup.string().email("Invalid email address").required("Email is required"),
                            message: Yup.string().required("Message is required")
                        })
                    }
                    onSubmit={sendEmail}
                >
                    {
                        ({errors,
                            values,
                            handleChange,
                            handleBlur,
                            setFieldValue,
                            touched,}) => {
                            return (
                                <Form ref={formRef}>

                                    <div className="flex flex-col space-y-7 font-work-sans">
                                        
                                        <div>
                                            <Input 
                                                labelText={`Name`} 
                                                type={`text`} 
                                                name={"name"}
                                                value={values["name"]}
                                                onChange={handleChange}
                                                className={`py-1 text-base font-normal px-0`}
                                                containerClassName={`border-b border-dark-bg`}
                                                labelClassName={`text-dark-200 text-base font-normal tracking-wider`}
                                                mainContainerClassName={`flex flex-col`}
                                            />
                                        </div>
                                        <div>
                                            <Input 
                                                labelText={`Email`} 
                                                type={`email`} 
                                                name={"email"}
                                                value={values["email"]}
                                                onChange={handleChange}
                                                className={`py-1 text-base font-normal px-0`}
                                                containerClassName={`border-b border-dark-bg`}
                                                labelClassName={`text-dark-200 text-base font-normal tracking-wider`}
                                                mainContainerClassName={`flex flex-col`}
                                            />
                                        </div>
                                        <div>
                                            <Input 
                                                labelText={`Message`} 
                                                type={`text`} 
                                                name={"message"}
                                                value={values["message"]}
                                                onChange={handleChange}
                                                className={`py-1 text-base font-normal px-0`}
                                                containerClassName={`border-b border-dark-bg`}
                                                labelClassName={`text-dark-200 text-base font-normal tracking-wider`}
                                                mainContainerClassName={`flex flex-col`}
                                            />
                                        </div>

                                        <div>
                                            <button type="submit" className="flex flex-row items-center text-base font-semibold font-vollkorn py-2">
                                                SEND <span className="ml-2">
                                                    <TiLocationArrowOutline className="align-middle w-5 h-5" />
                                                </span>
                                            </button>
                                        </div>
                                        

                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>

            <div className="hidden flex-col items-center justify-center w-96 h-max large-xs:flex">
                <div className="relative w-64 h-fit animate-slow-bounce mt-60">
                    <div className="">
                        <img className="w-full h-full object-contain" src="./images/idea-memoji.png" alt="idea" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact