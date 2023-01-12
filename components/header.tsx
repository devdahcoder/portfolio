import { motion } from "framer-motion";
import React from "react";
import { headerNavigation } from "../context/header-navigation";
import { useMainContainer } from "../state/main";
import { NAVIGATION_TYPE } from "../types/enums";
import HeaderNav from "./header-nav";
import LinkNavigation from "./link-navigation";
import Logo from "./logo";
import StaticIconContainer from "./static-icon-container";
import StaticNavigationLink from "./static-navigation-link";
import ThemeToggleButton from "./theme-toggle-button";

const Header = () => {
	const { navigationModal, toggleNavigationModal, hasPageFullyLoaded } =
		useMainContainer();

	return (
		<div
			className={`flex border-b border-b-black dark:border-white transition-all duration-500 ease-linear w-full `}
		>
			<div className="flex flex-row items-center justify-between grow px-2 small-xs:px-5 medium-sm:px-10 extra-large-xs:px-20 py-7">
				<div
					className={`${
						hasPageFullyLoaded ? "z-50" : "-z-50"
					} flex flex-row items-center`}
				>
					<Logo />
				</div>
				{/* <HeaderNav /> */}
				<div
					className={`flex rounded-full ${
						hasPageFullyLoaded ? "z-50" : ""
					}`}
				>
					<motion.button
						whileTap={{ scale: 0.97 }}
						onClick={toggleNavigationModal}
						className="flex flex-col items-center justify-center font-inter relative h-10 w-10 rounded-full outline-none border-none"
					>
						<StaticIconContainer
							className={` ${
								navigationModal
									? " translate-y-0 -rotate-45"
									: "-translate-y-[10px]"
							}`}
						/>
						<StaticIconContainer
							className={` ${
								navigationModal ? "opacity-0" : "opacity-1"
							}`}
						/>
						<StaticIconContainer
							className={` ${
								navigationModal
									? " translate-y-0 rotate-45"
									: "translate-y-[10px]"
							}`}
						/>
					</motion.button>
				</div>
			</div>

			<div
				className="
                flex flex-row items-center justify-center border-l ml-auto relative w-full max-w-[3.7rem] small-mid:max-w-[5rem] 
                extra-large-xs:max-w-[5.4rem] py-7 border-l-black dark:border-l-white"
			>
				<ThemeToggleButton />
			</div>
		</div>
	);
};

export default Header;
