/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import SectionHeader from "../section-header";
import SocialMediaLink from "../social-media-link";

type Props = {};

const About = (props: Props) => {
	return (
		<section
			id="about"
			className="mt-20 mb-16 flex flex-col gap-y-8 px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20 "
		>
			<SectionHeader
				headerText={"Selected Projects"}
				sectionTitle={"About Me"}
			/>

			<div className="flex flex-col justify-between large-xs:flex-row text-center large-xs:text-start space-y-8 large-xs:space-y-0 bg-noisy-gradient bg-cover">
				<div className="w-full py-16">
					<div className="flex flex-col space-y-10 w-10/12 my-0 mx-auto">
						<div
							className="text-4xl font-machina font-semibold space-y-1 text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-40 "
						>
							<div className="">
								<p>HELLO;)</p>
							</div>
							<div>
								{/* <p>I know, I know I just can&lsquo;t stop talking about myself</p> */}
								<p>Just a few more things about myself</p>
							</div>
						</div>

						<div className="flex flex-col space-y-8 font-inter ">
							<div className="flex flex-col uppercase space-y-8 ">
								<div>
									<p>
										I am currently working as a Frontend
										Developer at Divergent Business.
									</p>
								</div>
								<div>
									<p>
										I Develop, design, IMPLEMENT and
										maintain COMPLEX WEBSITE Solutions where
										I also focus on improving the quality of
										frontend code by paying close attention
										to details with the help of grade A
										softwares and developer tools/processes.
										{/* for FROM CREATING A VISUAL INTERFACE (UI) AND BUILDING A USER EXPERIENCE (UX) TO FURTHER BUILDING IT ON THE TILDA PLATFORM. */}
									</p>
								</div>
								<div>
									<p>
										MY SITES EMBODY A CLEAN AND MINIMALISTIC
										DESIGN, SOLVE BUSINESS ISSUES, AND ARE
										USER-FRIENDLY. I HAVE worked in some OF
										THE BEST COMPANIES learn&apos;t best
										practices and industry standards to
										write clean, readable and reusable
										codebase.
									</p>
								</div>
							</div>
							{/* text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-40  */}
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

				<div className="group block w-full">
					<div className="relative block pb-[100%] overflow-hidden w-full h-full opacity-30">
						<Image
							className="group-hover:scale-125 absolute top-0 left-0 select-none w-full h-full object-cover will-change-transform transition-all duration-500 ease-in-out bg-fixed bg-center bg-cover bg-image"
							src="/images/photo.jpg"
							alt=""
							layout="fill"
							objectFit="cover"
							quality={70}
							priority={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
