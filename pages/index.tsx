import React from "react";
import { Toaster } from "react-hot-toast";
import { getAppLayout } from "../components/layouts/app-layout";
import Loading from "../components/loading";
import About from "../components/section/about";
import Community from "../components/section/community";
import Contact from "../components/section/contact";
import Contributions from "../components/section/contributions";
import Experience from "../components/section/experience";
import Footer from "../components/section/footer";
import HomePage from "../components/section/home-page";
import Talk from "../components/section/talk";
import Works from "../components/section/works";
import { useMainContainer } from "../state/main";

const Home = () => {
	const { hasPageFullyLoaded, isTextCompleted, loadingTextRefElement, name } =
		useMainContainer();

	if (!hasPageFullyLoaded) {
		return (
			<Loading
				isTextCompleted={isTextCompleted}
				hasPageFullyLoaded={hasPageFullyLoaded}
				loadingTextRefElement={loadingTextRefElement}
			/>
		);
	}

	return (
		<div className="">
			<Toaster />
			<HomePage hasPageFullyLoaded={hasPageFullyLoaded} name={name} />
			{/* <About /> */}
			{/* <Experience /> */}
			<Works />
			{/* Coming soon */}
			{/* <Talk /> */}
			<Community />
			<Contributions />
			<Contact />
			<Footer />
		</div>
	);
};

Home.getLayout = getAppLayout;

export default Home;
